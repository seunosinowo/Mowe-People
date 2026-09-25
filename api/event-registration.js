import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const { eventId, eventTitle, eventDate, name, email, audience } = request.body ?? {};
  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const cleanTitle = typeof eventTitle === 'string' ? eventTitle.trim() : '';
  const cleanDate = typeof eventDate === 'string' ? eventDate.trim() : '';

  if (!Number.isInteger(eventId) || !cleanTitle || !cleanDate || !cleanName || cleanName.length > 160 || !emailPattern.test(cleanEmail) || cleanEmail.length > 254) {
    return response.status(400).json({ error: 'Please provide a valid name and email for this event.' });
  }

  if (!process.env.DATABASE_URL) {
    return response.status(500).json({ error: 'Registration is not configured yet. Please try again later.' });
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return response.status(500).json({ error: 'Email delivery is not configured yet. Please try again later.' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const mailer = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS.replace(/\s+/g, '') },
    });
    await sql`CREATE TABLE IF NOT EXISTS event_registrations (
      id BIGSERIAL PRIMARY KEY,
      event_id INTEGER NOT NULL,
      event_title TEXT NOT NULL,
      event_date TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;
    await sql`INSERT INTO event_registrations (event_id, event_title, event_date, name, email)
      VALUES (${eventId}, ${cleanTitle}, ${cleanDate}, ${cleanName}, ${cleanEmail})`;
    const cleanAudience = typeof audience === 'string' ? audience.trim() : '';
    const to = process.env.REGISTRATION_EMAIL_TO || 'moweglobaloffice@gmail.com';
    const subject = `New registration: ${cleanTitle}`;
    const details = [
      ['Event', cleanTitle], ['Date', cleanDate], ['Name', cleanName], ['Email', cleanEmail],
      ...(cleanAudience ? [['Registering as', cleanAudience]] : []),
    ];
    const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
    await mailer.sendMail({
      from: `MOWE Global Website <${process.env.SMTP_USER}>`,
      to,
      replyTo: { name: cleanName, address: cleanEmail },
      subject,
      text: `A new registration was received.\n\n${details.map(([label, value]) => `${label}: ${value}`).join('\n')}`,
      html: `<div style="font-family:Arial,sans-serif;color:#182230;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden"><div style="background:#0f2a52;color:white;padding:22px 28px"><p style="margin:0 0 6px;font-size:12px;letter-spacing:1px;text-transform:uppercase">MOWE Global</p><h1 style="margin:0;font-size:22px">New event registration</h1></div><div style="padding:24px 28px"><p style="margin:0 0 18px;color:#475467">A visitor submitted the registration form.</p><table style="border-collapse:collapse;width:100%">${details.map(([label, value]) => `<tr><th style="text-align:left;padding:11px 12px;border-bottom:1px solid #eaecf0;color:#667085;width:140px">${escapeHtml(label)}</th><td style="padding:11px 12px;border-bottom:1px solid #eaecf0">${escapeHtml(value)}</td></tr>`).join('')}</table><p style="margin:20px 0 0;font-size:13px;color:#667085">Reply to this email to contact the registrant.</p></div></div>`,
    });
    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error('Event registration processing failed:', error?.message || 'unknown error');
    return response.status(500).json({ error: 'We could not complete your registration. Please try again.' });
  }
}
