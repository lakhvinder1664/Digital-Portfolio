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
    title: 'UI/UX DESIGNING',
    icon: icon1,
    tagline: 'I create clean, intuitive designs by understanding user needs and delivering strong, impactful interfaces.',
    pricePrefix: 'Starts At',
    priceHighlight: 'Cost® — ₹15,000',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'User Journey Mapping',
      'Figma Prototypes & Wireframes',
      'Design Systems & UI Kits',
    ],
    ratingText: 'VERIFIED 5.0 RATED',
    image: img1,
    imageAlt: 'UI/UX Design Book Mockups',
  },
  {
    id: '02',
    title: 'WEB DEVELOPMENT',
    icon: icon2,
    tagline: 'Custom-built web applications that are responsive, fast, secure, and optimized for conversions.',
    pricePrefix: 'Starts At',
    priceHighlight: 'Cost® — ₹25,000',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'React.js & Modern JavaScript',
      'Clean Semantic HTML5/CSS3',
      'Fluid Cross-Device Layouts',
    ],
    ratingText: 'VERIFIED 5.0 RATED',
    image: img2,
    imageAlt: 'Custom Web Development Showcase',
  },
  {
    id: '03',
    title: 'WORDPRESS CUSTOMIZATION',
    icon: icon3,
    tagline: 'Bespoke WordPress themes, live product catalogs, and tailored CMS solutions built for business growth.',
    pricePrefix: 'Starts At',
    priceHighlight: 'Cost® — ₹20,000',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Custom Theme Engineering',
      'Client Mockups to Code',
      'Product Catalogs & CMS',
    ],
    ratingText: 'VERIFIED 5.0 RATED',
    image: img3,
    imageAlt: 'WordPress Development Showcase',
  },
  {
    id: '04',
    title: 'WEBSITE OPTIMIZATION',
    icon: icon4,
    tagline: 'Making websites fast and smooth by writing clean code, optimizing layouts, and maximizing Core Web Vitals.',
    pricePrefix: 'Starts At',
    priceHighlight: 'Cost® — ₹10,000',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Speed & Performance Audits',
      'Technical SEO & Semantics',
      'Smooth Micro-animations',
    ],
    ratingText: 'VERIFIED 5.0 RATED',
    image: img4,
    imageAlt: 'Website Optimization Showcase',
  },
  {
    id: '05',
    title: 'CREATIVE DIGITAL DESIGN',
    icon: icon5,
    tagline: 'Building brands that stand out, connect deeply, and leave a lasting digital impact on users.',
    pricePrefix: 'Starts At',
    priceHighlight: 'Cost® — ₹18,000',
    featuresTitle: '[ KEY FEATURES ]',
    features: [
      'Brand Identity Systems',
      'Interactive Micro-interactions',
      'Production-Ready Assets',
    ],
    ratingText: 'VERIFIED 5.0 RATED',
    image: img5,
    imageAlt: 'Creative Digital Design Showcase',
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
