import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

async function submitContactRequest(payload) {
  const response = await fetch('/api/contact-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || 'We could not send your message. Please try again.');
  return result;
}

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', org: '', interest: 'Speaking / Keynote', message: '' });
  const [submitState, setSubmitState] = useState({ submitting: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    if (!name) return;
    setSubmitState({ submitting: true, success: false, error: '' });
    try {
      await submitContactRequest({
        name,
        email: form.email.trim(),
        org: form.org.trim(),
        interest: form.interest,
        message: form.message.trim(),
      });
      setSubmitState({ submitting: false, success: true, error: '' });
    } catch (error) {
      setSubmitState({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <div className="page-contact page-dark">
      <section className="hero">
        <div className="hero-inner">
          <div className="up eyebrow-dot" style={{ animationDelay: '.05s' }}><span className="dot"></span>Get In Touch</div>
          <h1 className="up flex-fx hero-statement" style={{ animationDelay: '.2s' }}>Every transformation starts with one honest conversation.</h1>
        </div>
      </section>

      <section className="contact-section" id="book">
        <div className="form-card reveal" data-reveal>
          <h2 className="flex-fx">Book a Consult</h2>
          <div className="form-success" style={{ display: submitState.success ? 'block' : 'none' }}>
            ✓ Message received — we'll follow up within 2 business days.
          </div>
          {submitState.error && <div className="form-error" role="alert">{submitState.error}</div>}
          <form onSubmit={handleSubmit} style={{ display: submitState.success ? 'none' : 'block' }}>
            <div className="field">
              <label htmlFor="cName">Full Name</label>
              <input
                type="text"
                id="cName"
                placeholder="Jane Doe"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="field">
              <label htmlFor="cEmail">Email</label>
              <input
                type="email"
                id="cEmail"
                placeholder="jane@company.com"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div className="field">
              <label htmlFor="cOrg">Organization</label>
              <input
                type="text"
                id="cOrg"
                placeholder="Company Ltd"
                value={form.org}
                onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
              />
            </div>
            <div className="field">
              <label htmlFor="cInterest">What are you interested in?</label>
              <select
                id="cInterest"
                value={form.interest}
                onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
              >
                <option>Speaking / Keynote</option>
                <option>1:1 Coaching</option>
                <option>Corporate Training</option>
                <option>A Services Programme</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="cMessage">Message</label>
              <textarea
                id="cMessage"
                placeholder="Tell us a bit about what you need…"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn magnetic" disabled={submitState.submitting}>
              {submitState.submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="info-stack reveal" data-reveal style={{ animationDelay: '.1s' }}>
          <div className="info-card">
            <div className="label">Email</div>
            <div className="value"><a href="mailto:support@moweglobal.com">support@moweglobal.com</a></div>
          </div>
          <div className="info-card">
            <div className="label">Phone</div>
            <div className="value"><a href="tel:+2348032613268">+234 803 261 3268</a></div>
          </div>
          <div className="info-card">
            <div className="label">Response Time</div>
            <div className="value">Within 2 business days</div>
          </div>
        </div>
      </section>
    </div>
  );
}
