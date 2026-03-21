import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container container">
        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar__hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <Link to="/" className="navbar__logo" id="nav-logo">
          <div className="navbar__logo-ornament">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L20 8L28 8L22 14L24 22L16 18L8 22L10 14L4 8L12 8L16 2Z" 
                    fill="url(#goldGrad)" stroke="currentColor" strokeWidth="0.5"/>
              <defs>
                <linearGradient id="goldGrad" x1="4" y1="2" x2="28" y2="22">
                  <stop stopColor="#e2c992"/>
                  <stop offset="1" stopColor="#a07d4a"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-brand">RAJVADU</span>
            <span className="navbar__logo-tagline">Royal Heritage</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/shop" className={`navbar__link ${location.pathname === '/shop' ? 'active' : ''}`}>Shop</Link>
          <Link to="/collections" className={`navbar__link ${location.pathname === '/collections' ? 'active' : ''}`}>Collections</Link>
          <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'active' : ''}`}>Our Heritage</Link>
          <Link to="/contact" className={`navbar__link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <Link to="/shop" className="navbar__action-btn" aria-label="Search" id="nav-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </Link>
          
          <Link to="/wishlist" className="navbar__action-btn" aria-label="Wishlist" id="nav-wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>
          
          <button 
            className="navbar__action-btn navbar__cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            id="nav-cart-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
