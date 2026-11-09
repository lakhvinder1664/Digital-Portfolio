import React from 'react';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';

const ROW_ONE_CARDS = [
  {
    date: '[ MARCH 2024 ]',
    iconType: 'spiral',
    text: 'I WAS STRUCK BY HOW SEAMLESSLY EVERYTHING FLOWED AND HOW EASY IT WAS TO NAVIGATE. THEIR TEAM METICULOUSLY PERFECTS EVERY DETAIL A TRULY ENGAGING AND ENJOYABLE EXPERIENCE.',
    avatar: avatar1,
    author: 'JESSE ORIKO',
    role: 'PRODUCT MANAGER / NOISE & CO',
  },
  {
    date: '[ APRIL 2024 ]',
    iconType: 'logoipsum',
    text: 'I WAS IMPRESSED BY THE EFFORTLESS USABILITY AND THE SMOOTH INTERACTIONS THROUGHOUT. THE DEDICATION OF THEIR DESIGNERS TO REFINING EVERY ELEMENT IS APPARENT,',
    avatar: avatar2,
    author: 'OLEKSANDRA ZUBRYTSKA',
    role: 'TECHNICAL PRODUCT MANAGRR / LOGIPSUM',
  },
  {
    date: '[ MAY 2024 ]',
    iconType: 'infinity',
    text: "THE USER EXPERIENCE WAS INCREDIBLY SMOOTH AND INTUITIVE. IT'S EVIDENT THAT THEIR DESIGNERS PAY METICULOUS ATTENTION TO EVERY DETAIL CRAFTING AN EXPERIENCE THAT TRULY IMPRESSES.",
    avatar: avatar3,
    author: "RICK O'CONNEL",
    role: 'DESIGN MANAGER / MARKET COMPLIANCE',
  },
  {
    date: '[ JUNE 2024 ]',
    iconType: 'dots',
    text: 'EXCEPTIONAL EXECUTION, PIXEL-PERFECT VISUAL STANDARDS, AND STRATEGIC BRILLIANCE THROUGHOUT THE ENTIRE CREATIVE DIRECTION PROCESS.',
    avatar: avatar4,
    author: 'MICHAEL CHANG',
    role: 'CREATIVE LEAD / STUDIO VERTEX',
  },
];

const ROW_TWO_CARDS = [
  {
    date: '[ APRIL 2024 ]',
    iconType: 'dots',
    text: 'I WAS STRUCK BY HOW SEAMLESSLY EVERYTHING FLOWED AND HOW EASY IT WAS TO NAVIGATE. THEIR TEAM METICULOUSLY PERFECTS EVERY DETAIL A TRULY ENJOYABLE EXPERIENCE.',
    avatar: avatar5,
    author: 'JESSE ORIKO',
    role: 'PRODUCT MANAGER / NOISE & CO',
  },
  {
    date: '[ MAY 2024 ]',
    iconType: 'logoipsum',
    text: 'I WAS IMPRESSED BY THE EFFORTLESS USABILITY AND THE SMOOTH INTERACTIONS THROUGHOUT. THE DEDICATION OF THEIR DESIGNERS TO REFINING EVERY ELEMENT IS APPARENT,',
    avatar: avatar2,
    author: 'OLEKSANDRA ZUBRYTSKA',
    role: 'TECHNICAL PRODUCT MANAGRR / LOGIPSUM',
  },
  {
    date: '[ JULY 2024 ]',
    iconType: 'infinity',
    text: "THE USER EXPERIENCE WAS INCREDIBLY SMOOTH AND INTUITIVE. IT'S EVIDENT THAT THEIR DESIGNERS PAY METICULOUS ATTENTION TO EVERY DETAIL CRAFTING AN EXPERIENCE THAT TRULY IMPRESSES.",
    avatar: avatar4,
    author: "RICK O'CONNEL",
    role: 'DESIGN MANAGER / MARKET COMPLIANCE',
  },
  {
    date: '[ AUGUST 2024 ]',
    iconType: 'spiral',
    text: 'DELIVERED CUTTING EDGE BRAND CONSULTANCY AND UI WORKFLOWS THAT ELEVATED OUR REVENUE METRICS RAPIDLY POST-LAUNCH.',
    avatar: avatar1,
    author: 'EMILY THURMAN',
    role: 'VP PRODUCT / APEX MEDIA',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="portfolio-testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        {/* Header */}
        <div className="testimonials-header-wrap">
          <span className="testimonials-eyebrow">TESTIMONIALS</span>
          <h2 className="testimonials-main-heading">WHAT MY CLIENT SAY</h2>
          <span className="testimonials-pill-tag">
            [ SEE WHAT OUR CLIENTS HAVE TO SAY ABOUT THEIR WORKING EXPERIENCE ]
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
