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
            XOTTO<sup>&reg;</sup> A LEADING STRATEGIC BRAND CONSULTANCY THAT POSITIONS AND REDEFINES THE WORLD&apos;.
          </p>
          <span className="banner-caption-right">
            ALL RIGHTS RESERVED &copy;
          </span>
        </div>
      </div>
    </section>
  );
}
