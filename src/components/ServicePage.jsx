import React from 'react';
import FaqSection from './FaqSection';
import CtaSection from './CtaSection';

// Service Assets
import icon1 from '../assets/service-faq-icon-1.svg';
import icon2 from '../assets/service-faq-icon-2.svg';
import icon3 from '../assets/service-faq-icon-3.svg';
import icon4 from '../assets/service-faq-icon-4.svg';
import icon5 from '../assets/service-faq-icon-5.svg';

import img1 from '../assets/service-accordion-img.png';
import img2 from '../assets/service-accordion-img-2.png';
import img3 from '../assets/service-accordion-img-3.png';
import img4 from '../assets/service-accordion-img-4.png';
import img5 from '../assets/service-accordion-img-5.png';

const MAJOR_SERVICES = [
  {
    id: '01',
    title: 'UI DESIGN & FIGMA MOCKUPS',
    icon: icon1,
    tagline: 'Designing intuitive website mockups in Figma, component hierarchies, and responsive layouts for client websites.',
    pricePrefix: 'Specialized for',
    priceHighlight: 'Client Needs',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Figma UI/UX Mockups',
      'Design to Production Code',
      'Component-Driven UI Systems',
    ],
    ratingText: 'VERIFIED CLIENT WORK',
    image: img1,
    imageAlt: 'UI Design Showcase',
  },
  {
    id: '02',
    title: 'FRONTEND DEVELOPMENT',
    icon: icon2,
    tagline: 'Building responsive, fast, and cross-browser web interfaces using clean semantic HTML5, modern CSS3, and JavaScript.',
    pricePrefix: 'Specialized for',
    priceHighlight: 'Client Needs',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Semantic HTML5 & Modern CSS3',
      'Responsive Bootstrap 5 Grids',
      'Interactive DOM & Form Validation',
    ],
    ratingText: 'VERIFIED CLIENT WORK',
    image: img2,
    imageAlt: 'Frontend Development Showcase',
  },
  {
    id: '03',
    title: 'WORDPRESS CUSTOMIZATION',
    icon: icon3,
    tagline: 'Custom WordPress theme development, PHP template modifications, WooCommerce stores, and product catalogues.',
    pricePrefix: 'Specialized for',
    priceHighlight: 'Client Needs',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Custom Theme Modifications',
      'WooCommerce & Pharma Catalogs',
      'ACF & Custom Post Types',
    ],
    ratingText: 'VERIFIED CLIENT WORK',
    image: img3,
    imageAlt: 'WordPress Development Showcase',
  },
  {
    id: '04',
    title: 'RESPONSIVE FIXES & BUG RESOLUTION',
    icon: icon4,
    tagline: 'Diagnosing layout bugs, fixing mobile responsiveness issues, resolving CSS conflicts, and refining site usability.',
    pricePrefix: 'Specialized for',
    priceHighlight: 'Client Needs',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Mobile Viewport & Media Query Fixes',
      'CSS Layout & Overflow Debugging',
      'Cross-Browser Consistency',
    ],
    ratingText: 'VERIFIED CLIENT WORK',
    image: img4,
    imageAlt: 'Website Bug Fixes Showcase',
  },
  {
    id: '05',
    title: 'WEBSITE REDESIGN & ENHANCEMENTS',
    icon: icon5,
    tagline: 'Revamping outdated websites into clean, modern, and mobile-friendly digital experiences with improved navigation.',
    pricePrefix: 'Specialized for',
    priceHighlight: 'Client Needs',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Modern UI Redesign & Restyling',
      'Clean Code & Structure Rebuild',
      'Improved Navigation & Experience',
    ],
    ratingText: 'VERIFIED CLIENT WORK',
    image: img5,
    imageAlt: 'Website Redesign Showcase',
  },
];

export default function ServicePage({ onStartProject }) {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onStartProject) {
      onStartProject();
    }
  };

  return (
    <div className="service-page-wrapper">
      {/* 1. MAJOR SERVICES HERO SECTION */}
      <section className="service-hero-section">
        <div className="service-hero-inner">
          {/* Left: Giant Heading with Lime Accent Circle */}
          <div className="service-hero-left">
            <h1 className="service-hero-title">
              <span className="service-hero-line">MAJOR</span>
              <span className="service-hero-line-accent">
                SERVICES
                <span className="service-hero-lime-circle" aria-hidden="true" />
              </span>
            </h1>
          </div>

          {/* Right: Category tag & subtext */}
          <div className="service-hero-right">
            <div className="service-hero-badge">
              [ 02 / EXPERT DESIGN SOLUTIONS ]
            </div>
            <p className="service-hero-desc">
              TAILORED ON ACCURATE DESIGN SERVICES PACKAGES BUILT TO HELP TO BRING YOUR BRAND DREAMS.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 5 SHOWCASE SERVICE ROWS */}
      <section className="service-showcase-section">
        <div className="service-showcase-container">
          <div className="service-showcase-list">
            {MAJOR_SERVICES.map((service) => (
              <article key={service.id} className="service-showcase-item">
                {/* Header Row: Icon + Title (Left) and Number Index (Right) */}
                <div className="service-item-header">
                  <div className="service-item-title-group">
                    <img
                      src={service.icon}
                      alt=""
                      className="service-item-icon"
                      aria-hidden="true"
                    />
                    <h2 className="service-item-heading">{service.title}</h2>
                  </div>
                  <span className="service-item-index">( {service.id} )</span>
                </div>

                {/* Body Row: Details (Left) + Visual Mockup Card (Right) */}
                <div className="service-item-body">
                  <div className="service-item-content-left">
                    <p className="service-item-tagline">{service.tagline}</p>

                    <p className="service-item-cost">
                      {service.pricePrefix}{' '}
                      <span className="service-cost-underline">
                        {service.priceHighlight}
                      </span>
                    </p>

                    <div className="service-key-features-box">
                      <h3 className="service-features-title">
                        {service.featuresTitle}
                      </h3>
                      <ul className="service-features-list">
                        {service.features.map((feature, i) => (
                          <li key={i}>&bull; {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-item-action-row">
                      <a
                        href="#contact"
                        className="service-get-started-btn"
                        onClick={handleScrollToContact}
                      >
                        GET STARTED
                      </a>

                      <div className="service-rating-group">
                        <div className="service-rating-stars" aria-label="5 out of 5 stars">
                          <span className="star-icon">&#9733;</span>
                          <span className="star-icon">&#9733;</span>
                          <span className="star-icon">&#9733;</span>
                          <span className="star-icon">&#9733;</span>
                          <span className="star-icon">&#9733;</span>
                        </div>
                        <span className="service-rating-label">
                          {service.ratingText}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Mockup Image Card */}
                  <div className="service-item-image-col">
                    <div className="service-image-card">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="service-card-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* 4. CALL TO ACTION SECTION */}
      <CtaSection />
    </div>
  );
}
