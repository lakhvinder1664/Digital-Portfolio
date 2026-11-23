import React, { useState, useEffect } from 'react';
import { fetchLiveProjects } from '../services/portfolioService';
import proj1 from '../assets/project-1.jpg';
import proj2 from '../assets/project-2.jpg';
import proj3 from '../assets/project-3.jpg';
import proj4 from '../assets/project-4.jpg';
import proj5 from '../assets/project-5.jpg';
import proj6 from '../assets/project-6.jpg';

const PROJECT_IMAGE_MAP = [proj1, proj2, proj3, proj4, proj5, proj6];

const INITIAL_PROJECTS = [
  {
    id: '01',
    cost: 'WORDPRESS WEBSITE',
    title: 'ACCUBIC LABS',
    category: '(PHARMA PRODUCT CATALOG)',
    image: proj1,
    link: 'https://hivends.org/accubic-labs/',
  },
  {
    id: '02',
    cost: 'UI/UX MOCKUP',
    title: 'GRANMED LABS',
    category: '(HEALTHCARE WEBSITE UI)',
    image: proj2,
    link: 'https://hivends.org/mockup/granmed-labs/',
  },
  {
    id: '03',
    cost: 'UI/UX MOCKUP',
    title: 'GMH PHARMACEUTICALS',
    category: '(MANUFACTURING WEBSITE)',
    image: proj3,
    link: 'https://hivends.org/mockup/gmh-pharmaceuticals/',
  },
  {
    id: '04',
    cost: 'FIGMA TO CODE',
    title: 'ZERDIA HEALTHCARE',
    category: '(HEALTHCARE PORTAL UI)',
    image: proj4,
    link: 'https://hivends.org/mockup/zerdia/',
  },
  {
    id: '05',
    cost: 'UI/UX MOCKUP',
    title: 'BLACK MANGO',
    category: '(VETERINARY HEALTHCARE)',
    image: proj5,
    link: 'https://hivends.org/mockup/black-mango/',
  },
  {
    id: '06',
    cost: 'FRONTEND & THEMES',
    title: 'CUSTOM CLIENT PORTALS',
    category: '(WORDPRESS CUSTOMIZATION)',
    image: proj6,
    link: '#contact',
  },
];

export default function SelectedWork({ onExplore }) {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  useEffect(() => {
    let isMounted = true;
    fetchLiveProjects()
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          const mapped = data.map((p, idx) => ({
            id: p.id || String(idx + 1).padStart(2, '0'),
            cost: p.cost || p.badge || 'CLIENT PROJECT',
            title: p.title,
            category: p.category ? `(${p.category.toUpperCase()})` : '',
            image: (p.imageUrl && p.imageUrl.startsWith('http')) ? p.imageUrl : PROJECT_IMAGE_MAP[idx % 6],
            link: p.link || '#',
          }));
          setProjects(mapped);
        }
      })
      .catch((err) => console.log('SelectedWork live projects notice:', err));

    return () => {
      isMounted = false;
    };
  }, []);
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
                EXPLORE ALL (6+)
              </button>
            </div>

            <p className="work-header-description">
              Real client websites, pharmaceutical portals, WordPress theme customizations and responsive UI mockups developed by Lakhvinder Singh.
            </p>
          </div>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="work-grid">
          {projects.slice(0, 6).map((p) => (
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
