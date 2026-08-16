import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting map for portfolio contact endpoint
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

// Strict email regex validation (RFC 5322 compliant simple variant)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'anonymous';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many submissions. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = body;

    // 3. Honeypot check (Catch automated spam bots silently)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Return silent fake success so bots think it worked
      return NextResponse.json(
        { success: true, message: 'Message sent successfully.' },
        { status: 200 }
      );
    }

    // 4. Server-Side Inputs Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please enter a subject.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please enter your message.' },
        { status: 400 }
      );
    }

    // Length Constraints
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Name cannot exceed 100 characters.' },
        { status: 400 }
      );
    }

    if (trimmedEmail.length > 254) {
      return NextResponse.json(
        { success: false, message: 'Email cannot exceed 254 characters.' },
        { status: 400 }
      );
    }

    if (trimmedSubject.length > 150) {
      return NextResponse.json(
        { success: false, message: 'Subject cannot exceed 150 characters.' },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 3000) {
      return NextResponse.json(
        { success: false, message: 'Message cannot exceed 3000 characters.' },
        { status: 400 }
      );
    }

    // Sanitization against HTML injection
    const cleanName = sanitizeHtml(trimmedName);
    const cleanEmail = sanitizeHtml(trimmedEmail);
    const cleanSubject = sanitizeHtml(trimmedSubject);
    const cleanMessage = sanitizeHtml(trimmedMessage);

    // 5. Initialize Resend SDK
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.includes('your_resend_api_key')) {
      console.warn(
        '[Contact Route Warning] RESEND_API_KEY is not configured or using default placeholder in .env.local.'
      );
    }

    const resend = new Resend(apiKey || 're_placeholder_key');

    // 6. Build Email Templates
    const emailSubject = `Portfolio Contact — ${cleanSubject}`;
    const destinationEmail = 'jossyyasub@gmail.com';

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0E17; color: #F3F4F6; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1F2937; border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .header { border-b: 1px solid #1F2937; padding-bottom: 20px; margin-bottom: 24px; }
        .badge { display: inline-block; background: rgba(14, 165, 233, 0.15); color: #38BDF8; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(14, 165, 233, 0.3); }
        .title { color: #F9FAFB; font-size: 22px; font-weight: 800; margin: 12px 0 4px 0; }
        .grid { background: #0A0E17; border: 1px solid #1F2937; border-radius: 12px; padding: 16px; margin-bottom: 24px; }
        .row { margin-bottom: 12px; font-size: 14px; }
        .row:last-child { margin-bottom: 0; }
        .label { color: #9CA3AF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px; }
        .value { color: #F3F4F6; font-weight: 600; word-break: break-word; }
        .email-link { color: #38BDF8; text-decoration: none; font-weight: 600; }
        .message-box { background: #0A0E17; border: 1px solid #1F2937; border-radius: 12px; padding: 20px; color: #E5E7EB; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-break: break-word; }
        .footer { margin-top: 32px; pt-16px; border-t: 1px solid #1F2937; text-align: center; color: #6B7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="badge">New Portfolio Contact</span>
          <h1 class="title">${cleanSubject}</h1>
        </div>

        <div class="grid">
          <div class="row">
            <div class="label">Sender Name</div>
            <div class="value">${cleanName}</div>
          </div>
          <div class="row">
            <div class="label">Sender Email</div>
            <div class="value">
              <a href="mailto:${cleanEmail}" class="email-link">${cleanEmail}</a>
            </div>
          </div>
          <div class="row">
            <div class="label">Inquiry Subject</div>
            <div class="value">${cleanSubject}</div>
          </div>
        </div>

        <div class="label" style="margin-bottom: 8px;">Message Content</div>
        <div class="message-box">${cleanMessage}</div>

        <div class="footer">
          Sent from Yosef Abire Portfolio Website • Delivered to ${destinationEmail}
        </div>
      </div>
    </body>
    </html>
    `;

    const textContent = `
New Portfolio Contact Submission

Name: ${trimmedName}
Email: ${trimmedEmail}
Subject: ${trimmedSubject}

Message:
${trimmedMessage}
    `.trim();

    // 7. Send Transactional Email via Resend
    const { error } = await resend.emails.send({
      from: 'Yosef Portfolio <onboarding@resend.dev>',
      to: [destinationEmail],
      replyTo: trimmedEmail,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('[Resend Email Error]', error);
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send your message right now. Please try again.',
        },
        { status: 500 }
      );
    }

    // 8. Return Success JSON Response
    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API Unexpected Error]', err);
    // Never expose stack trace or internal details to browser
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to send your message right now. Please try again.',
      },
      { status: 500 }
    );
  }
}
