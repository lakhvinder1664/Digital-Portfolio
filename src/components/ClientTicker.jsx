import React from 'react';

export default function ClientTicker() {
  return (
    <div className="client-ticker-section" aria-label="Clients and Partners Marquee">
      <div className="client-ticker-track">
        {/* Track Group 1 */}
        <div className="client-ticker-group">
          <div className="ticker-logo logo-spiral">
            <svg viewBox="0 0 52 44" fill="none" width="52" height="44">
              <rect x="2" y="2" width="48" height="40" rx="10" stroke="currentColor" strokeWidth="3" />
              <rect x="10" y="10" width="32" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
              <path d="M18 22H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="ticker-logo logo-loqo">
            <span className="logo-loqo-text">LOQO<sup>&reg;</sup></span>
          </div>

          <div className="ticker-logo logo-infinity">
            <svg viewBox="0 0 68 30" fill="none" width="68" height="30">
              <path
                d="M20 5C12 5 6 10 6 15C6 20 12 25 20 25C28 25 32 17 34 15C36 13 40 5 48 5C56 5 62 10 62 15C62 20 56 25 48 25C40 25 36 17 34 15C32 13 28 5 20 5Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="ticker-logo logo-ipsum-dots">
            <div className="logoipsum-wrap">
              <div className="ipsum-dots">
                <span className="dot dot-1" />
                <span className="dot dot-2" />
                <span className="dot dot-3" />
              </div>
              <span className="logoipsum-text">logoipsum<sup>&reg;</sup></span>
            </div>
          </div>

          <div className="ticker-logo logo-090">
            <span className="logo-090-text">09.0</span>
          </div>

          <div className="ticker-logo logo-ipsum-bold">
            <span className="logo-ipsum-text">IPSUM<sup>&reg;</sup></span>
          </div>
        </div>

        {/* Track Group 2 (Duplicate for Seamless Infinite Loop) */}
        <div className="client-ticker-group" aria-hidden="true">
          <div className="ticker-logo logo-spiral">
            <svg viewBox="0 0 52 44" fill="none" width="52" height="44">
              <rect x="2" y="2" width="48" height="40" rx="10" stroke="currentColor" strokeWidth="3" />
              <rect x="10" y="10" width="32" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
              <path d="M18 22H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="ticker-logo logo-loqo">
            <span className="logo-loqo-text">LOQO<sup>&reg;</sup></span>
          </div>

          <div className="ticker-logo logo-infinity">
            <svg viewBox="0 0 68 30" fill="none" width="68" height="30">
              <path
                d="M20 5C12 5 6 10 6 15C6 20 12 25 20 25C28 25 32 17 34 15C36 13 40 5 48 5C56 5 62 10 62 15C62 20 56 25 48 25C40 25 36 17 34 15C32 13 28 5 20 5Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="ticker-logo logo-ipsum-dots">
            <div className="logoipsum-wrap">
              <div className="ipsum-dots">
                <span className="dot dot-1" />
                <span className="dot dot-2" />
                <span className="dot dot-3" />
              </div>
              <span className="logoipsum-text">logoipsum<sup>&reg;</sup></span>
            </div>
          </div>

          <div className="ticker-logo logo-090">
            <span className="logo-090-text">09.0</span>
          </div>

          <div className="ticker-logo logo-ipsum-bold">
            <span className="logo-ipsum-text">IPSUM<sup>&reg;</sup></span>
          </div>
        </div>
      </div>
    </div>
  );
}
