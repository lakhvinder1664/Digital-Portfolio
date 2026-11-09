import React from 'react';

const STACK_DATA = [
  {
    name: 'REACT.JS',
    percentage: '[ 96% ]',
    role: 'FRONT-END FRAMEWORK & SPA',
    description:
      'Component-driven architecture, custom hooks, dynamic state management, React Router, and building high-performance modern web applications.',
    logoType: 'react',
  },
  {
    name: 'JAVASCRIPT (ES6+)',
    percentage: '[ 97% ]',
    role: 'CORE LOGIC & ASYNC APIS',
    description:
      'Deep fluency in modern ES6+, DOM manipulations, async/await, REST API integrations, state workflows, and interactive web mechanics.',
    logoType: 'javascript',
  },
  {
    name: 'HTML5',
    percentage: '[ 99% ]',
    role: 'SEMANTIC WEB STRUCTURE',
    description:
      'Clean semantic markup, SEO best practices, accessibility standards (a11y), responsive layout structuring, and fast-loading web hierarchies.',
    logoType: 'html5',
  },
  {
    name: 'CSS3',
    percentage: '[ 98% ]',
    role: 'MODERN STYLING & ANIMATIONS',
    description:
      'Pixel-perfect styling, CSS Grid, Flexbox, keyframe animations, glassmorphism, responsive media queries, and sleek dark modes.',
    logoType: 'css3',
  },
  {
    name: 'BOOTSTRAP 5',
    percentage: '[ 98% ]',
    role: 'RESPONSIVE UI FRAMEWORK',
    description:
      'Rapid responsive grid prototyping, mobile-first layouts, custom utility-first overrides, and seamless cross-device compatibility.',
    logoType: 'bootstrap',
  },
  {
    name: 'WORDPRESS',
    percentage: '[ 94% ]',
    role: 'CMS & THEME CUSTOMIZATION',
    description:
      'Custom WordPress theme development, product catalogs, live client portals, CMS management, and tailored client solutions.',
    logoType: 'wordpress',
  },
  {
    name: 'FIGMA (UI/UX)',
    percentage: '[ 95% ]',
    role: 'DESIGN SYSTEMS & PROTOTYPING',
    description:
      'Translating Figma wireframes, component design systems, and vector UI assets into pixel-perfect, accessible production interfaces.',
    logoType: 'figma',
  },
  {
    name: 'GSAP ANIMATION',
    percentage: '[ 93% ]',
    role: 'INTERACTIVE CREATIVE MOTION',
    description:
      'High-performance scroll-triggered animations, interactive timelines, magnetic cursors, fluid hover dynamics, and micro-interactions.',
    logoType: 'gsap',
  },
  {
    name: 'GIT & GITHUB',
    percentage: '[ 95% ]',
    role: 'VERSION CONTROL & DEPLOYMENT',
    description:
      'Git branching strategies, commit workflows, pull requests, collaborative code management, and automated Vercel/Netlify deployments.',
    logoType: 'git',
  },
];

