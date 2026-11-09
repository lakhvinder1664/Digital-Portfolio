import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    question: 'WHAT INDUSTRIES DO YOU SPECIALIZE IN?',
    answer:
      'I have experience working across various industries including but not limited to Technology, Healthcare, Fashion, Hospitality and Non Profit Organization.',
  },
  {
    id: 2,
    question: 'WHAT IS YOUR TYPICAL PROJECT TIMELINE?',
    answer:
      'Project timelines generally range from 2 to 6 weeks depending on scope, deliverables, and complexity. Standard sprint kickoffs happen within 24 hours of onboarding.',
  },
  {
    id: 3,
    question: 'DO YOU OFFER POST-LAUNCH SUPPORT OR MAINTENANCE?',
    answer:
      'Yes, I provide comprehensive post-launch support including bug fixes, system updates, team onboarding, and optional monthly retainer maintenance packages.',
  },
  {
    id: 4,
    question: 'WHAT SOFTWARE AND TOOLS DO YOU USE FOR YOUR DESIGNS?',
    answer:
      'I primarily use Figma, Framer, and Webflow for design and prototyping, alongside Adobe Creative Cloud, Notion for project management, and Canva.',
  },
  {
    id: 5,
    question: 'WHAT ARE YOUR GO-TO PROGRAMS FOR DESIGN WORK?',
    answer:
      'Figma is my primary workspace for UI/UX wireframing, high-fidelity prototypes, and component design systems, complemented by Framer for micro-interactions.',
  },
  {
    id: 6,
    question: 'DO YOUR DESIGNS ARE TAILORED TO EACH CLIENT?',
    answer:
      'Every project is custom-designed from scratch based on in-depth research, brand positioning, and unique audience requirements. No generic templates.',
  },
  {
    id: 7,
    question: 'HOW DO I UPGRADE, DOWNGRADE, OR CANCEL?',
    answer:
      'You can modify your project scope or service tier at any time by contacting me directly. Clear change orders and transparent milestones ensure complete flexibility.',
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
