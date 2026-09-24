import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { allPrograms, categoryList } from '../data/servicesData';

export default function Services() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? allPrograms : allPrograms.filter((p) => p.category === activeCategory);

  return (
    <div className="page-services">
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow up" style={{ animationDelay: '.05s' }}>Our Offerings</div>
          <h1 className="flex-fx up" style={{ animationDelay: '.15s' }}>Services &amp; Programmes</h1>
          <p className="up" style={{ animationDelay: '.28s' }}>Comprehensive workforce engagement solutions spanning leadership development, organizational diagnostics, performance systems, and capability building.</p>
          <Link to="/contact#book" className="services-hero-cta up" style={{ animationDelay: '.38s' }}>Enquire About a Programme</Link>
        </div>
      </section>

      <section className="filters-section">
        <div className="filters">
          {categoryList.map((c) => (
            <button
              key={c}
              className={`chip${c === activeCategory ? ' active' : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="grid-section">
        <div className="grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="card up"
              style={{ animationDelay: `${Math.min(i * 60, 360)}ms` }}
            >
              <div className="card-thumb" style={{ background: `url("${p.img}") center/cover` }}></div>
              <div className="card-top">
                <div className="category-badge">{p.category}</div>
                <div className="card-num flex-fx">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <h3 className="flex-fx">{p.title}</h3>
              <div className="card-subtitle">{p.subtitle}</div>
              <p className="card-desc">{p.description}</p>
              <div className="divider"></div>
              <div className="impact-heading">Key Impact</div>
              <ul className="impact-list">{p.impact.map((im) => <li key={im}>{im}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box reveal" data-reveal>
          <h2 className="flex-fx">Not sure which programme fits?</h2>
          <p>Talk to us — we'll help you diagnose the right entry point for your organization.</p>
          <Link to="/contact" className="cta-btn magnetic">Get in Touch <span className="magnetic-icon">→</span></Link>
        </div>
      </section>
    </div>
  );
}
