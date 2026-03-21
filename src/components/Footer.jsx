import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      {/* Ornamental top border */}
      <div className="footer__ornament-border">
        <div className="footer__ornament-line" />
        <div className="footer__ornament-diamond">◆</div>
        <div className="footer__ornament-line" />
      </div>

      <div className="footer__content container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-name">RAJVADU</span>
              <span className="footer__logo-sub">Royal Heritage</span>
            </div>
            <p className="footer__brand-desc">
              Crafting royal heritage wear since 1952. Each piece tells a story of 
              Indian craftsmanship, palace art, and timeless tradition.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49-.09-.85-.18-2.15.04-3.08.2-.84 1.28-5.42 1.28-5.42s-.33-.65-.33-1.62c0-1.52.88-2.65 1.97-2.65.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.55 1.98 1.62 1.98 1.95 0 3.44-2.05 3.44-5.02 0-2.62-1.89-4.46-4.58-4.46-3.12 0-4.95 2.34-4.95 4.76 0 .94.36 1.95.82 2.5.09.11.1.21.08.32-.08.36-.28 1.12-.32 1.28-.05.21-.17.25-.39.15-1.46-.68-2.37-2.81-2.37-4.52 0-3.67 2.67-7.04 7.7-7.04 4.04 0 7.18 2.88 7.18 6.73 0 4.01-2.53 7.25-6.04 7.25-1.18 0-2.29-.61-2.67-1.34l-.73 2.77c-.26 1.01-.97 2.28-1.45 3.05C9.58 21.84 10.77 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-group">
            <h4 className="footer__links-title">Collections</h4>
            <ul className="footer__links">
              <li><Link to="/shop?category=wedding">Wedding Collection</Link></li>
              <li><Link to="/shop?category=festive">Festive Wear</Link></li>
              <li><Link to="/shop?category=casual">Everyday Royalty</Link></li>
              <li><Link to="/shop?category=sherwani">Royal Sherwanis</Link></li>
              <li><Link to="/shop">New Arrivals</Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Heritage</h4>
            <ul className="footer__links">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/about">Artisan Craftsmanship</Link></li>
              <li><Link to="/about">Royal Fabric Guide</Link></li>
              <li><Link to="/about">Style Journal</Link></li>
              <li><Link to="/contact">Visit Our Atelier</Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Royal Service</h4>
            <ul className="footer__links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Custom Tailoring</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <div className="footer__newsletter-content">
            <h4 className="footer__newsletter-title">Join the Royal Court</h4>
            <p className="footer__newsletter-desc">
              Subscribe for exclusive collections, artisan stories & royal privileges
            </p>
          </div>
          <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="footer__newsletter-input"
              id="footer-email-input"
            />
            <button type="submit" className="btn btn-primary footer__newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <p className="footer__copyright">
            © 2026 Rajvadu. All rights reserved. Crafted with heritage & pride.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
