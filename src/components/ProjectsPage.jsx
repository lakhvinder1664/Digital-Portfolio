import React, { useState, useEffect } from 'react';
import CtaSection from './CtaSection';
import { fetchLiveProjects, DEFAULT_PROJECTS } from '../services/portfolioService';

// High-resolution project image assets
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';

const PROJECT_IMAGE_MAP = {
  0: project1,
  1: project2,
  2: project3,
  3: project4,
  4: project5,
  5: project6,
};

export default function ProjectsPage({ onStartProject }) {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    let isMounted = true;
    fetchLiveProjects()
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          setProjects(data);
        }
      })
      .catch((err) => console.log('Projects load notice:', err));

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ['ALL', 'WordPress Website', 'UI/UX Mockup', 'Frontend & WordPress'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category?.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="projects-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="projects-hero-section">
        <div className="projects-hero-inner">
          {/* Left: Giant Heading with Lime Accent Circle */}
          <div className="projects-hero-left">
            <h1 className="projects-hero-title">
              <span className="projects-hero-line">SELECTED</span>
              <span className="projects-hero-line-accent">
                WORKS
                <span className="projects-hero-lime-circle" aria-hidden="true" />
              </span>
            </h1>
          </div>

          {/* Right: Year Badge and Subtext */}
          <div className="projects-hero-right">
            <div className="projects-hero-badge">[ 2024 — PRESENT ]</div>
            <p className="projects-hero-desc">
              REAL CLIENT WEBSITES, PHARMACEUTICAL PORTALS &amp; RESPONSIVE UI MOCKUPS DELIVERED BY LAKHVINDER SINGH.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="projects-filter-bar-section">
        <div className="projects-filter-bar-inner">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`projects-filter-btn ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. PROJECTS MASONRY / 2-COLUMN GRID */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          <div className="projects-masonry-list">
            {filteredProjects.map((proj, idx) => {
              const fallbackImage = PROJECT_IMAGE_MAP[idx % 6] || project1;
              const imageSrc = proj.imageUrl && proj.imageUrl.startsWith('http') ? proj.imageUrl : fallbackImage;
              return (
                <article key={proj.id || idx} className="projects-card-item">
                  <div className="projects-card-media-box">
                    <a
                      href={proj.link}
                      target={proj.link?.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="projects-card-media-link"
                    >
                      <img
                        src={imageSrc}
                        alt={proj.title}
                        className="projects-card-image"
                        loading="lazy"
                      />
                      <div className="projects-card-overlay" />
                    </a>
                  </div>

                  <div className="projects-card-info">
                    {/* Meta Row: Badge & Title on Left, Category & Index on Right */}
                    <div className="projects-card-meta-row">
                      <div className="projects-card-meta-left">
                        <span className="projects-card-badge">
                          {proj.badge || proj.category}
                        </span>
                        <h3 className="projects-card-title">
                          <a
                            href={proj.link}
                            target={proj.link?.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                          >
                            {proj.title} ↗
                          </a>
                        </h3>
                      </div>

                      <div className="projects-card-meta-right">
                        <span className="projects-card-cat">{proj.category}</span>
                        <span className="projects-card-index">[{proj.id || String(idx + 1).padStart(2, '0')}]</span>
                      </div>
                    </div>

                    {/* Tags only — no description paragraph */}
                    {proj.tags && proj.tags.length > 0 && (
                      <div className="projects-card-tags">
                        {proj.tags.map((t, i) => (
                          <span key={i} className="projects-card-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <CtaSection onStartProject={onStartProject} />
    </div>
  );
}
