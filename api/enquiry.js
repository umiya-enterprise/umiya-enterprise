import nodemailer from 'nodemailer';
import { business } from '../src/data/site.js';
import { adminEmail, customerEmail } from './_lib/emails.js';
import { LOGO_BASE64 } from './_lib/logo.js';

/**
 * POST /api/enquiry — emails the enquiry to the business and a branded confirmation to the customer.
 * Runs as a Vercel serverless function in production and through the Vite dev/preview server locally.
 * Needs GMAIL_USER and GMAIL_APP_PASSWORD (see .env.example); responds 503 `not_configured` without them.
 */

const THROTTLE_MS = 60_000;
const recent = new Map();

function reply(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

const text = (value, max) => String(value ?? '').trim().slice(0, max);

function validate(d) {
  const digits = d.phone.replace(/\D/g, '');
  if (d.name.length < 2) return 'Please enter your name.';
  if (digits.length < 10 || digits.length > 13) return 'Please enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) return 'Please enter a valid email address.';
  if (!d.requirement) return 'Please choose your requirement.';
  return '';
}

function createTransport() {
  const auth = { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '') };
  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT || 587);
    return nodemailer.createTransport({ host: process.env.SMTP_HOST, port, secure: port === 465, auth });
  }
  return nodemailer.createTransport({ service: 'gmail', auth });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return reply(res, 405, { ok: false, error: 'Method not allowed.' });
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return reply(res, 503, { ok: false, code: 'not_configured' });
  }

  let body = req.body ?? {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      body = {};
    }
  }

  // Hidden field only bots fill in
  if (body.company) return reply(res, 200, { ok: true, confirmationSent: false });

  const enquiry = {
    name: text(body.name, 80),
    phone: text(body.phone, 20),
    email: text(body.email, 120),
    requirement: text(body.requirement, 60),
    message: text(body.message, 1000),
    submittedAt: new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date()),
  };

  const problem = validate(enquiry);
  if (problem) return reply(res, 400, { ok: false, error: problem });

  const key = enquiry.email.toLowerCase();
  if (Date.now() - (recent.get(key) || 0) < THROTTLE_MS) {
    return reply(res, 429, { ok: false, error: 'Please wait a minute before sending another enquiry.' });
  }

  const transport = createTransport();
  const from = `"${business.name}" <${process.env.GMAIL_USER}>`;
  const inbox = process.env.ENQUIRY_TO || business.enquiryInbox;
  const logo = [{ filename: 'umiya-logo.png', content: Buffer.from(LOGO_BASE64, 'base64'), cid: 'logo' }];

  try {
    const admin = adminEmail(enquiry);
    await transport.sendMail({
      from,
      to: inbox,
      replyTo: enquiry.email,
      subject: admin.subject,
      html: admin.html,
      text: admin.text,
      attachments: logo,
    });
  } catch (error) {
    console.error('[enquiry] business email failed:', error.message);
    return reply(res, 502, { ok: false, error: 'Unable to send the enquiry right now.' });
  }

  recent.set(key, Date.now());

  let confirmationSent = false;
  try {
    const customer = customerEmail(enquiry, process.env.SITE_URL || '');
    await transport.sendMail({
      from,
      to: enquiry.email,
      replyTo: inbox,
      subject: customer.subject,
      html: customer.html,
      text: customer.text,
      attachments: logo,
    });
    confirmationSent = true;
  } catch (error) {
    console.error('[enquiry] confirmation email failed:', error.message);
  }

  return reply(res, 200, { ok: true, confirmationSent });
}
