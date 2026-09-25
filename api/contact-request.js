import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = request.body ?? {};
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const organization = typeof body.org === 'string' ? body.org.trim() : '';
  const interest = typeof body.interest === 'string' ? body.interest.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > 160 || !emailPattern.test(email) || email.length > 254 ||
      organization.length > 200 || !interest || interest.length > 160 || message.length > 5000) {
    return response.status(400).json({ error: 'Please check your details and try again.' });
  }
  if (!process.env.DATABASE_URL) {
    return response.status(500).json({ error: 'The contact form is not configured yet. Please try again later.' });
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return response.status(500).json({ error: 'Email delivery is not configured yet. Please try again later.' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`CREATE TABLE IF NOT EXISTS contact_requests (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT NOT NULL DEFAULT '',
      interest TEXT NOT NULL,
      message TEXT NOT NULL DEFAULT '',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;
    await sql`INSERT INTO contact_requests (name, email, organization, interest, message)
      VALUES (${name}, ${email}, ${organization}, ${interest}, ${message})`;

    const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[char]);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS.replace(/\s+/g, '') },
    });
    const to = process.env.CONTACT_EMAIL_TO || 'support@moweglobal.com';
    await transport.sendMail({
      from: `MOWE Global Website <${process.env.SMTP_USER}>`,
      to,
      replyTo: { name, address: email },
      subject: `New consultation request: ${interest}`,
      text: [
        'A new consultation request was submitted.',
        `Name: ${name}`, `Email: ${email}`, `Organization: ${organization || 'Not provided'}`,
        `Interest: ${interest}`, `Message: ${message || 'Not provided'}`,
      ].join('\n'),
      html: `<h2>New consultation request</h2><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Organization:</b> ${escapeHtml(organization || 'Not provided')}</p><p><b>Interest:</b> ${escapeHtml(interest)}</p><p><b>Message:</b><br>${escapeHtml(message || 'Not provided').replace(/\n/g, '<br>')}</p>`,
    });
    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error('Contact request processing failed:', error?.code || error?.name || 'unknown');
    return response.status(502).json({ error: 'Your request was saved, but we could not notify our team. Please contact us by phone or email.' });
  }
}
