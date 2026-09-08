import { NextRequest, NextResponse } from 'next/server';
import { personal } from '@/data/personal';
import { escapeHtml } from '@/lib/utils';

const TO_EMAIL = personal.email;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const recentRequests = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const stamps = (recentRequests.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );
  if (stamps.length >= RATE_LIMIT_MAX) {
    recentRequests.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  recentRequests.set(ip, stamps);
  return false;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (name.trim().length > MAX_NAME_LENGTH) {
      return NextResponse.json({ error: 'Name is too long' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters' }, { status: 400 });
    }
    if (message.trim().length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const fromEmail = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `[Portfolio] New message from ${name.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #111;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #111; font-weight: 500;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${safeEmail}" style="color: #111;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #111; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999;">
            Sent from your portfolio contact form. Reply directly to this email to respond to ${safeName}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Contact API]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
