import React, { useState } from 'react';
import booksImg from '../assets/service-books.jpg';

const SERVICES_DATA = [
  {
    id: '01',
    title: 'UX/UI DESIGNING',
    iconType: 'cross-circle',
    tagline: 'Blending Aesthetic and Innovation, My UX/UI gives you a Top Notch Client.',
    price: 'Starts At Cost® — $2000',
    features: [
      '- Portfolio Highlights',
      '- Client Testimonials',
      '- Design Process',
    ],
    image: booksImg,
  },
  {
    id: '02',
    title: 'GRAPHIC DESIGN',
    iconType: 'bullseye',
    tagline: 'Creating stunning visual identities and high-impact graphic design solutions.',
    price: 'Starts At Cost® — $1500',
    features: [
      '- Visual Identity Systems',
      '- Brand Guidelines',
      '- Editorial & Print Media',
    ],
    image: booksImg,
  },
  {
    id: '03',
    title: 'WEB DESIGN',
    iconType: 'bars',
    tagline: 'Crafting responsive, high-performance websites and interactive digital spaces.',
    price: 'Starts At Cost® — $2500',
    features: [
      '- Custom Web Architecture',
      '- Interactive Micro-animations',
      '- Responsive Design Systems',
    ],
    image: booksImg,
  },
  {
    id: '04',
    title: 'BRAND DESIGN',
    iconType: 'pen',
    tagline: 'Building cohesive, memorable brands that resonate globally across industries.',
    price: 'Starts At Cost® — $1800',
    features: [
      '- Brand Strategy & Positioning',
      '- Typography & Color Systems',
      '- Marketing Collaterals',
    ],
    image: booksImg,
  },
];

const STATS_DATA = [
  { value: '1+', label: '[ YEARS OF EXPERIENCE ]' },
  { value: '20+', label: '[ PROJECT DONE ]' },
  { value: '25+', label: '[ Approved Work ]' },
  { value: '46+', label: '[ Live Sites   ]' },
];

export default function ServicesSection({ onNavigateToServices }) {
  const [activeService, setActiveService] = useState('01');

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="portfolio-services-section" id="services">
      <div className="services-inner">
        {/* Header Row */}
        <div className="services-header-row">
          <div className="services-title-wrap">
            <h2 className="services-main-heading">SERVICES</h2>
            <div className="services-subtitle-group">
              <p className="services-sub-line">
                EVERYTHING STARTS WITH THOROUGH RESEARCH AND ITERATIVE EXPERIMENTATION.
              </p>
              <p className="services-sub-line">
                WHAT USES DESIGNING, IDEAS AND DEVELOPING,{' '}
                <span className="services-sub-underlined">WHAT USER NEED&copy;</span>
              </p>
            </div>
          </div>

          <div
            className="services-header-badge"
            onClick={onNavigateToServices}
            style={{ cursor: onNavigateToServices ? 'pointer' : 'default' }}
            title="View Full Services Page"
          >
            <span className="services-dot" />
            <span className="services-discover-btn">DISCOVER</span>
          </div>
        </div>

        {/* Services Accordion */}
        <div className="services-accordion-list">
          {SERVICES_DATA.map((srv) => {
            const isOpen = activeService === srv.id;
            return (
              <div
                key={srv.id}
                className={`service-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                {/* Accordion Header */}
                <div
                  className="service-accordion-header"
                  onClick={() => toggleService(srv.id)}
                >
                  <div className="service-header-left">
                    {/* Icon */}
                    <span className="service-lead-icon">
                      {srv.iconType === 'cross-circle' && (
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 9L15 15M15 9L9 15" strokeLinecap="round" />
                        </svg>
                      )}
                      {srv.iconType === 'bullseye' && (
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="4" fill="currentColor" />
                        </svg>
                      )}
                      {srv.iconType === 'bars' && (
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 6V18M12 6V18M17 6V18" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      )}
                      {srv.iconType === 'pen' && (
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                        </svg>
                      )}
                    </span>

                    <h3 className="service-item-title">{srv.title}</h3>
                  </div>

                  <div className="service-header-right">
                    <span className="service-toggle-glyph">
                      {isOpen ? '—' : '+'}
                    </span>
                  </div>
                </div>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="service-accordion-body">
                    <div className="service-body-left">
                      <p className="service-body-tagline">{srv.tagline}</p>
                      <p className="service-body-price">{srv.price}</p>

                      <div className="service-features-block">
                        <span className="service-features-tag">[ KEY FEATURES ]</span>
                        <ul className="service-features-list">
                          {srv.features.map((feat, idx) => (
                            <li key={idx} className="service-feature-item">
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="service-get-started-btn">
                        GET STARTED
                      </button>
                    </div>

                    <div className="service-body-right">
                      <span className="service-index-number">( {srv.id} )</span>
                      <div className="service-image-card">
                        <img
                          src={srv.image}
                          alt={`${srv.title} preview`}
                          className="service-card-img"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom 4-Column Stats Counter Row */}
        <div className="services-stats-row">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="services-stat-col">
              <span className="services-stat-value">{stat.value}</span>
              <span className="services-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
