import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import {
  marqueePeople, partners, catData, featuredProgrammes,
  initialEvents, pillars, articles, testimonials, faqs,
} from '../data/homeData';

async function submitEventRegistration(payload) {
  console.log('Event registration submitted (not yet sent anywhere):', payload);
  return { ok: true };
}

async function subscribeToNewsletter(email) {
  console.log('Newsletter signup (not yet sent anywhere):', email);
  return { ok: true };
}

export default function Home() {
  useScrollReveal();
  const [events, setEvents] = useState(initialEvents);
  const [openFaq, setOpenFaq] = useState(0);
  const [showAnnounce, setShowAnnounce] = useState(true);
  const [newsletterState, setNewsletterState] = useState({ email: '', submitting: false, success: false });
  const [activePillar, setActivePillar] = useState(0);
  const [eventPopup, setEventPopup] = useState({ visible: false });
  const [summitModalOpen, setSummitModalOpen] = useState(false);
  const [summitRegistrationSent, setSummitRegistrationSent] = useState(false);
  const [summitForm, setSummitForm] = useState({ name: '', email: '', audience: 'Graduate' });
  const pillarRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setEventPopup({ visible: true, title: 'Future of Work Summit', meta: '1 October 2026 · Online' }), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const refs = pillarRefs.current;
    if (!refs.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const i = Number(entry.target.dataset.i);
          setActivePillar(i);
        }
      });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });
    refs.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!summitModalOpen) return undefined;
    document.body.classList.add('modal-open');
    const closeOnEscape = (e) => { if (e.key === 'Escape') setSummitModalOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [summitModalOpen]);

  const openEventForm = (id) => {
    setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, openForm: true } : e)));
  };

  const handleEventSubmit = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('.reg-name').value.trim();
    const email = form.querySelector('.reg-email').value.trim();
    if (!name) return;
    const ev = events.find((x) => x.id === id);
    await submitEventRegistration({ eventId: id, eventTitle: ev.title, name, email });
    setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, registered: true, openForm: false } : e)));
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    const email = newsletterState.email.trim();
    if (!email) return;
    setNewsletterState((s) => ({ ...s, submitting: true }));
    await subscribeToNewsletter(email);
    setNewsletterState({ email: '', submitting: false, success: true });
  };

  const handleSummitRegistration = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Future of Work Summit registration');
    const body = encodeURIComponent(`Please register me for the Future of Work Summit.\n\nName: ${summitForm.name.trim()}\nEmail: ${summitForm.email.trim()}\nI am registering as: ${summitForm.audience}\n\nPlease send me the online access link.`);
    window.location.href = `mailto:moweglobaloffice@gmail.com?subject=${subject}&body=${body}`;
    setSummitRegistrationSent(true);
  };

  const marqueeHtml = marqueePeople.map((p) => (
    <div className="marquee-card" key={p.name} style={{ background: `url("${p.img}") center/cover` }}>
      <div className="overlay">
        <div className="name">{p.name}</div>
        <div className="role">{p.role}</div>
      </div>
    </div>
  ));

  const trustHtml = partners.concat(partners).map((partner, i) => (
    <div className="trusted-partner" key={partner.name + i}>
      <img src={partner.img} alt={partner.name} />
    </div>
  ));

  return (
    <div className="page-home">
      {showAnnounce && (
        <div className="announce up" id="announceBar" style={{ animationDelay: '0s' }}>
          <Link to="/services">
            <span className="badge">New</span>
            R-CAP Executive Certification is open for enrollment
          </Link>
          <button className="announce-close" aria-label="Dismiss" onClick={() => setShowAnnounce(false)}>&times;</button>
        </div>
      )}

      <section className="hero">
        <div className="grid-overlay"></div>
        <div className="blue-glow"></div>
        <div className="hero-photo" aria-hidden="true">
          <img src="/assets/DSC00975.jpg" alt="" />
        </div>
        <div className="hero-inner">
          <h1 className="up flex-fx" style={{ animationDelay: '.2s' }}>Workforce Engagement,<br /><span className="growth-reveal">Reimagined for Growth.</span></h1>
          <p className="up" style={{ animationDelay: '.38s' }}>We help organizations turn disengaged teams into workforces that show up, own their results, and grow with the business.</p>
          <div className="up" style={{ animationDelay: '.54s' }}>
            <Link to="/services" className="btn-primary">Get Started</Link>
          </div>
        </div>
        <div className="up marquee-wrap" style={{ animationDelay: '.7s' }}>
          <div className="marquee-track">
            <div className="marquee-set">{marqueeHtml}</div>
            <div className="marquee-set">{marqueeHtml}</div>
          </div>
        </div>
      </section>

      <section className="trusted">
        <div className="trusted-label">Trusted by teams building engaged workforces</div>
        <div className="trusted-mask">
          <div className="trusted-track">{trustHtml}</div>
        </div>
      </section>

      <section className="summit-feature" id="future-of-work-summit">
        <div className="summit-feature-card">
          <div className="summit-poster">
            <img src="/assets/future-of-work-summit.jpg" alt="Future of Work Summit poster. 1 October 2026." />
          </div>
          <div className="summit-feature-copy">
            <div className="summit-label"><span></span> Upcoming event</div>
            <p className="summit-date">1 October 2026 <span>·</span> Online</p>
            <h2>Future of Work Summit</h2>
            <p className="summit-description">Get ready for the realities of work ahead: remote work, freelancing, the gig economy, and the age of AI.</p>
            <div className="summit-audience">
              <span>Graduates</span><span>Young professionals</span><span>Corporate members</span>
            </div>
            <p className="summit-access">Your online access link will be shared after registration.</p>
            <button className="summit-register" onClick={() => { setSummitRegistrationSent(false); setSummitModalOpen(true); }}>Register for the summit</button>
          </div>
        </div>
      </section>

      <section className="cats-section">
        <div className="section-head">
          <div className="eyebrow">What We Do</div>
          <h2 className="flex-fx">Our Service Categories</h2>
          <p>Four connected ways to strengthen leadership, workforce insight, performance, and capability.</p>
        </div>
        <div className="cats-row">
          {catData.map((c, i) => (
            <div
              key={c.title}
              className="cat-card"
            >
              <div className="cat-card-image" style={{ backgroundImage: `url("${c.img}")` }}>
                <span className="cat-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="cat-card-content">
                <div className="cat-card-expanded">
                  <h3>{c.title}</h3>
                  <ul className="cat-items">{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  <Link to="/services" className="link">Learn More</Link>
                </div>
                <div className="cat-card-collapsed">
                  <div className="cat-icon-small">{c.icon}</div>
                  <h3 className="cat-title-vertical">{c.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-head">
          <div className="eyebrow">Signature Programmes</div>
          <h2 className="flex-fx">Featured Offerings</h2>
        </div>
        <div className="featured-grid">
          {featuredProgrammes.map((p) => (
            <div className="featured-card" key={p.title}>
              <div className="thumb" style={{ background: `url("${p.img}") center/cover` }}></div>
              <div className="body">
                <div className="kicker">{p.kicker}</div>
                <h3 className="flex-fx">{p.title}</h3>
                <p>{p.description}</p>
                <ul>{p.impact.map((im) => <li key={im}>{im}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="events-head">
          <div>
            <div className="eyebrow">Calendar</div>
            <h2>Trainings &amp; Events</h2>
            <p>Open cohorts, corporate workshops, and custom trainings for schools, colleges, and institutes â€” we build the curriculum to fit your students or staff.</p>
          </div>
        </div>
        <div className="events-grid">
          {events.map((ev) => (
            <div className="event-card" key={ev.id}>
              <div className="event-thumb" style={{ background: `url("${ev.img}") center/cover` }}>
                <div className="event-badges">
                  <span className="event-badge-date">{ev.date}</span>
                  <span className="event-badge-format">{ev.format}</span>
                </div>
              </div>
              <div className="event-body">
                <h3>{ev.title}</h3>
                {(ev.registrationOpen || ev.id === 3) ? (
                  ev.registered ? (
                    <div className="event-registered">Registered</div>
                  ) : ev.openForm ? (
                    <form className="event-form" onSubmit={(e) => handleEventSubmit(e, ev.id)}>
                      <input type="text" placeholder="Your name" className="reg-name" required />
                      <input type="email" placeholder="Your email" className="reg-email" required />
                      <button type="submit">Confirm Registration</button>
                    </form>
                  ) : (
                    <button className="event-register-btn" onClick={() => openEventForm(ev.id)}>Register</button>
                  )
                ) : (
                  <div className="event-closed">Registration closed</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="institutes-cta">
          <div>
            <div className="eyebrow">For Schools &amp; Institutes</div>
            <h3>We train schools, colleges &amp; institutes too.</h3>
            <p>Custom leadership, career-readiness, and performance workshops for students, faculty, and administrative staff.</p>
          </div>
          <Link to="/contact">Enquire for Your Institution</Link>
        </div>
      </section>

      <section className="pillars-section">
        <div className="pillars-grid">
          <div className="pillars-sticky">
            <div className="eyebrow">Why MOWE Global</div>
            <h2>What Sets Us Apart</h2>
            <p>Every engagement is built on original, research-backed intellectual property â€” designed to move the needle on real workforce outcomes, not recycled theory.</p>
            <div className="pillars-progress">
              {pillars.map((_, i) => (
                <span key={i} data-i={i} className={i === activePillar ? 'active' : ''}></span>
              ))}
            </div>
          </div>
          <div className="pillar-list">
            {pillars.map((pi, i) => (
              <div
                key={pi.title}
                className={`pillar-item${i === activePillar ? ' active' : ''}`}
                data-i={i}
                ref={(el) => (pillarRefs.current[i] = el)}
              >
                <div className="pillar-head">
                  <div className="pillar-num flex-fx">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{pi.title}</h3>
                </div>
                <p>{pi.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fred-teaser">
        <div className="fred-teaser-card reveal" data-reveal>
          <div className="fred-teaser-photo">
            <img src="/assets/fred-portrait-nobg.png" alt="Fredrick Okeagu" />
          </div>
          <div className="fred-teaser-body">
            <div className="eyebrow">Lead Consultant</div>
            <h2>Fredrick Okeagu</h2>
            <div className="alias">"Fred Rabbi"</div>
            <p>A seasoned HR professional with 15+ years in Human Capital Management â€” Certified Management Consultant, ISO Certified Consultant, and KPI professional. Public speaker and performance coach helping people and organizations build cultures where commitment is earned.</p>
            <Link to="/fred-rabbi">Read Full Profile</Link>
          </div>
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-inner">
          <div className="insights-head">
            <div>
              <div className="eyebrow">Insights</div>
              <h2 className="flex-fx">From the MOWE Desk</h2>
            </div>
          </div>
          {articles.slice(0, 1).map((a) => (
            <div className="insight-card reveal" data-reveal key={a.title}>
              <div>
                <div className="read-time">{a.readTime}</div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="soon">Coming Soon</span>
              </div>
              <div className="thumb" style={{ background: `url("${a.img}") center/cover` }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="testimonials-section">
        <div className="section-head">
          <div className="eyebrow">Testimonials</div>
          <h2 className="flex-fx">If They Can Grow, So Can You</h2>
          <p>Hear directly from the leaders and teams MOWE Global has worked with.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name} style={{ background: `url("${t.img}") center/cover` }}>
              <div className="gradient"></div>
              <div className="play"><span></span></div>
              <div className="caption">
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="faq-section">
        <div className="eyebrow">FAQ</div>
        <h2>Questions, Answered</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item${i === openFaq ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-box">
          <div>
            <h2>Workforce insights, monthly.</h2>
            <p>One short email on engagement, leadership, and what's working right now â€” no noise.</p>
          </div>
          <div className="newsletter-success" style={{ display: newsletterState.success ? 'block' : 'none' }}>âœ“ Subscribed â€” welcome aboard.</div>
          <form
            className="newsletter-form"
            onSubmit={handleNewsletter}
            style={{ display: newsletterState.success ? 'none' : 'flex' }}
          >
            <input
              type="email"
              placeholder="you@company.com"
              required
              value={newsletterState.email}
              onChange={(e) => setNewsletterState((s) => ({ ...s, email: e.target.value }))}
            />
            <button type="submit" disabled={newsletterState.submitting}>
              {newsletterState.submitting ? 'Submittingâ€¦' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box reveal" data-reveal>
          <h2>Ready to Transform Your Workforce?</h2>
          <p>Partner with MOWE Global for leadership development, workforce diagnostics, and performance systems tailored to your organization.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn-white">Get in Touch</Link>
            <a href="tel:+2348032613268" className="cta-btn-ghost">Call +234 803 261 3268</a>
          </div>
        </div>
      </section>

      {summitModalOpen && (
        <div className="summit-modal-backdrop" onClick={() => setSummitModalOpen(false)}>
          <div className="summit-modal" role="dialog" aria-modal="true" aria-labelledby="summit-modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="summit-modal-close" type="button" aria-label="Close registration" onClick={() => setSummitModalOpen(false)}>&times;</button>
            <div className="summit-label"><span></span> 1 October 2026 · Online</div>
            <h2 id="summit-modal-title">Register for the Future of Work Summit</h2>
            {summitRegistrationSent ? (
              <div className="summit-registration-success">
                <p>Your email app should open with your registration details. Send the message to complete your registration. MOWE Global will share the online access link with you.</p>
                <a href="mailto:moweglobaloffice@gmail.com?subject=Future%20of%20Work%20Summit%20registration">Email MOWE Global</a>
              </div>
            ) : (
              <form className="summit-form" onSubmit={handleSummitRegistration}>
                <label>Full name<input required autoComplete="name" value={summitForm.name} onChange={(e) => setSummitForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" /></label>
                <label>Email address<input required type="email" autoComplete="email" value={summitForm.email} onChange={(e) => setSummitForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@example.com" /></label>
                <label>I am registering as
                  <select value={summitForm.audience} onChange={(e) => setSummitForm((f) => ({ ...f, audience: e.target.value }))}>
                    <option>Graduate</option><option>Young professional</option><option>Corporate member</option>
                  </select>
                </label>
                <p>We'll send your online access link after registration.</p>
                <button type="submit" className="summit-register">Continue registration</button>
              </form>
            )}
          </div>
        </div>
      )}
      {eventPopup.visible && (
        <div className="event-popup up">
          <button className="event-popup-close" aria-label="Dismiss" onClick={() => setEventPopup((p) => ({ ...p, visible: false }))}>&times;</button>
          <div className="tag"><span>Upcoming Event</span></div>
          <div className="title">{eventPopup.title}</div>
          <div className="meta">{eventPopup.meta}</div>
          <button type="button" onClick={() => { setEventPopup((p) => ({ ...p, visible: false })); setSummitRegistrationSent(false); setSummitModalOpen(true); }}>Register now</button>
        </div>
      )}
    </div>
  );
}
