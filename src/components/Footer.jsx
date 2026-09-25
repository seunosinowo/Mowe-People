import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <img src="/assets/mowe-lockup-light.png" alt="MOWE Global" />
          <p>Transforming organizations through workforce intelligence, leadership development, and performance systems that deliver sustainable results.</p>
        </div>
        <div>
          <div className="footer-heading">Quick Links</div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/fred-rabbi">Fred Rabbi</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="footer-heading">Contact</div>
          <div className="footer-links">
            <a href="mailto:support@moweglobal.com">support@moweglobal.com</a>
            <a href="tel:+2348032613268">+234 803 261 3268</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 MOWE Global — Ministry of Workforce Engagement. People First. Strategy Always.</div>
    </footer>
  );
}
