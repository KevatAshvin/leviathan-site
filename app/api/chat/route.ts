import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chatbot-knowledge";

// Levi chat endpoint. Proxies the visitor's conversation to Google's Gemini API
// using a server-side-only API key. The key, the system prompt, and any upstream
// error detail are never exposed to the client.

const DEFAULT_MODEL = "gemini-2.0-flash";
const MAX_HISTORY = 24; // most recent messages kept, oldest trimmed
const MAX_MESSAGE_CHARS = 4000; // per-message cap
const MAX_BODY_BYTES = 64_000;
const UPSTREAM_TIMEOUT_MS = 20_000;

type Role = "user" | "assistant";
type ChatMessage = { role: Role; content: string };

function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // non-browser / same-origin fetches omit Origin
  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function isValidMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const msg = value as Record<string, unknown>;
  return (
    (msg.role === "user" || msg.role === "assistant") &&
    typeof msg.content === "string" &&
    msg.content.trim().length > 0
  );
}

const FRIENDLY_ERROR =
  "Sorry, I'm having trouble responding right now. Please try again in a moment, or email us at service@leviathansellers.com.";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Service not configured — fail gracefully without leaking that detail.
    return NextResponse.json(
      {
        error:
          "The chat assistant is temporarily unavailable. Please email us at service@leviathansellers.com and we'll be glad to help.",
      },
      { status: 503 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request body is too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const rawMessages = body.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const messages = rawMessages.filter(isValidMessage).slice(-MAX_HISTORY);
  if (messages.length === 0) {
    return NextResponse.json({ error: "No valid messages provided." }, { status: 400 });
  }

  if (messages.some((m) => m.content.length > MAX_MESSAGE_CHARS)) {
    return NextResponse.json({ error: "A message is too long." }, { status: 400 });
  }

  // The last message must come from the visitor for Gemini to respond.
  if (messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "Expected a user message." }, { status: 400 });
  }

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model,
  )}:generateContent`;

  const payload = {
    systemInstruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 800,
    },
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!upstream.ok) {
      // Log the real upstream detail server-side only; never forward it.
      console.error(
        "Gemini request failed:",
        upstream.status,
        await upstream.text().catch(() => ""),
      );
      return NextResponse.json({ error: FRIENDLY_ERROR }, { status: 502 });
    }

    const data = (await upstream.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
    };

    const reply = data.candidates?.[0]?.content?.parts
      ?.map((p) => p.text ?? "")
      .join("")
      .trim();

    if (!reply) {
      console.error("Gemini returned no usable content:", JSON.stringify(data).slice(0, 500));
      return NextResponse.json({ error: FRIENDLY_ERROR }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Gemini request timed out.");
      return NextResponse.json({ error: FRIENDLY_ERROR }, { status: 504 });
    }
    console.error("Chat route error:", error);
    return NextResponse.json({ error: FRIENDLY_ERROR }, { status: 500 });
  } finally {
    clearTimeout(timeout);
  }
}
