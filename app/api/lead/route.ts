import { NextResponse } from "next/server";
import { createLead } from "../../../lib/crm";

type LeadRequest = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  // Honeypot field — must stay empty for real users.
  website?: string;
};

export const runtime = "nodejs";

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

// Basic in-memory rate limiter (per server instance): max submissions per IP per window.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let payload: LeadRequest;

  try {
    payload = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: a real user never fills this. If present, pretend success and drop silently.
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const fullName = payload.fullName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!fullName) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  try {
    await createLead({
      fullName,
      email,
      phone: payload.phone?.trim() || undefined,
      company: payload.company?.trim() || undefined,
      message
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while submitting the lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
