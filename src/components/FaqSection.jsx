import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    question: 'WHAT TYPES OF WEBSITES DO YOU PRIMARILY BUILD?',
    answer:
      'I specialize in building responsive pharmaceutical, healthcare, and business websites, including WordPress product catalogues, landing pages, and client portals.',
  },
  {
    id: 2,
    question: 'WHAT TECHNOLOGIES DO YOU USE FOR DEVELOPMENT?',
    answer:
      'My core stack includes HTML5, CSS3, JavaScript, Bootstrap 5, PHP, WordPress, WooCommerce, and ACF, with Figma for UI design and Git for version control.',
  },
  {
    id: 3,
    question: 'HOW DO YOU ENSURE WEBSITES ARE FULLY RESPONSIVE?',
    answer:
      'I use a mobile-first approach with Bootstrap 5 and modern CSS media queries, testing layouts thoroughly across smartphones, tablets, laptops, and desktops.',
  },
  {
    id: 4,
    question: 'CAN YOU CUSTOMIZE EXISTING WORDPRESS THEMES AND PLUGINS?',
    answer:
      'Yes, I modify existing WordPress themes, edit PHP templates, style WooCommerce catalogues, configure custom post types, and resolve plugin conflicts.',
  },
  {
    id: 5,
    question: 'HOW DO YOU CONVERT FIGMA DESIGNS INTO LIVE WEBPAGES?',
    answer:
      'I translate Figma wireframes into clean, semantic HTML and Bootstrap code, matching typography, colors, spacing, and responsive behavior with pixel-accuracy.',
  },
  {
    id: 6,
    question: 'DO YOU HANDLE WEBSITE REDESIGNS AND BUG FIXES?',
    answer:
      'Yes, I fix visual glitches, resolve mobile responsiveness bugs, optimize layouts, and redesign outdated sections to deliver a clean, modern user experience.',
  },
  {
    id: 7,
    question: 'WHAT IS YOUR TYPICAL PROCESS FOR A CLIENT PROJECT?',
    answer:
      'I start by understanding requirements and reference designs, plan the visual layout, develop with clean modular code, and test responsiveness before delivery.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="portfolio-faq-section" id="faq">
      <div className="faq-inner">
        {/* Header Row */}
        <div className="faq-header-row">
          <div className="faq-title-wrap">
            <h2 className="faq-main-heading">
              <span>FREQUENTLY</span>
              <span>ASKED QUESTIONS</span>
            </h2>
            <p className="faq-subtitle">
              ANSWERS TO COMMON QUERIES WE OFTEN RECEIVE
            </p>
          </div>

          <div className="faq-badge-wrap">
            <span className="faq-dot" />
            <span className="faq-know-more-btn">GET TO KNOW MORE</span>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <div
                  className="faq-question-row"
                  onClick={() => toggleItem(idx)}
                >
                  <h3 className="faq-question-text">{item.question}</h3>
                  <span className="faq-toggle-icon">{isOpen ? '—' : '+'}</span>
                </div>

                {isOpen && (
                  <div className="faq-answer-wrap">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
