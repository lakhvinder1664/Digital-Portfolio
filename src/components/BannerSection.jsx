import React from 'react';
import bannerImg from '../assets/banner-portrait.jpeg';

export default function BannerSection() {
  return (
    <section className="portfolio-banner-section">
      <div className="banner-inner">
        {/* Large Cinematic Visual Frame */}
        <div className="banner-frame">
          <img
            src={bannerImg}
            alt="Editorial Portrait Visual"
            className="banner-image"
          />
        </div>

        {/* Sub-text Row Below Banner */}
        <div className="banner-caption-row">
          <p className="banner-caption-left">
            LAKHVINDER SINGH<sup>&reg;</sup> FRONTEND DEVELOPER, WORDPRESS DEVELOPER &amp; UI DESIGNER SPECIALIZING IN CLIENT WEBSITES.
          </p>
          <span className="banner-caption-right">
            PORTFOLIO &copy; 2026
          </span>
        </div>
      </div>
    </section>
  );
}
