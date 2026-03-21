import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';
import './Home.css';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setHeroLoaded(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.filter(p => p.badge);
  const bestSellers = products.filter(p => p.badge === 'Bestseller');

  return (
    <main className="home" id="home-page">
      {/* ============ HERO SECTION ============ */}
      <section className="hero" id="hero-section">
        <div className="hero__bg">
          <div className="hero__bg-pattern" />
          <div className="hero__bg-gradient" />
        </div>
        
        <div className="hero__container container">
          <div className={`hero__content ${heroLoaded ? 'loaded' : ''}`}>
            <div className="hero__ornament">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M0 10h15M25 10h15M20 0l-5 10 5 10 5-10-5-10z" stroke="#c9a96e" strokeWidth="0.5" fill="rgba(201,169,110,0.2)"/>
              </svg>
            </div>
            <span className="hero__subtitle">EST. 1952 — ROYAL HERITAGE COUTURE</span>
            <h1 className="hero__title">
              Where <em>Royalty</em> Meets<br />
              <span>Timeless</span> Tradition
            </h1>
            <p className="hero__description">
              Handcrafted kurta pajamas inspired by the grand palaces of Rajasthan & 
              heritage havelis of Gujarat. Each piece carries centuries of artisan legacy.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn btn-primary hero__cta">
                Explore Royal Collection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-outline hero__cta-secondary">
                Our Heritage Story
              </Link>
            </div>
            
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">70+</span>
                <span className="hero__stat-label">Years of Heritage</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-number">500+</span>
                <span className="hero__stat-label">Master Artisans</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-number">50K+</span>
                <span className="hero__stat-label">Royal Patrons</span>
              </div>
            </div>
          </div>

          <div className={`hero__visual ${heroLoaded ? 'loaded' : ''}`}>
            <div className="hero__image-frame">
              <div className="hero__image-ornament-tl" />
              <div className="hero__image-ornament-br" />
              <div className="hero__image-wrapper">
                <img src="/images/hero-kurta.png" alt="Royal Maharaja Silk Kurta" className="hero__image" />
                <div className="hero__image-shine" />
              </div>
            </div>
            <div className="hero__floating-badge">
              <span className="hero__floating-badge-label">Featured</span>
              <span className="hero__floating-badge-name">Maharaja Collection</span>
              <span className="hero__floating-badge-year">2026</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <span>Scroll to discover</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ============ ROYAL MARQUEE ============ */}
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee__track">
            {[...Array(3)].map((_, i) => (
              <div className="marquee__content" key={i}>
                <span>◆ Handcrafted Heritage</span>
                <span>◆ Royal Silk Fabrics</span>
                <span>◆ Zardozi Embroidery</span>
                <span>◆ Palace Inspired</span>
                <span>◆ Master Artisans</span>
                <span>◆ Banarasi Weaves</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="section categories-section" id="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Curated Collections</span>
            <h2 className="section-title">Royal <span>Categories</span></h2>
            <div className="section-divider" />
            <p className="section-description">
              From grand wedding celebrations to everyday elegance, discover collections 
              crafted for every royal occasion.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Link 
                to={`/shop?category=${cat.id}`} 
                className="category-card" 
                key={cat.id}
                style={{ animationDelay: `${index * 0.15}s` }}
                id={`category-${cat.id}`}
              >
                <div className="category-card__image">
                  <img src={cat.image} alt={cat.name} />
                  <div className="category-card__overlay" />
                </div>
                <div className="category-card__content">
                  <span className="category-card__count">{cat.count} Pieces</span>
                  <h3 className="category-card__name">{cat.name}</h3>
                  <p className="category-card__desc">{cat.description}</p>
                  <span className="category-card__explore">
                    Explore Collection
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="section featured-section" id="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Handpicked For You</span>
            <h2 className="section-title">Featured <span>Masterpieces</span></h2>
            <div className="section-divider" />
          </div>

          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/shop" className="btn btn-outline">
              View All Collections
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ HERITAGE BANNER ============ */}
      <section className="heritage-banner" id="heritage-banner">
        <div className="heritage-banner__bg" />
        <div className="heritage-banner__content container">
          <div className="heritage-banner__ornament">
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path d="M0 15h20M40 15h20M30 0l-10 15 10 15 10-15-10-15z" stroke="#c9a96e" strokeWidth="0.5" fill="rgba(201,169,110,0.15)"/>
            </svg>
          </div>
          <span className="section-subtitle">The Art of Heritage</span>
          <h2 className="heritage-banner__title">
            Every Thread Tells a Story of <em>Royal Legacy</em>
          </h2>
          <p className="heritage-banner__desc">
            From the looms of Varanasi to the ateliers of Jaipur, each Rajvadu creation 
            passes through the hands of 12 master artisans, taking over 200 hours to perfect.
          </p>
          <Link to="/about" className="btn btn-primary">
            Discover Our Craft
          </Link>
        </div>
      </section>

      {/* ============ BESTSELLERS ============ */}
      <section className="section bestsellers-section" id="bestsellers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Most Loved</span>
            <h2 className="section-title">Royal <span>Bestsellers</span></h2>
            <div className="section-divider" />
          </div>

          <div className="bestsellers-grid">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CRAFTSMANSHIP ============ */}
      <section className="section craftsmanship-section" id="craftsmanship-section">
        <div className="container">
          <div className="craftsmanship-grid">
            <div className="craftsmanship-content">
              <span className="section-subtitle">Our Promise</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Crafted with <span>Royal</span> Precision
              </h2>
              <div className="section-divider" style={{ margin: '1.5rem 0' }} />
              <p className="craftsmanship-text">
                Each Rajvadu piece undergoes a 47-step quality process, from selecting the 
                finest silks to the final gold thread. Our artisans, many from families with 
                7 generations of craft heritage, ensure every stitch meets royal standards.
              </p>
              
              <div className="craftsmanship-features">
                <div className="craftsmanship-feature">
                  <div className="craftsmanship-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Authentic Fabrics</h4>
                    <p>Sourced directly from India's finest weaving clusters</p>
                  </div>
                </div>
                <div className="craftsmanship-feature">
                  <div className="craftsmanship-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Hand Embroidery</h4>
                    <p>200+ hours of meticulous artisan craftsmanship</p>
                  </div>
                </div>
                <div className="craftsmanship-feature">
                  <div className="craftsmanship-feature__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Heritage Design</h4>
                    <p>Patterns inspired by royal palaces & ancient manuscripts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="craftsmanship-visual">
              <div className="craftsmanship-image-stack">
                <div className="craftsmanship-image craftsmanship-image--back">
                  <img src="/images/product-navy.png" alt="Artisan craftsmanship" />
                </div>
                <div className="craftsmanship-image craftsmanship-image--front">
                  <img src="/images/product-maroon.png" alt="Royal embroidery detail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section testimonials-section" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Royal Patrons Speak</span>
            <h2 className="section-title">Words of <span>Distinction</span></h2>
            <div className="section-divider" />
          </div>

          <div className="testimonials-wrapper">
            <div className="testimonial-card">
              <div className="testimonial-card__quote">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="rgba(201,169,110,0.15)" stroke="#c9a96e" strokeWidth="0.5"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5.25v1.75c0 .368.426 1 1 1z" fill="rgba(201,169,110,0.15)" stroke="#c9a96e" strokeWidth="0.5"/>
                </svg>
              </div>
              <p className="testimonial-card__text">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <h4 className="testimonial-card__name">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="testimonial-card__location">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              <p className="testimonial-card__product">
                Purchased: {testimonials[currentTestimonial].product}
              </p>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER CTA ============ */}
      <section className="newsletter-section" id="newsletter-section">
        <div className="newsletter-section__bg" />
        <div className="container newsletter-section__content">
          <div className="newsletter-section__ornament">◆ ◇ ◆</div>
          <h2 className="newsletter-section__title">
            Join the <em>Royal Court</em>
          </h2>
          <p className="newsletter-section__description">
            Be the first to discover new collections, receive exclusive artisan stories, 
            and enjoy royal privileges including early access and special offers.
          </p>
          <form className="newsletter-section__form" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your royal email" 
              className="newsletter-section__input"
              id="newsletter-email"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
          <p className="newsletter-section__note">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  );
}
