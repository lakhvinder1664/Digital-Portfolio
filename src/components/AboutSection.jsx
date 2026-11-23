import React, { useState } from 'react';
import aboutImg from '../assets/about-portrait.jpeg';
import cvPdf from '../assets/Lakhvinder_Singh_Web_Developer_CV.pdf';

const AWARDS = [
  { id: '1', title: 'FRONTEND & BOOTSTRAP INTERFACES', year: 'CORE FOCUS', hasArrow: true },
  { id: '2', title: 'WORDPRESS THEMES & WOOCOMMERCE', year: 'DEVELOPMENT', hasArrow: true },
  { id: '3', title: 'PHARMA & BUSINESS WEBSITES', year: 'CLIENT BUILDS', hasArrow: true },
  { id: '4', title: 'FIGMA TO RESPONSIVE WEBPAGES', year: 'UI IMPLEMENTATION', hasArrow: true },
];

export default function AboutSection() {
  const [activeAward, setActiveAward] = useState('1');

  const handleDownload = (e) => {
    // Ensures download initiates even if browser tries to navigate
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Lakhvinder_Singh_Web_Developer_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="portfolio-about-section" id="about">
      <div className="about-inner">
        {/* Top Header Row */}
        <div className="about-header-row">
          <div className="about-title-group">
            <h2 className="about-main-title">ABOUT LAKHVINDER</h2>
            <div className="about-subtitle-wrap">
              <span>BUILDING FUNCTIONAL CLIENT WEBSITES WITH CLEAN </span>
              <span className="about-subtitle-underlined">FRONTEND &amp; WORDPRESS CODE</span>
            </div>
          </div>

          <div className="about-header-action">
            <span className="about-dot-indicator" aria-hidden="true" />
            <a href="#contact" className="about-work-together-btn">
              LET&apos;S WORK TOGETHER
            </a>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="about-content-grid">
          {/* Left Column: Portrait Image & Download Resume aligned at bottom */}
          <div className="about-left-col">
            <div className="about-portrait-card">
              <img
                src={aboutImg}
                alt="Lakhvinder Singh Portrait"
                className="about-portrait-image"
              />
            </div>

            <div className="about-resume-wrap">
              <a
                href={cvPdf}
                download="Lakhvinder_Singh_Web_Developer_CV.pdf"
                className="about-download-btn"
                target="_blank"
                rel="noreferrer"
                onClick={handleDownload}
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          {/* Right Column: Bio, Awards, Mission & Est */}
          <div className="about-right-col">
            <div className="about-right-top">
              {/* [ ABOUT ME ] */}
              <span className="about-section-tag">[ ABOUT ME ]</span>

              {/* Bio Paragraph */}
              <p className="about-bio-text">
                I am a Frontend Developer, WordPress Developer and UI Designer with practical experience building and customizing client websites, primarily in pharmaceutical and healthcare sectors. From developing responsive interfaces with Bootstrap and CSS to implementing custom WordPress theme modifications and converting Figma designs into clean, functional code, I focus on delivering reliable, user-friendly web solutions that work seamlessly across all devices.
              </p>

              {/* Focus mention */}
              <div className="about-mention-wrap">
                <span>Focused on </span>
                <span className="about-mention-link" style={{ textDecoration: 'none', cursor: 'default' }}>
                  Responsive Client Deliverables
                </span>
              </div>

              {/* Awards Table matching exact screenshot */}
              <div className="about-awards-list">
                {AWARDS.map((award) => {
                  const isActive = activeAward === award.id;
                  return (
                    <div
                      key={award.id}
                      className={`about-award-row ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveAward(award.id)}
                    >
                      <span className="award-title">{award.title}</span>

                      <div className="award-indicators-group">
                        {award.hasArrow && (
                          <span className="award-arrow-icon" aria-hidden="true">&#8599;</span>
                        )}
                      </div>

                      <span className="award-year-text">{award.year}</span>
                    </div>
                  );
                })}
              </div>

              {/* [ MY MISSION ] */}
              <div className="about-mission-block">
                <span className="about-section-tag">[ MY MISSION ]</span>
                <p className="about-mission-text">
                  Developing robust, responsive websites with clean code, accurate visual implementation, and practical client usability.
                </p>
              </div>
            </div>

            {/* Bottom aligned [ EST. 2024 ] matching Download Resume baseline */}
            <div className="about-est-wrap">
              <span className="about-est-tag">[ EST. 2024 ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
