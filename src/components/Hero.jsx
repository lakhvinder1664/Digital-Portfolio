import React from 'react';
import clockIcon from '../assets/figma_6_33.svg';
import shapeIcon from '../assets/figma_6_40.svg';
import heroVideo from '../assets/hero-preview.mp4';

export default function Hero({ videoSrc }) {
  return (
    <section className="portfolio-hero-section" id="home">
      <div className="hero-inner">
        {/* Left Column: Kickoff tag & Massive Headline */}
        <div className="hero-left-col">
          {/* Kickoff Notice (No box border, matches screenshot) */}
          <div className="hero-kickoff-notice">
            <img src={clockIcon} alt="Clock" className="kickoff-icon" />
            <span className="kickoff-text">AVAILABLE FOR FRONTEND &amp; WORDPRESS PROJECTS</span>
          </div>

          {/* Huge Typography with Lime Circle */}
          <div className="hero-headline-wrap">
            <div className="headline-row">
              <span className="headline-text">FRONTEND</span>
              <img src={shapeIcon} alt="Glyph" className="headline-glyph" />
            </div>

            <div className="headline-row designer-row">
              <span className="headline-text">DEVELOPER</span>
              {/* Neon Lime Circle behind the letter R */}
              <div className="headline-lime-circle" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Right Column: Video Box, Statement, See All Projects */}
        <div className="hero-right-col">
          <div className="hero-right-top">
            <div className="hero-video-box">
              <video
                src={videoSrc || heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="hero-video-player"
              />
            </div>

            <p className="hero-brand-statement">
              FRONTEND DEVELOPER EXPERIENCED IN BUILDING RESPONSIVE CLIENT WEBSITES, WORDPRESS THEME CUSTOMIZATIONS &amp; CLEAN UI DESIGNS.
            </p>
          </div>

          <div className="hero-right-bottom">
            <a href="#works" className="hero-see-all-link">
              SEE ALL PROJECTS (6+)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
