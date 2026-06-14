"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CTA_TOKEN,
  CONTACT_URL,
  GREETING,
  SUGGESTED_PROMPTS,
} from "@/lib/chatbot-knowledge";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

// Brand + site design tokens (kept inline so the widget is self-contained).
const BRAND = "#f97316";
const TEXT = "#374151";
const BORDER = "#e2e8f0";
const SURFACE = "#f1f5f9";

const MAX_INPUT = 4000;

/**
 * Floating "Levi" chat assistant rendered once in the root layout, so it appears
 * on every page. It POSTs the running conversation to /api/chat and renders the
 * model's reply. When a reply contains the CTA token, the token is stripped and a
 * "Get my free audit" button is shown in its place. No conversation is persisted.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message / typing indicator.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // Focus the input when the panel opens; restore focus to the launcher on close.
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      launcherRef.current?.focus();
    }
  }, [open]);

  // Close on Escape while the panel is open.
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        reply?: string;
        error?: string;
      };

      if (!res.ok || !data.reply) {
        setError(
          data.error ??
            "Sorry, something went wrong. Please try again or email service@leviathansellers.com.",
        );
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply as string }]);
    } catch {
      setError(
        "I couldn't reach the server. Please check your connection and try again, or email service@leviathansellers.com.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* Launcher */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        aria-controls="levi-chat-panel"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
        style={{ backgroundColor: BRAND }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          id="levi-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Levi, the Leviathan Sellers assistant"
          className="fixed bottom-24 right-5 z-50 flex w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          style={{ border: `1px solid ${BORDER}`, height: "min(34rem, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 text-white"
            style={{ backgroundColor: BRAND }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base font-semibold">
              L
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">Levi</p>
              <p className="text-xs leading-tight text-white/85">Leviathan Sellers assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto rounded-full p-1.5 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            style={{ backgroundColor: SURFACE }}
            aria-live="polite"
            aria-atomic="false"
          >
            {/* Greeting is always shown first */}
            <Bubble role="assistant">{GREETING}</Bubble>

            {isEmpty && (
              <div className="flex flex-col gap-2 pt-1">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void sendMessage(prompt)}
                    className="self-start rounded-full bg-white px-3 py-1.5 text-left text-xs font-medium transition-colors hover:bg-orange-50"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <Bubble key={index} role={message.role}>
                {message.content}
              </Bubble>
            ))}

            {loading && <TypingDots />}

            {error && (
              <div
                role="alert"
                className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700"
                style={{ border: "1px solid #fecaca" }}
              >
                {error}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 bg-white px-3 py-3"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <label htmlFor="levi-chat-input" className="sr-only">
              Type your message to Levi
            </label>
            <input
              ref={inputRef}
              id="levi-chat-input"
              type="text"
              value={input}
              maxLength={MAX_INPUT}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about FBA recovery…"
              autoComplete="off"
              className="flex-1 rounded-full px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              style={{ border: `1px solid ${BORDER}`, color: TEXT }}
            />
            <button
              type="submit"
              disabled={loading || input.trim().length === 0}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              style={{ backgroundColor: BRAND }}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: Role; children: string }) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm px-3.5 py-2 text-sm text-white"
          style={{ backgroundColor: BRAND }}
        >
          {children}
        </div>
      </div>
    );
  }

  // Assistant bubble: extract the CTA token, if present, and render a button.
  const hasCta = children.includes(CTA_TOKEN);
  const text = hasCta ? children.split(CTA_TOKEN).join("").trim() : children;

  return (
    <div className="flex justify-start">
      <div
        className="max-w-[85%] space-y-2 rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-sm"
        style={{ border: `1px solid ${BORDER}`, color: TEXT }}
      >
        {text && <p className="whitespace-pre-wrap">{text}</p>}
        {hasCta && (
          <Link
            href={CONTACT_URL}
            className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            style={{ backgroundColor: BRAND }}
          >
            Get my free audit →
          </Link>
        )}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex justify-start" aria-label="Levi is typing">
      <div
        className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3.5 py-3"
        style={{ border: `1px solid ${BORDER}` }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-bounce rounded-full"
            style={{ backgroundColor: "#94a3b8", animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
