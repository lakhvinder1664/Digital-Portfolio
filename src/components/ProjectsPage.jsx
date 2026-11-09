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

  const categories = ['ALL', 'Live Website', 'Approved UI Mockup', 'Project Announcement'];

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
              PROVEN WORK, REAL CLIENT BUILDS &amp; APPROVED UI MOCKUPS DELIVERED BY LAKHVINDER SINGH.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="projects-filter-bar-section" style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--page-gutter)',
        marginBottom: '40px'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center'
        }}>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: isActive ? 'var(--color-lime, #d4ff00)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#000000' : '#ffffff',
                  border: isActive ? '1px solid var(--color-lime, #d4ff00)' : '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '50px',
                  padding: '8px 20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
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
              const imageSrc = PROJECT_IMAGE_MAP[idx % 6] || project1;
              return (
                <article key={proj.id || idx} className="projects-card-item">
                  <div className="projects-card-media-box">
                    <a
                      href={proj.link}
                      target={proj.link?.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{ display: 'block', width: '100%', height: '100%' }}
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

                  <div className="projects-card-meta-row">
                    <div className="projects-card-meta-left">
                      <span className="projects-card-price" style={{ letterSpacing: '0.5px' }}>
                        {proj.badge || proj.category}
                      </span>
                      <h3 className="projects-card-title">
                        <a
                          href={proj.link}
                          target={proj.link?.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {proj.title} ↗
                        </a>
                      </h3>
                      {proj.description && (
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.65)',
                          fontSize: '13px',
                          lineHeight: '1.6',
                          marginTop: '8px',
                          marginBottom: '12px'
                        }}>
                          {proj.description}
                        </p>
                      )}
                      {proj.tags && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {proj.tags.map((t, i) => (
                            <span
                              key={i}
                              style={{
                                fontSize: '10px',
                                textTransform: 'uppercase',
                                padding: '3px 10px',
                                borderRadius: '4px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontWeight: '600',
                                letterSpacing: '0.5px',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="projects-card-meta-right">
                      <span className="projects-card-cat">{proj.category}</span>
                      <span className="projects-card-index">[{proj.id || String(idx + 1).padStart(2, '0')}]</span>
                    </div>
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
