import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { books, qualifications, roles, values, galleryItems, flipCards } from '../data/fredData';

async function subscribeToNewsletter(email) {
  console.log('Newsletter signup (not yet sent anywhere):', email);
  return { ok: true };
}

export default function FredRabbi() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState('qual');
  const [newsletterState, setNewsletterState] = useState({ email: '', submitting: false, success: false });
  const statsRef = useRef(null);
  const [stats, setStats] = useState({ years: 0, lives: 0, started: false });

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !stats.started) {
        setStats((s) => ({ ...s, started: true }));
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const ease = 1 - Math.pow(1 - t, 3);
          setStats({
            years: Math.round(ease * 15),
            lives: Math.round(ease * 10000),
            started: true,
          });
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [stats.started]);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    const email = newsletterState.email.trim();
    if (!email) return;
    setNewsletterState((s) => ({ ...s, submitting: true }));
    await subscribeToNewsletter(email);
    setNewsletterState({ email: '', submitting: false, success: true });
  };

  return (
    <div className="page-fred page-dark">
      <section className="hero">
        <img className="hero-ambient" src="/assets/fred/fred.jpeg" alt="" />
        <div className="hero-copy">
          <div className="up eyebrow-dot" style={{ animationDelay: '.1s' }}><span className="dot"></span>Public Speaker · Performance Coach</div>
          <h1 className="up flex-fx hero-statement" style={{ animationDelay: '.25s' }}>I turn potential<br />into performance<br />that lasts.</h1>
          <div className="up hero-signature" style={{ animationDelay: '.5s' }}><span className="shimmer-text">Fred Rabbi</span></div>
          <div className="up hero-ctas" style={{ animationDelay: '.65s' }}>
            <Link to="/contact#book" className="btn-primary magnetic">Book A Discovery Call <span className="magnetic-icon">→</span></Link>
            <a href="#watch" className="btn-ghost">Watch Fred Speak</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num" ref={statsRef}>{stats.years}+</div>
            <div className="stat-label">Years in Human Capital Management</div>
          </div>
          <div className="stat">
            <div className="stat-num">{stats.lives.toLocaleString()}+</div>
            <div className="stat-label">Lives reached on stage</div>
          </div>
          <div className="stat">
            <div className="stat-num flex-fx">CBAM</div>
            <div className="stat-label">Founder, Certified Business Admin &amp; Managers Course</div>
          </div>
        </div>
      </section>

      <section className="bio">
        <div className="eyebrow">My Story</div>
        <h2 className="flex-fx">I didn't set out to be a speaker. I set out to fix broken teams.</h2>
        <p>I'm a seasoned HR professional with over 15 years in Human Capital Management, a practicing Senior HR Professional &amp; Performance Management expert, personality assessment coach, and the initiator of the Certified Business Admin &amp; Managers Course (CBAM).</p>
        <p>Along the way I found the stage was just an extension of the boardroom, the same work of getting people to actually show up, own their part, and move together. On stage or off it, I bring the same conviction: strategy without people is incomplete.</p>
      </section>

      <section className="quote-band">
        <img className="bg" src="/assets/C0016T01.jpg" alt="" />
        <blockquote className="reveal" data-reveal>"Commitment isn't demanded.<br />It's earned one honest room at a time."</blockquote>
      </section>

      <section className="gallery-section">
        <div className="section-head">
          <div className="eyebrow" style={{ textAlign: 'center' }}>On Stage &amp; In the Room</div>
          <h2 className="flex-fx">Speaking &amp; Training Moments</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((g) => (
            <div
              key={g.img}
              className={`gallery-tile${g.big ? ' big' : ''} reveal`}
              data-reveal
              style={{ animationDelay: g.delay || '0s' }}
            >
              <img src={g.img} alt={g.caption} />
              <span>{g.caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flip-section">
        <div className="flip-grid">
          {flipCards.map((c) => (
            <article className="flip-card" key={c.title}>
              <img className="fred-service-image" src={c.img} alt="" />
              <div className="fred-service-copy">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="books-section">
        <div className="section-head">
          <div className="eyebrow" style={{ textAlign: 'center' }}>Publications</div>
          <h2 className="flex-fx">Books &amp; Written Work</h2>
        </div>
        <div className="books-grid">
          {books.map((b) => (
            <a
              key={b.id}
              className="book-slot"
              href={b.amazonUrl}
              target="_blank"
              rel="noopener"
            >
              <div className="book-container">
                <div className="book">
                  <div className="back"></div>
                  <div className="left-side" style={{
                    backgroundImage: `url("${b.edge}")`,
                    backgroundSize: 'cover',
                  }}></div>
                  <div className="front">
                    <div className="cover" style={{
                      backgroundImage: `url("${b.cover}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                      <p className="cover-title flex-fx" style={{ display: 'none' }}>{b.title}</p>
                      <p className="cover-author" style={{ display: 'none' }}>{b.author}</p>
                    </div>
                  </div>
                </div>
              </div>
              <h3>{b.title}</h3>
              <p className="blurb">{b.blurb}</p>
              <span className="buy-link">Get it on Amazon Kindle →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="credentials">
        <div className="cred-inner">
          <div className="section-head">
            <div className="eyebrow" style={{ textAlign: 'center' }}>Credentials</div>
            <h2 className="flex-fx">Qualifications &amp; Roles</h2>
            <div className="tabs" style={{ marginTop: '24px' }}>
              <button
                className={`tab-btn${activeTab === 'qual' ? ' active' : ''}`}
                onClick={() => setActiveTab('qual')}
              >
                Qualifications
              </button>
              <button
                className={`tab-btn${activeTab === 'roles' ? ' active' : ''}`}
                onClick={() => setActiveTab('roles')}
              >
                Roles
              </button>
            </div>
          </div>
          <div className={`cred-list${activeTab === 'qual' ? ' active' : ''}`}>
            {qualifications.map((q) => <div className="cred-item" key={q}>{q}</div>)}
          </div>
          <div className={`cred-list${activeTab === 'roles' ? ' active' : ''}`}>
            {roles.map((r) => <div className="cred-item" key={r}>{r}</div>)}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-head">
          <div className="eyebrow" style={{ textAlign: 'center' }}>What I Stand For</div>
          <h2 className="flex-fx">Core Values</h2>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="video-section" id="watch">
        <div className="section-head">
          <div className="eyebrow" style={{ textAlign: 'center' }}>On Video</div>
          <h2 className="flex-fx">Watch Fred Rabbi Speak</h2>
        </div>
        <div className="video-thumb">
          <iframe
            src="https://www.youtube-nocookie.com/embed/S0Mqi-8LWR4"
            title="Fred Rabbi speaking"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-box">
          <div>
            <h2>Get my notes on leadership.</h2>
            <p>A short monthly note on coaching, performance, and building teams that show up.</p>
          </div>
          <div className="newsletter-success" style={{ display: newsletterState.success ? 'block' : 'none' }}>✓ Subscribed. Welcome aboard.</div>
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
              {newsletterState.submitting ? 'Submitting…' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2 className="flex-fx">Bring Fred Rabbi to Your Next Event</h2>
          <p>Keynotes, workshops, and executive coaching engagements tailored to your audience.</p>
          <Link to="/contact#book" className="cta-btn magnetic">Book Fred to Speak <span className="magnetic-icon">→</span></Link>
        </div>
      </section>
    </div>
  );
}
