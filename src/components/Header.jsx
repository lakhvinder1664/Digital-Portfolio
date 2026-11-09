import React, { useState, useEffect } from 'react';
import cloverImg from '../assets/clover.png';

const MENU_ITEMS = [
  { id: '01', label: 'HOME', href: '#home', page: 'home' },
  { id: '02', label: 'SERVICES', href: '#services', page: 'services' },
  { id: '03', label: 'PROJECTS', href: '#projects', page: 'projects' },
  { id: '04', label: 'CONTACT', href: '#contact', page: 'contact' },
];

export default function Header({ currentPage = 'home', onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const getInitialActiveItem = () => {
    if (currentPage === 'services') return '02';
    if (currentPage === 'projects') return '03';
    if (currentPage === 'contact') return '04';
    return '01';
  };
  const [activeItem, setActiveItem] = useState(getInitialActiveItem());
  const [currentTime, setCurrentTime] = useState('10:52 PM');

  // Keep activeItem in sync with currentPage
  useEffect(() => {
    if (currentPage === 'services') setActiveItem('02');
    else if (currentPage === 'projects') setActiveItem('03');
    else if (currentPage === 'contact') setActiveItem('04');
    else setActiveItem('01');
  }, [currentPage]);

  // Live Chandigarh, India Time Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const ist = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setCurrentTime(ist);
      } catch (err) {
        const local = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setCurrentTime(local);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when fullscreen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projects');
    }
  };

  const handleStartProjectClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handleMenuItemClick = (item, e) => {
    e.preventDefault();
    setActiveItem(item.id);
    setMenuOpen(false);

    if (item.id === '01') {
      if (onNavigate) onNavigate('home');
    } else if (item.id === '02') {
      if (onNavigate) onNavigate('services');
    } else if (item.id === '03') {
      if (onNavigate) onNavigate('projects');
    } else if (item.id === '04') {
      if (onNavigate) onNavigate('contact');
    }
  };

  return (
    <>
      {/* Main Persistent Header Bar */}
      <header className="portfolio-header">
        <div className="header-inner">
          {/* Left: Brand Name & City Live Time */}
          <div className="header-brand-group">
            <a
              href="#home"
              className="header-brand-link"
              onClick={handleBrandClick}
            >
              LAKHVINDER SINGH
              <img src={cloverImg} alt="Clover" className="header-brand-clover" />
            </a>
            <span className="header-time-pill">
              Chandigarh, India / {currentTime}
            </span>
          </div>

          {/* Right: Quick Links & Menu Trigger Button */}
          <div className="header-actions-group">
            <nav className="header-nav-links d-none d-lg-flex">
              <a
                href="#projects"
                className="header-text-link"
                onClick={handleProjectsClick}
              >
                ( PROJECTS )
              </a>
              <a
                href="#contact"
                className="header-text-link"
                onClick={handleStartProjectClick}
              >
                ( START A PROJECT )
              </a>
            </nav>

            <button
              type="button"
              className="header-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              NAVIGATION MENU
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu (Shows on Click) */}
      <div className={`menu-fullscreen-overlay ${menuOpen ? 'is-open' : ''}`}>
        {/* Top Header Row inside Menu Overlay */}
        <div className="menu-overlay-header">
          <div className="header-brand-group">
            <a
              href="#home"
              className="header-brand-link"
              onClick={handleBrandClick}
            >
              LAKHVINDER SINGH
              <img src={cloverImg} alt="Clover" className="header-brand-clover" />
            </a>
            <span className="header-time-pill">
              Chandigarh, India / {currentTime}
            </span>
          </div>

          <div className="menu-overlay-actions">
            <div className="menu-circle-indicator" aria-hidden="true" />
            <button
              type="button"
              className="menu-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              X CLOSE
            </button>
          </div>
        </div>

        {/* Large Navigation Menu Items */}
        <nav className="menu-overlay-list">
          {MENU_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`menu-row-item ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveItem(item.id)}
                onClick={(e) => handleMenuItemClick(item, e)}
              >
                <div className="menu-row-content">
                  <span className="menu-item-index">[{item.id}]</span>
                  <span className="menu-item-title">{item.label}</span>
                </div>
              </a>
            );
          })}
        </nav>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="menu-overlay-footer">
          <span className="menu-footer-copy">
            &copy;2024 ALL RIGHTS RESERVED
          </span>

          <div className="menu-footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="menu-social-link"
            >
              INSTAGRAM &#8599;
            </a>
            <a
              href="https://github.com/lakhvinder1664"
              target="_blank"
              rel="noreferrer"
              className="menu-social-link"
            >
              GITHUB &#8599;
            </a>
            <a
              href="https://www.linkedin.com/in/lakhvinder-singh-dev/"
              target="_blank"
              rel="noreferrer"
              className="menu-social-link"
            >
              LINKEDIN &#8599;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
