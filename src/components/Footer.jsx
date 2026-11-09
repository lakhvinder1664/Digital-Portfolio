import React from 'react';

export default function Footer({ onNavigate }) {
  const handleBrandClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer-section" id="footer">
      <div className="footer-inner">
        {/* Centered Massive Brand Typography matching exact screenshot */}
        <div className="footer-brand-container">
          <h2
            className="footer-giant-brand"
            onClick={handleBrandClick}
            style={{ cursor: 'pointer' }}
            title="Back to Home"
          >
            LAKHVINDE
            <span className="footer-brand-n-wrap">
              R
              <span className="footer-lime-circle" aria-hidden="true" />
            </span>
          </h2>
        </div>

        {/* Bottom Metadata Row: Copyright Left, Double Circles + Location Right */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="footer-copyright-text">&copy;2026 Design</span>
          </div>

          <div className="footer-bottom-right">
            {/* Exact SVG Shape extracted from Figma */}
            <span className="footer-double-circles" aria-hidden="true">
              <svg viewBox="0 0 40 22" width="38" height="21" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.0721 16.3405C22.0579 14.7262 22.6187 12.8463 22.6086 10.842C22.5984 8.8377 22.0184 6.9637 21.0163 5.35963C22.7502 3.12999 25.5205 1.6794 28.6489 1.66332C33.9316 1.63617 38.2348 5.70958 38.2605 10.7616C38.2862 15.8136 34.0247 19.931 28.7419 19.9581C25.6135 19.9742 22.8286 18.5522 21.0721 16.3405ZM19.9648 3.94735C17.8791 1.57354 14.7458 0.0715775 11.2494 0.0895485C5.00624 0.121637 -0.0302171 4.98771 0.000136483 10.9582C0.0304905 16.9288 5.11616 21.7428 11.3593 21.7107C14.8557 21.6927 17.9736 20.1587 20.035 17.7636C22.1207 20.1374 25.2541 21.6393 28.7504 21.6213C34.9936 21.5892 40.03 16.7232 39.9996 10.7526C39.9693 4.78211 34.8837 -0.0319305 28.6405 0.000159504C25.1442 0.0181295 22.0262 1.55222 19.9648 3.94735Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="footer-location-text">
              ZIRAKPUR, PUNJAB • CHANDIGARH, INDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
