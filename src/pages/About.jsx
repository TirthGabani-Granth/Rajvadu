import './About.css';

export default function About() {
  const milestones = [
    { year: '1952', title: 'The Royal Beginning', desc: 'Master weaver Shri Devraj Rajvadu establishes his first atelier in Jaipur, crafting kurtas for the royal family of Mewar.' },
    { year: '1978', title: 'Artisan Heritage', desc: 'Second generation takes the helm, expanding to include 50+ master artisans trained in traditional zari and zardozi work.' },
    { year: '1999', title: 'National Recognition', desc: 'Rajvadu receives the National Award for Excellence in Handloom, recognized for preserving endangered embroidery techniques.' },
    { year: '2015', title: 'Digital Durbar', desc: 'Launching our online presence, bringing royal heritage wear to discerning gentlemen across India and beyond.' },
    { year: '2026', title: 'Global Heritage', desc: 'With artisans across 3 states and patrons in 15 countries, Rajvadu continues the legacy of royal Indian craftsmanship.' },
  ];

  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Heritage Preservation',
      desc: 'We actively preserve dying art forms — from Chikankari to Zardozi — by training new generations of artisans.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Artisan Welfare',
      desc: 'Fair wages, healthcare, and education support for our 500+ artisan families across Rajasthan, Gujarat, and UP.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Uncompromising Quality',
      desc: 'Every piece undergoes 47 quality checkpoints. We use only the finest fabrics — pure silks, organic cotton, and premium velvets.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      title: 'Sustainable Craft',
      desc: 'From natural dyes to eco-friendly packaging, we ensure our imperial craft leaves a gentle footprint on the earth.'
    }
  ];

  return (
    <main className="about-page" id="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="about-header__bg" />
        <div className="container about-header__content">
          <span className="section-subtitle">Since 1952</span>
          <h1 className="about-header__title">Our Royal <em>Heritage</em></h1>
          <p className="about-header__desc">
            Three generations of master artisans crafting the finest Indian heritage 
            wear — from the royal courts of Rajasthan to your wardrobe.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__images">
              <div className="about-story__image about-story__image--main">
                <img src="/images/product-maroon.png" alt="Heritage craftsmanship" />
              </div>
              <div className="about-story__image about-story__image--secondary">
                <img src="/images/product-green.png" alt="Royal embroidery" />
              </div>
            </div>
            <div className="about-story__content">
              <span className="section-subtitle">The Rajvadu Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Born in the <span>Heart</span> of Royal India
              </h2>
              <div className="section-divider" style={{ margin: '1.5rem 0' }} />
              <p>
                In 1952, master weaver Shri Devraj Rajvadu opened a small atelier in the 
                shadow of Jaipur's Hawa Mahal. His vision was simple yet profound — to 
                preserve the dying art of royal Indian textiles by creating pieces worthy 
                of kings for the modern gentleman.
              </p>
              <p>
                Today, three generations later, Rajvadu has grown from a single workshop 
                to a heritage brand with over 500 master artisans. Yet, the founding 
                principle remains unchanged: every thread must tell a story of royalty.
              </p>
              <p>
                From the intricate zari work of Varanasi to the delicate chikankari of 
                Lucknow, each Rajvadu creation passes through the hands of some of India's 
                most skilled craftspeople, taking an average of 200 hours to complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Milestones of <span>Legacy</span></h2>
            <div className="section-divider" />
          </div>

          <div className="about-timeline">
            {milestones.map((m, index) => (
              <div className="about-timeline__item" key={m.year}>
                <div className="about-timeline__year">{m.year}</div>
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Stand For</span>
            <h2 className="section-title">Royal <span>Values</span></h2>
            <div className="section-divider" />
          </div>

          <div className="about-values-grid">
            {values.map((v, i) => (
              <div className="about-value-card" key={i}>
                <div className="about-value-card__icon">{v.icon}</div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="about-numbers">
        <div className="about-numbers__bg" />
        <div className="container about-numbers__content">
          <div className="about-number">
            <span className="about-number__value">70+</span>
            <span className="about-number__label">Years of Heritage</span>
          </div>
          <div className="about-number">
            <span className="about-number__value">500+</span>
            <span className="about-number__label">Master Artisans</span>
          </div>
          <div className="about-number">
            <span className="about-number__value">50K+</span>
            <span className="about-number__label">Royal Patrons</span>
          </div>
          <div className="about-number">
            <span className="about-number__value">15</span>
            <span className="about-number__label">Countries Served</span>
          </div>
        </div>
      </section>
    </main>
  );
}
