import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "marketplace", "service"] as const;
const MAX_FIELD_LENGTH = 2000;
const MAX_BODY_BYTES = 32_000;

// Rate limiting should be handled at the edge/middleware layer or via a service
// like Upstash Redis — in-memory Maps do not persist across serverless invocations.

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: unknown) {
  return (
    typeof value === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
}

function isSafeLength(value: unknown) {
  return typeof value !== "string" || value.length <= MAX_FIELD_LENGTH;
}

function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
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

  if (isNonEmptyString(body.website_url)) {
    return NextResponse.json({ ok: true });
  }

  const missingField = requiredFields.find((field) => !isNonEmptyString(body[field]));

  if (missingField) {
    return NextResponse.json(
      { error: `${missingField} is required.` },
      { status: 400 },
    );
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 },
    );
  }

  const fieldsWithinLimit =
    isSafeLength(body.name) &&
    isSafeLength(body.email) &&
    isSafeLength(body.phone) &&
    isSafeLength(body.monthlyRevenue) &&
    isSafeLength(body.marketplace) &&
    isSafeLength(body.service) &&
    isSafeLength(body.message);

  if (!fieldsWithinLimit) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  const submission = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    phone: isNonEmptyString(body.phone) ? String(body.phone).trim() : "",
    monthlyRevenue: isNonEmptyString(body.monthlyRevenue)
      ? String(body.monthlyRevenue).trim()
      : "",
    marketplace: String(body.marketplace).trim(),
    service: String(body.service).trim(),
    message: isNonEmptyString(body.message) ? String(body.message).trim() : "",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Contact service is not configured. Please email us directly." },
      { status: 503 },
    );
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });

  if (!webhookResponse.ok) {
    console.error("Webhook failed:", webhookResponse.status, await webhookResponse.text().catch(() => ""));
    return NextResponse.json(
      { error: "Unable to submit your request right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
