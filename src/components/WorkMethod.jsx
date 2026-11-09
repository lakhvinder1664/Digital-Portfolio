import React, { useState, useEffect, useRef } from 'react';
import processImg from '../assets/process-method.jpg';

const STEPS = [
  {
    id: '01',
    title: 'PLANNING',
    description:
      'Before we start, we determine if and how I can help you. What are your requirements for your new design? Why do you need a new design? What goals do you have in that, and what problem can we solve with a new design?',
    bullets: [
      '- We get to know each other better',
      '- Determine how i can best assist you',
      '- Understand the goals you have for the work',
    ],
    iconType: 'branch',
  },
  {
    id: '02',
    title: 'CONCEPT & STRATEGY',
    description:
      'Once we have assessed your requirements and objectives, we move into the concept and strategy phase. Here, we define the overall vision and strategic approach for your design project. What are the core ideas we want to develop?',
    bullets: [
      '- UX/UI Design',
      '- Wireframes',
      '- Interactive Prototype',
    ],
    iconType: 'spiral',
  },
  {
    id: '03',
    title: 'DESIGN ONBOARDING',
    description:
      "I'm thrilled to embark on this creative journey with you. My mission is to bring your vision to life with a collaborativeand personalised design process.",
    bullets: [
      '- Personal Workshop',
      '- Personalised Video Tutorials',
      '- Edit Text and Images directly on Website',
    ],
    iconType: 'segmented',
  },
];

export default function WorkMethod() {
  const [activeStep, setActiveStep] = useState('01');
  const sectionRef = useRef(null);
  const stepRefs = useRef({});

  // Active step scroll observer - activates 01, 02, 03 as user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const targetPoint = windowHeight * 0.48;

      let current = '01';
      STEPS.forEach((step) => {
        const el = stepRefs.current[step.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetPoint) {
            current = step.id;
          }
        }
      });
      setActiveStep(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (id) => {
    const el = stepRefs.current[id];
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="portfolio-method-section" ref={sectionRef} id="method">
      <div className="method-inner">
        {/* Top Centered Header */}
        <div className="method-header-wrap">
          <span className="method-eyebrow">LET ME SHOW HOW I DO</span>
          <h2 className="method-main-heading">DISCOVER MY WORK METHOD</h2>
          <span className="method-pill-tag">
            [ &copy;ELEVATE YOUR VISUAL DESIGN WITH EXPERT TECHNIQUES AND ADVICE ]
          </span>
        </div>

        {/* 2-Column Content Grid: Sticky Sliding Image on Left, Steps 01 to 03 on Right */}
        <div className="method-content-grid">
          {/* Left Column: Stretches full height of right steps; Image sticks and slides from 01 to 03 */}
          <div className="method-left-col">
            <div className="method-sticky-wrapper">
              <div className="method-visual-frame">
                <img
                  src={processImg}
                  alt="Leon Bridges Coming Home Vinyl Process"
                  className="method-image"
                />
              </div>

              {/* Step Tracking Progress Tag (Indicates current stage 01 to 03) */}
              <div className="method-step-indicator">
                <span className="step-indicator-dot" />
                <span className="step-indicator-text">
                  STAGE [ {activeStep} ] &mdash; {STEPS.find((s) => s.id === activeStep)?.title}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Step Points 01, 02, 03 */}
          <div className="method-right-col">
            {STEPS.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  ref={(el) => (stepRefs.current[step.id] = el)}
                  onClick={() => scrollToStep(step.id)}
                  className={`method-step-block ${isActive ? 'is-active-step' : ''}`}
                  title={`Click to focus Step ${step.id}`}
                >
                  {/* Step Top Row: Index Left, Graphic Icon Right */}
                  <div className="step-top-row">
                    <span className="step-index-tag">[ {step.id} ]</span>

                    {/* Step Icon matching screenshot */}
                    <div className="step-graphic-icon">
                      {step.iconType === 'branch' && (
                        <svg viewBox="0 0 60 60" fill="none" width="46" height="46">
                          <path d="M30 6V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M30 18L46 10M30 30L48 22M30 42L46 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M30 18L14 10M30 30L12 22M30 42L14 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      )}
                      {step.iconType === 'spiral' && (
                        <svg viewBox="0 0 60 60" width="46" height="46">
                          <defs>
                            <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                              <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="currentColor" strokeWidth="1.2" />
                            </pattern>
                          </defs>
                          <circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="2" fill="url(#diagonalHatch)" />
                        </svg>
                      )}
                      {step.iconType === 'segmented' && (
                        <svg viewBox="0 0 60 60" fill="none" width="46" height="46">
                          <circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="2.5" />
                          <path d="M30 7V53M7 30H53" stroke="currentColor" strokeWidth="2.2" />
                          <path d="M13.7 13.7L46.3 46.3M13.7 46.3L46.3 13.7" stroke="currentColor" strokeWidth="2.2" />
                          <circle cx="30" cy="30" r="7" stroke="currentColor" strokeWidth="2.2" fill="#000000" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="step-title">{step.title}</h3>

                  {/* Step Description */}
                  <p className="step-description">{step.description}</p>

                  {/* Bullet Points */}
                  <ul className="step-bullet-list">
                    {step.bullets.map((b, idx) => (
                      <li key={idx} className="step-bullet-item">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
