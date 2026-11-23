import React from 'react';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';

const ROW_ONE_CARDS = [
  {
    date: '[ CLEAN CODE ]',
    iconType: 'spiral',
    text: 'PRIORITIZING CLEAN SEMANTIC HTML, MODULAR STYLING, AND ORGANIZED TEMPLATE STRUCTURES SO WEBSITES REMAIN FAST, EASY TO SCALE, AND PAINLESS TO MAINTAIN.',
    avatar: avatar1,
    author: 'FRONTEND ARCHITECTURE',
    role: 'SEMANTIC & MAINTAINABLE CODE',
  },
  {
    date: '[ RESPONSIVE DESIGN ]',
    iconType: 'logoipsum',
    text: 'RIGOROUSLY TESTING ACROSS SMARTPHONES, TABLETS, LAPTOPS, AND DESKTOPS TO ENSURE PHARMA CATALOGUES AND BUSINESS LAYOUTS LOOK PIXEL-PERFECT ON EVERY SCREEN.',
    avatar: avatar2,
    author: 'MOBILE-FIRST LAYOUTS',
    role: 'CROSS-DEVICE COMPATIBILITY',
  },
  {
    date: '[ WORDPRESS CMS ]',
    iconType: 'infinity',
    text: 'MODIFYING PHP TEMPLATES, CONFIGURED WOOCOMMERCE CATALOGUES, AND ADVANCED CUSTOM FIELDS TO EMPOWER CLIENTS TO EASILY UPDATE CONTENT AND INQUIRIES.',
    avatar: avatar3,
    author: 'WORDPRESS CUSTOMIZATION',
    role: 'TAILORED CLIENT PORTALS',
  },
  {
    date: '[ UI IMPLEMENTATION ]',
    iconType: 'dots',
    text: 'TRANSLATING FIGMA WIREFRAMES AND CLIENT-APPROVED MOCKUPS INTO LIVING WEBPAGES WITH ACCURATE SPACING, TYPOGRAPHY SCALES, AND INTERACTIVE HOVER STATES.',
    avatar: avatar4,
    author: 'FIGMA TO CODE',
    role: 'PRECISION UI EXECUTION',
  },
];

