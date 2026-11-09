import React, { useState } from 'react';
import { subscribeNewsletter, CONTACT_INFO } from '../services/portfolioService';

export default function Footer({ onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleBrandClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);

    try {
      await subscribeNewsletter(newsletterEmail);
      setSubscribed(true);
      setNewsletterEmail('');
    } catch (err) {
      setErrorMsg(err.message || 'Error subscribing. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="portfolio-footer-section" id="footer">
      <div className="footer-inner">
        {/* Newsletter & Direct Connect Bar */}
        <div style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 'clamp(28px, 4vw, 44px)',
          marginBottom: 'clamp(32px, 4.5vw, 56px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div>
            <span style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              color: 'var(--color-lime, #d4ff00)',
              textTransform: 'uppercase',
              marginBottom: '6px'
            }}>
              [ STAY UPDATED ]
            </span>
            <h4 style={{
              color: '#ffffff',
              fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: '700',
              margin: 0,
              textTransform: 'uppercase'
            }}>
              Subscribe for Project Releases &amp; Case Studies
            </h4>
          </div>

          <div style={{ maxWidth: '440px', width: '100%' }}>
            {subscribed ? (
              <div style={{
                color: 'var(--color-lime, #d4ff00)',
                fontWeight: '700',
                fontSize: '14px',
                padding: '12px 18px',
                background: 'rgba(212, 255, 0, 0.1)',
                borderRadius: '50px',
                textAlign: 'center'
              }}>
                ✓ Subscribed successfully! Direct updates on new builds.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ position: 'relative', width: '100%' }}>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  style={{
                    width: '100%',
                    padding: '14px 120px 14px 20px',
                    borderRadius: '50px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'var(--color-lime, #d4ff00)',
                    color: '#000000',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '8px 18px',
                    fontSize: '12px',
                    fontWeight: '800',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    cursor: submitting ? 'wait' : 'pointer',
                  }}
                >
                  {submitting ? '...' : 'JOIN ↗'}
                </button>
              </form>
            )}
            {errorMsg && (
              <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '6px', paddingLeft: '12px' }}>
                ⚠ {errorMsg}
              </div>
            )}
          </div>
        </div>

        {/* Quick Social & Navigation Strip */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: 'clamp(28px, 4vw, 48px)',
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }}
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              HOME
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('services'); }}
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              SERVICES
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('projects'); }}
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('contact'); }}
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              CONTACT
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <a
              href={CONTACT_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              LINKEDIN ↗
            </a>
            <a
              href={CONTACT_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              GITHUB ↗
            </a>
            <a
              href={CONTACT_INFO.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            >
              WHATSAPP ↗
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              style={{ color: 'var(--color-lime, #d4ff00)', textDecoration: 'none' }}
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        {/* Centered Massive Brand Typography matching exact screenshot */}
        <div className="footer-brand-container">
          <h2
            className="footer-giant-brand"
            onClick={handleBrandClick}
            style={{ cursor: 'pointer' }}
            title="Back to Home"
          >
            LAKHVINDE
            <span className="footer-brand-n-wrap">
              R
              <span className="footer-lime-circle" aria-hidden="true" />
            </span>
          </h2>
        </div>

        {/* Bottom Metadata Row: Copyright Left, Double Circles + Location Right */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="footer-copyright-text">
              &copy; 2026 Lakhvinder Singh • All Rights Reserved
            </span>
          </div>

          <div className="footer-bottom-right">
            {/* Exact SVG Shape extracted from Figma */}
            <span className="footer-double-circles" aria-hidden="true">
              <svg viewBox="0 0 40 22" width="38" height="21" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.0721 16.3405C22.0579 14.7262 22.6187 12.8463 22.6086 10.842C22.5984 8.8377 22.0184 6.9637 21.0163 5.35963C22.7502 3.12999 25.5205 1.6794 28.6489 1.66332C33.9316 1.63617 38.2348 5.70958 38.2605 10.7616C38.2862 15.8136 34.0247 19.931 28.7419 19.9581C25.6135 19.9742 22.8286 18.5522 21.0721 16.3405ZM19.9648 3.94735C17.8791 1.57354 14.7458 0.0715775 11.2494 0.0895485C5.00624 0.121637 -0.0302171 4.98771 0.000136483 10.9582C0.0304905 16.9288 5.11616 21.7428 11.3593 21.7107C14.8557 21.6927 17.9736 20.1587 20.035 17.7636C22.1207 20.1374 25.2541 21.6393 28.7504 21.6213C34.9936 21.5892 40.03 16.7232 39.9996 10.7526C39.9693 4.78211 34.8837 -0.0319305 28.6405 0.000159504C25.1442 0.0181295 22.0262 1.55222 19.9648 3.94735Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="footer-location-text">
              ZIRAKPUR, PUNJAB • AMBALA CANTT, HARYANA • CHANDIGARH, INDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
