import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { key: 'home', to: '/', label: 'Home' },
  { key: 'fredrabbi', to: '/fred-rabbi', label: 'Fred Rabbi' },
  { key: 'contact', to: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const getActiveKey = () => {
    const path = location.pathname;
    if (path === '/' || path === '') return 'home';
    if (path === '/services') return 'services';
    if (path === '/fred-rabbi') return 'fredrabbi';
    if (path === '/contact') return 'contact';
    return '';
  };

  const active = getActiveKey();

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header>
        <div className="nav-wrap">
          <Link to="/" className="nav-logo">
            <img src="/assets/mowe-lockup-light.png" alt="MOWE Global" />
          </Link>
          <nav className="links">
            <Link
              to="/"
              className={`nav-link${active === 'home' ? ' active' : ''}`}
            >
              Home
            </Link>
            <div
              className={`nav-services${servicesOpen ? ' open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className={`trigger${active === 'services' ? ' active' : ''}`}>
                Services
                <span className="chevron">▾</span>
              </span>
              <div className="mowe-dropdown">
                <div className="dd-panel">
                  <div className="dd-icon"><span></span></div>
                  <div className="dd-title">Business As Game</div>
                  <p className="dd-copy">Experiential team training built on the dynamics of football.</p>
                </div>
                <div className="dd-panel">
                  <div className="dd-heading">Categories</div>
                  <div className="dd-list">
                    <Link to="/services">Leadership Development</Link>
                    <Link to="/services">Workforce Diagnostics</Link>
                    <Link to="/services">Performance Systems</Link>
                    <Link to="/services">Capability Building</Link>
                  </div>
                </div>
                <div className="dd-panel">
                  <div className="dd-heading">Quick Links</div>
                  <div className="dd-list">
                    <Link to="/fred-rabbi">Meet Fred Rabbi</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/services">All Programmes</Link>
                  </div>
                </div>
                <div>
                  <div className="dd-heading">Featured</div>
                  <div className="dd-feature">
                    <div className="badge">New Certification</div>
                    <div className="title">R-CAP Executive</div>
                    <p>Build durable reputational capital at the executive level.</p>
                    <Link to="/services">Learn more →</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/fred-rabbi"
              className={`nav-link${active === 'fredrabbi' ? ' active' : ''}`}
            >
              Fred Rabbi
            </Link>
            <Link
              to="/contact"
              className={`nav-link${active === 'contact' ? ' active' : ''}`}
            >
              Contact
            </Link>
          </nav>
          <Link to="/contact#book" className="book-btn">Book a Consult</Link>
          <button
            className={`nav-burger${mobileOpen ? ' open' : ''}`}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <nav className="mobile-menu-links">
          <Link
            to="/"
            className={`mobile-link${active === 'home' ? ' active' : ''}`}
            style={{ transitionDelay: '60ms' }}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`mobile-link${active === 'services' ? ' active' : ''}`}
            style={{ transitionDelay: '110ms' }}
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/fred-rabbi"
            className={`mobile-link${active === 'fredrabbi' ? ' active' : ''}`}
            style={{ transitionDelay: '160ms' }}
            onClick={() => setMobileOpen(false)}
          >
            Fred Rabbi
          </Link>
          <Link
            to="/contact"
            className={`mobile-link${active === 'contact' ? ' active' : ''}`}
            style={{ transitionDelay: '210ms' }}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <Link
          to="/contact#book"
          className="book-btn mobile-menu-cta"
          style={{ transitionDelay: '260ms' }}
          onClick={() => setMobileOpen(false)}
        >
          Book a Consult
        </Link>
      </div>
    </>
  );
}
