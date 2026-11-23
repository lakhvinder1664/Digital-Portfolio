import React from 'react';
import ctaImg from '../assets/cta-portrait.jpeg';

export default function CtaSection() {
  return (
    <section className="portfolio-cta-section" id="contact">
      <div className="cta-inner">
        {/* Left Column: Massive Headline, Quote, Contact Button, Social Links */}
        <div className="cta-left-col">
          <div className="cta-top-content">
            <h2 className="cta-main-heading">
              <span>LET&apos;S BUILD YOUR</span>
              <span>NEXT WEBSITE</span>
            </h2>

            <p className="cta-quote-text">
              &ldquo;COLLABORATE WITH ME FOR FRONTEND DEVELOPMENT, WORDPRESS WEBSITES &amp; CLEAN UI.&rdquo;
            </p>

            <a href="#contact" className="cta-contact-btn">
              START A PROJECT
            </a>
          </div>

          {/* Social Links Row */}
          <div className="cta-socials-row">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="cta-social-link"
            >
              INSTAGRAM ↗
            </a>
            <a
              href="https://github.com/lakhvinder1664"
              target="_blank"
              rel="noreferrer"
              className="cta-social-link"
            >
              GITHUB &#8599;
            </a>
            <a
              href="https://www.linkedin.com/in/lakhvinder-singh-dev/"
              target="_blank"
              rel="noreferrer"
              className="cta-social-link"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        {/* Right Column: Visual Portrait Card */}
        <div className="cta-right-col">
          <div className="cta-image-frame">
            <img
              src={ctaImg}
              alt="Visual Designer Editorial Portrait"
              className="cta-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