const ROW_TWO_CARDS = [
  {
    date: '[ RELIABLE DELIVERY ]',
    iconType: 'dots',
    text: 'COMMUNICATING CLEARLY AT EACH DEVELOPMENT MILESTONE, LISTENING TO CLIENT FEEDBACK, AND DELIVERING WORKING REVISIONS ACCORDING TO AGREED TIMELINES.',
    avatar: avatar5,
    author: 'PROJECT MANAGEMENT',
    role: 'ON-TIME CLIENT HANDOFF',
  },
  {
    date: '[ PERFORMANCE & SPEED ]',
    iconType: 'logoipsum',
    text: 'OPTIMIZING ASSETS, STREAMLINING CSS STYLESHEETS, ELIMINATING LAYOUT SHIFTS, AND WRITING LIGHTWEIGHT CODE TO KEEP PAGE LOAD TIMES FAST AND SMOOTH.',
    avatar: avatar2,
    author: 'SPEED & OPTIMIZATION',
    role: 'CORE WEB VITALS FOCUS',
  },
  {
    date: '[ BUG FIXES & AUDITS ]',
    iconType: 'infinity',
    text: 'DIAGNOSING RESPONSIVENESS GLITCHES, BROKEN NAVIGATION, STYLING BUGS, AND FORM INCONSISTENCIES IN EXISTING WEBSITES AND DEPLOYING STABLE RESOLUTIONS.',
    avatar: avatar4,
    author: 'WEBSITE REFINEMENTS',
    role: 'LAYOUT & CSS DEBUGGING',
  },
  {
    date: '[ FUNCTIONAL FORMS ]',
    iconType: 'spiral',
    text: 'IMPLEMENTING VALIDATED INQUIRY FORMS, PRODUCT ENQUIRIES, AND CONTACT WORKFLOWS THAT CONNECT POTENTIAL CLIENTS DIRECTLY WITH BUSINESS OWNERS.',
    avatar: avatar1,
    author: 'LEAD GENERATION',
    role: 'INQUIRY & CATALOGUE FORMS',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="portfolio-testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        {/* Header */}
        <div className="testimonials-header-wrap">
          <span className="testimonials-eyebrow">QUALITY STANDARDS</span>
          <h2 className="testimonials-main-heading">WHAT I FOCUS ON</h2>
          <span className="testimonials-pill-tag">
            [ CORE PRINCIPLES AND STANDARDS APPLIED TO EVERY CLIENT PROJECT ]
          </span>
        </div>

        {/* Marquee Row 1 (Right to Left) */}
        <div className="testimonials-marquee-wrap">
          <div className="testimonials-marquee-track track-left">
            {[...ROW_ONE_CARDS, ...ROW_ONE_CARDS].map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-card-top">
                  <span className="testimonial-date-tag">{item.date}</span>
                  <div className="testimonial-logo-icon">
                    {item.iconType === 'spiral' && (
                      <svg viewBox="0 0 36 36" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="6" width="28" height="24" rx="10" />
                        <rect x="10" y="11" width="16" height="14" rx="6" />
                      </svg>
                    )}
                    {item.iconType === 'logoipsum' && (
                      <div className="logoipsum-mini">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="text">logoipsum</span>
                      </div>
                    )}
                    {item.iconType === 'infinity' && (
                      <svg viewBox="0 0 36 20" width="32" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 10c-3-5-7-5-9 0s6 5 9 0zm12 0c3-5 7-5 9 0s-6 5-9 0z" />
                      </svg>
                    )}
                    {item.iconType === 'dots' && (
                      <svg viewBox="0 0 32 20" width="28" height="18" fill="currentColor">
                        <circle cx="6" cy="10" r="4" />
                        <circle cx="16" cy="10" r="4" />
                        <circle cx="26" cy="10" r="4" />
                      </svg>
                    )}
                  </div>
                </div>

                <p className="testimonial-quote-text">{item.text}</p>

                <div className="testimonial-author-row">
                  <div className="testimonial-avatar-wrap">
                    <img src={item.avatar} alt={item.author} className="testimonial-avatar-img" />
                  </div>
                  <div className="testimonial-author-meta">
                    <h4 className="testimonial-author-name">{item.author}</h4>
                    <p className="testimonial-author-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Left to Right / Offset) */}
        <div className="testimonials-marquee-wrap">
          <div className="testimonials-marquee-track track-right">
            {[...ROW_TWO_CARDS, ...ROW_TWO_CARDS].map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-card-top">
                  <span className="testimonial-date-tag">{item.date}</span>
                  <div className="testimonial-logo-icon">
                    {item.iconType === 'dots' && (
                      <div className="logoipsum-mini">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="text">logoipsum</span>
                      </div>
                    )}
                    {item.iconType === 'logoipsum' && (
                      <div className="logoipsum-mini">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="text">logoipsum</span>
                      </div>
                    )}
                    {item.iconType === 'infinity' && (
                      <svg viewBox="0 0 36 20" width="32" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 10c-3-5-7-5-9 0s6 5 9 0zm12 0c3-5 7-5 9 0s-6 5-9 0z" />
                      </svg>
                    )}
                    {item.iconType === 'spiral' && (
                      <svg viewBox="0 0 36 36" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="6" width="28" height="24" rx="10" />
                        <rect x="10" y="11" width="16" height="14" rx="6" />
                      </svg>
                    )}
                  </div>
                </div>

                <p className="testimonial-quote-text">{item.text}</p>

                <div className="testimonial-author-row">
                  <div className="testimonial-avatar-wrap">
                    <img src={item.avatar} alt={item.author} className="testimonial-avatar-img" />
                  </div>
                  <div className="testimonial-author-meta">
                    <h4 className="testimonial-author-name">{item.author}</h4>
                    <p className="testimonial-author-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
