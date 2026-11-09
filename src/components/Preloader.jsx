import React, { useState, useEffect } from 'react';
import cloverImg from '../assets/clover.png';

/**
 * Preloader Component
 * Displays brand logo "LAKHVINDER SINGH®" with a sleek neon lime progress bar
 * filling smoothly from left to right on initial page entry and page changes.
 */
export default function Preloader({ isActive, onFinish }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    if (isActive) {
      setIsRendered(true);
      setIsExiting(false);

      // Duration for progress line to fill (850ms) + brief hold (100ms)
      const fillTimer = setTimeout(() => {
        setIsExiting(true);
      }, 950);

      // Duration for fade out transition (350ms)
      const completeTimer = setTimeout(() => {
        setIsRendered(false);
        if (onFinish) onFinish();
      }, 1300);

      return () => {
        clearTimeout(fillTimer);
        clearTimeout(completeTimer);
      };
    } else {
      setIsExiting(true);
      const hideTimer = setTimeout(() => {
        setIsRendered(false);
      }, 350);
      return () => clearTimeout(hideTimer);
    }
  }, [isActive, onFinish]);

  if (!isRendered) return null;

  return (
    <div
      className={`preloader-wrap ${isExiting ? 'is-exit' : ''}`}
      aria-label="Loading page"
      role="status"
    >
      <div className="preloader-content">
        <h1 className="preloader-logo">
          LAKHVINDER SINGH
          <img src={cloverImg} alt="Clover" className="preloader-brand-clover" />
        </h1>

        <div className="preloader-bar-wrap">
          <div className="preloader-bar" />
        </div>
      </div>
    </div>
  );
}