export default function SkillsStackSection() {
  return (
    <section className="portfolio-stack-section" id="stack">
      <div className="stack-inner">
        {/* Header Row */}
        <div className="stack-header-row">
          <div className="stack-title-wrap">
            <h2 className="stack-main-heading">CORE TECH STACK</h2>
            <p className="stack-subtitle">
              LANGUAGES, FRAMEWORKS &amp;{' '}
              <span className="stack-sub-underlined">MODERN TOOLS</span>
            </p>
          </div>

          <div className="stack-badge-wrap">
            <span className="stack-dot" />
            <span className="stack-skill-badge">FRONT-END &amp; UI DESIGN</span>
          </div>
        </div>

        {/* Stack List */}
        <div className="stack-list">
          {STACK_DATA.map((item, idx) => (
            <div key={idx} className="stack-row-item">
              {/* Tool Logo */}
              <div className="stack-logo-col">
                {item.logoType === 'react' && (
                  <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="34">
                    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                    <g stroke="#61DAFB" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                )}
                {item.logoType === 'javascript' && (
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <rect width="32" height="32" rx="4" fill="#F7DF1E" />
                    <path
                      d="M18.5 22.2c.4.7 1 1.2 2 1.2.9 0 1.4-.4 1.4-1.8v-8.1h3v8.1c0 2.9-1.7 4.2-4.3 4.2-2.3 0-3.6-1.2-4.3-2.6l2.2-1zm-9 .2c.4.7 1.2 1.2 2.2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.3-1.9-1.8l-.7-.3c-2-.9-3.3-2-3.3-4.3 0-2.1 1.6-3.8 4.1-3.8 1.8 0 3.1.6 4 2.3l-2.2 1.4c-.5-.8-1-1.1-1.8-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.4 1 3.7 2.1 3.7 4.5 0 2.6-2 4-4.5 4-2.5 0-4.1-1.2-4.8-2.7l2.2-1.3z"
                      fill="#000000"
                    />
                  </svg>
                )}
                {item.logoType === 'html5' && (
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <path d="M5 2l2.3 25.5 8.7 2.5 8.7-2.5L27 2H5z" fill="#E34F26" />
                    <path d="M16 4.3v23.4l6.8-1.9 1.8-21.5H16z" fill="#EF652A" />
                    <path d="M16 11.2h-4.8l.3 3.6H16v-3.6zm0 7.2l-.1.1-2.5-.7-.2-2h-3.6l.3 3.9 6 1.7.1-.1v-2.9zm0-10.8V4.3H8.3l1 10.5H16v-3.6h-4.8l-.3-3.3H16zm0 10.8v-3.6h4.8l-.5 5-4.3 1.2v-2.6z" fill="#ECECEC" />
                    <path d="M16 7.6h7.7l-.3 3.6H16V7.6zm0 7.2h4.5l-.4 4.5-4.1 1.1v-2.6l2.2-.6.2-2.4H16v-3.6z" fill="#FFFFFF" />
                  </svg>
                )}
                {item.logoType === 'css3' && (
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <path d="M5 2l2.3 25.5 8.7 2.5 8.7-2.5L27 2H5z" fill="#1572B6" />
                    <path d="M16 4.3v23.4l6.8-1.9 1.8-21.5H16z" fill="#33A9DC" />
                    <path d="M16 11.2h-4.8l.3 3.6H16v-3.6zm0 7.2l-.1.1-2.5-.7-.2-2h-3.6l.3 3.9 6 1.7.1-.1v-2.9zm0-10.8V4.3H8.3l1 10.5H16v-3.6h-4.8l-.3-3.3H16zm0 10.8v-3.6h4.8l-.5 5-4.3 1.2v-2.6z" fill="#ECECEC" />
                    <path d="M16 7.6h7.7l-.3 3.6H16V7.6zm0 7.2h4.5l-.4 4.5-4.1 1.1v-2.6l2.2-.6.2-2.4H16v-3.6z" fill="#FFFFFF" />
                  </svg>
                )}
                {item.logoType === 'bootstrap' && (
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <rect width="32" height="32" rx="7" fill="#7952B3" />
                    <path
                      d="M10.5 7.5h6.2c3 0 4.8 1.5 4.8 3.8 0 1.6-.9 2.8-2.3 3.3 1.8.4 2.8 1.9 2.8 3.7 0 2.6-2 4.2-5.3 4.2h-6.2V7.5zm3.2 2.8v4.2h2.8c1.3 0 2.1-.7 2.1-2.1s-.8-2.1-2.1-2.1h-2.8zm0 6.8v4.6h3.1c1.5 0 2.3-.8 2.3-2.3s-.8-2.3-2.3-2.3h-3.1z"
                      fill="#FFFFFF"
                    />
                  </svg>
                )}
                {item.logoType === 'wordpress' && (
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <circle cx="16" cy="16" r="15" fill="#21759B" />
                    <path
                      d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16c0 2.8.8 5.4 2.3 7.6l7.8-21.3c1.1-.5 2.2-.8 3.4-.8zm9.5 5.9c1 1.9 1.6 4.1 1.6 6.4 0 4.8-2.6 8.9-6.4 11.2l4.8-13.8c.8-2.1.8-3.4 0-3.8zm-8.8 19.9c-.2 0-.4 0-.7 0-3.1 0-5.8-1.2-7.9-3.2L12.5 13l3.7 10.7.5 1.5zm-5.4-16c.4-.7 1.1-1.3 1.9-1.3.1 0 .2 0 .3 0l-4.5 13.1C7.6 22.4 6.7 20 6.7 17.3c0-2.8 1.6-4.5 3.3-4.5.7 0 1.1.2 1.3.5z"
                      fill="#FFFFFF"
                    />
                  </svg>
                )}
                {item.logoType === 'figma' && (
                  <svg viewBox="0 0 38 57" width="26" height="39" fill="none">
                    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE" />
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
                  </svg>
                )}
                {item.logoType === 'gsap' && (
                  <svg viewBox="0 0 36 36" width="32" height="32" fill="none">
                    <circle cx="18" cy="18" r="17" fill="#0E100F" stroke="#0AE448" strokeWidth="1.5" />
                    <path d="M11 18l5-6v4.5h6l-5 7v-4.5h-6z" fill="#0AE448" />
                  </svg>
                )}
                {item.logoType === 'git' && (
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <path
                      d="M30.6 14.1L17.9 1.4c-.6-.6-1.5-.6-2.1 0L12 5.2l3.4 3.4c.7-.2 1.6 0 2.1.6.6.6.8 1.4.6 2.1l3.3 3.3c.7-.2 1.5 0 2.1.6 1 1 1 2.5 0 3.5s-2.5 1-3.5 0c-.8-.8-.9-2-.4-2.9l-3.1-3.1v6.7c.3.2.6.5.7.9.6 1 .4 2.3-.5 3.2-1 1-2.5 1-3.5 0s-1-2.5 0-3.5c.7-.7 1.7-.9 2.5-.6V11.2c-.8.3-1.8.1-2.5-.6-.8-.8-.9-2-.4-2.9L8.7 4.2 1.4 11.5c-.6.6-.6 1.5 0 2.1l12.7 12.7c.6.6 1.5.6 2.1 0l14.4-14.4c.6-.6.6-1.5 0-2.1v.2z"
                      fill="#F05032"
                    />
                  </svg>
                )}
              </div>

              {/* Tool Details */}
              <div className="stack-detail-col">
                <div className="stack-header-line">
                  <h3 className="stack-tool-title">{item.name}</h3>
                  <span className="stack-percent-mobile">{item.percentage}</span>
                </div>
                <h4 className="stack-role-title">{item.role}</h4>
                <p className="stack-desc-text">{item.description}</p>
              </div>

              {/* Percentage (Desktop Right) */}
              <div className="stack-percent-col">
                <span className="stack-percent-text">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
