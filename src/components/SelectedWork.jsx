import React from 'react';
import proj1 from '../assets/project-1.jpg';
import proj2 from '../assets/project-2.jpg';
import proj3 from '../assets/project-3.jpg';
import proj4 from '../assets/project-4.jpg';
import proj5 from '../assets/project-5.jpg';
import proj6 from '../assets/project-6.jpg';

const PROJECTS = [
  {
    id: '01',
    cost: 'LIVE WEBSITE',
    title: 'ACCUBIC LABS',
    category: '(WORDPRESS / E-COMMERCE)',
    image: proj1,
    link: 'https://hivends.org/accubic-labs/',
  },
  {
    id: '02',
    cost: 'APPROVED UI MOCKUP',
    title: 'GRANMED LABS',
    category: '(PHARMA HEALTHCARE)',
    image: proj2,
    link: 'https://hivends.org/mockup/granmed-labs/',
  },
  {
    id: '03',
    cost: 'CLIENT APPROVED',
    title: 'GMH PHARMACEUTICALS',
    category: '(MANUFACTURING UI)',
    image: proj3,
    link: 'https://hivends.org/mockup/gmh-pharmaceuticals/',
  },
  {
    id: '04',
    cost: 'FIGMA UI/UX',
    title: 'ZERDIA HEALTHCARE',
    category: '(FIGMA TO PRODUCTION)',
    image: proj4,
    link: 'https://hivends.org/mockup/zerdia/',
  },
  {
    id: '05',
    cost: 'UI DESIGN',
    title: 'BLACK MANGO',
    category: '(VETERINARY HEALTHCARE)',
    image: proj5,
    link: 'https://hivends.org/mockup/black-mango/',
  },
  {
    id: '06',
    cost: 'WEB DEVELOPMENT',
    title: 'CUSTOM CMS & CLIENT PORTALS',
    category: '(REACT & WORDPRESS)',
    image: proj6,
    link: '#contact',
  },
];

export default function SelectedWork({ onExplore }) {
  return (
    <section className="portfolio-work-section" id="works">
      <div className="work-inner">
        {/* Section Header: Title Left, Explore + Description Right */}
        <div className="work-header-row">
          <div className="work-title-wrap">
            <h2 className="work-main-title">
              <span>SELECTED</span>
              <span>WORK</span>
            </h2>
          </div>

          <div className="work-header-right">
            <div className="work-explore-pill-wrap">
              <span className="work-dot-indicator" aria-hidden="true" />
              <button
                type="button"
                className="work-explore-btn"
                onClick={onExplore}
                style={{ cursor: onExplore ? 'pointer' : 'default' }}
              >
                EXPLORE ALL (5+)
              </button>
            </div>

            <p className="work-header-description">
              Verified portfolio of actual websites, client-approved pharmaceutical mockups, and responsive web applications built and delivered by Lakhvinder Singh.
            </p>
          </div>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="work-card">
              <div className="work-card-media">
                <a
                  href={p.link}
                  target={p.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  title={`View ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="work-card-image"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="work-card-info">
                {/* Left: Cost/Badge & Title */}
                <div className="work-card-left">
                  <span className="work-card-cost" style={{ letterSpacing: '0.5px' }}>{p.cost}</span>
                  <h3 className="work-card-title">
                    <a
                      href={p.link}
                      target={p.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {p.title} ↗
                    </a>
                  </h3>
                </div>

                {/* Center: Category */}
                <div className="work-card-center">
                  <span className="work-card-category">{p.category}</span>
                </div>

                {/* Right: Index */}
                <div className="work-card-right">
                  <span className="work-card-index">[{p.id}]</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
