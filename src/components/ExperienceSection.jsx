import React from 'react';

const EXPERIENCE_DATA = [
  {
    company: 'HIVENDS INFO SOLUTIONS PVT. LTD.',
    period: '[ FEB 2026 - PRESENT ]',
    role: 'WEB DEVELOPMENT INTERN',
    location: 'Zirakpur, Punjab',
    description:
      'Contributing to website development, UI design, maintenance, and digital projects for pharmaceutical businesses — managing client mockups, custom WordPress themes, and live product catalogs.',
    tags: ['WordPress', 'PHP', 'Bootstrap 5', 'Pharma Catalogs'],
  },
  {
    company: 'XPORTSOFT TECHNOLOGIES PVT. LTD.',
    period: '[ JUL 2025 - SEP 2025 ]',
    role: 'FRONTEND DEVELOPMENT INTERN',
    location: 'Ambala Cantt, Haryana',
    description:
      'Engineered responsive web applications, modular React.js components, and pixel-perfect front-end interfaces optimized for cross-device performance.',
    tags: ['React.js', 'JavaScript (ES6+)', 'Bootstrap 5', 'UI/UX'],
  },
  {
    company: 'VISHYAT TECHNOLOGIES',
    period: '[ DEC 2024 - JUN 2025 ]',
    role: 'SEO EXECUTIVE',
    location: 'Zirakpur, Punjab',
    description:
      'Managed comprehensive OFF-page SEO strategies, backlink acquisition, search ranking visibility, and organic traffic optimization for digital brands.',
    tags: ['OFF-Page SEO', 'Backlink Building', 'Traffic Optimization'],
  },
  {
    company: 'AMAZE TECHNOSOFT PVT. LTD.',
    period: '[ JAN 2025 - MAR 2025 ]',
    role: 'WEB DESIGNING INTERN',
    location: 'Zirakpur, Chandigarh',
    description:
      'Developed responsive web interfaces with modern HTML5, CSS3, implementing new UI features and performance enhancements across live client websites.',
    tags: ['HTML5', 'CSS3', 'Web Design', 'Responsive UI'],
  },
];

export default function ExperienceSection() {
  return (
    <section className="portfolio-experience-section" id="experience">
      <div className="experience-inner">
        {/* Header Row */}
        <div className="experience-header-row">
          <div className="experience-title-wrap">
            <h2 className="experience-main-heading">EXPERIENCE</h2>
            <p className="experience-subtitle">
              SHOWCASING MY WEB DEVELOPMENT{' '}
              <span className="experience-sub-underlined">&amp; UI DESIGN JOURNEY</span>
            </p>
          </div>

          <div className="experience-badge-wrap">
            <span className="experience-dot" />
            <span className="experience-period-badge">4 ROLES • 2024 - PRESENT</span>
          </div>
        </div>

        {/* Experience List (2-Column Rows: Logo Left, Details Center, Period Right) */}
        <div className="experience-list">
          {EXPERIENCE_DATA.map((item, idx) => (
            <div key={idx} className="experience-row-item">
              {/* Brand Logo Initial Badge */}
              <div className="experience-brand-col">
                <div
                  className="experience-brand-badge-circle"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: idx === 0 ? 'var(--color-lime, #d4ff00)' : 'rgba(255, 255, 255, 0.08)',
                    color: idx === 0 ? '#000000' : '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '15px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Company Info & Role */}
              <div className="experience-detail-col">
                <div className="experience-header-line">
                  <h3 className="experience-company-title">{item.company}</h3>
                  <span className="experience-period-mobile">{item.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h4 className="experience-role-title" style={{ margin: 0 }}>{item.role}</h4>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>• {item.location}</span>
                </div>
                <p className="experience-desc-text">{item.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontWeight: '500',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Period (Desktop Right) */}
              <div className="experience-period-col">
                <span className="experience-period-text">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
