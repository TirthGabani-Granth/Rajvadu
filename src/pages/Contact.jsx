import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Rajvadu! We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="contact-page" id="contact-page">
      <section className="contact-header">
        <div className="contact-header__bg" />
        <div className="container contact-header__content">
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="contact-header__title">Contact Our <em>Atelier</em></h1>
          <p className="contact-header__desc">
            Whether you need custom tailoring, have questions about our collections, or wish 
            to visit our atelier — we're here to serve.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="contact-info__title">Visit & Reach Us</h2>
            <div className="section-divider" style={{ margin: '1rem 0 2rem' }} />

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Royal Atelier</h4>
                  <p>42, Johari Bazaar,<br/>Near Hawa Mahal,<br/>Jaipur, Rajasthan — 302003</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 141 456 7890<br/>+91 98290 12345</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>heritage@rajvadu.com<br/>orders@rajvadu.com</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>Visiting Hours</h4>
                  <p>Mon — Sat: 10:00 AM — 8:00 PM<br/>Sunday: 11:00 AM — 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2 className="contact-form__title">Send a Message</h2>
            <div className="section-divider" style={{ margin: '1rem 0 2rem' }} />
            
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                    id="contact-name"
                  />
                </div>
                <div className="contact-form__group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    required
                    id="contact-email"
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 XXXXX XXXXX"
                    id="contact-phone"
                  />
                </div>
                <div className="contact-form__group">
                  <label>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    required
                    id="contact-subject"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Tailoring</option>
                    <option value="order">Order Query</option>
                    <option value="wholesale">Wholesale / Bulk</option>
                    <option value="visit">Atelier Visit</option>
                  </select>
                </div>
              </div>

              <div className="contact-form__group">
                <label>Message</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  id="contact-message"
                />
              </div>

              <button type="submit" className="btn btn-primary contact-form__submit">
                Send Royal Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
