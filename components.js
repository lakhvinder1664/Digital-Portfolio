/**
 * Reusable Header, Footer & Dynamic Breadcrumb Components
 * Lakhvinder Singh Portfolio
 * 
 * Usage in any page:
 *   1. Add <header id="site-header"></header> at top of page / main-wrapper
 *   2. Add <div id="site-breadcrumb"></div> for dynamic inner page banner
 *   3. Add <div id="site-footer"></div> at bottom
 *   4. Include <script src="components.js"></script>
 *
 * Optional breadcrumb custom attributes:
 *   <div id="site-breadcrumb" data-title="CUSTOM TITLE" data-label="Breadcrumb Label" data-index="001"></div>
 *
 * For pages in sub-folders, add data-base="../" to <body data-base="../">
 */

(function () {
    'use strict';

    function getBasePath() {
        return document.body.getAttribute('data-base') || '';
    }

    function renderHeader() {
        const container = document.getElementById('site-header');
        if (!container) return;

        const base = getBasePath();
        const currentPath = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

        container.innerHTML = `
            <nav class="navbar navbar-expand-lg border-top border-dark px-4 mt-3">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="${base}index.html">
                        <img src="${base}img/cat-logo-animate.gif" class="logo-img" alt="logo">
                    </a>
                    <div class="d-none d-md-block text-uppercase small-text text-center mx-auto">
                        I'm Front-end developer building modern,<br>responsive, and clean web interfaces.<br> [Since 2024]
                    </div>
                    <button class="btn border-0 fw-bold text-uppercase" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight">
                        (Browse — Menu)
                    </button>
                </div>
            </nav>

            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasRight">
                <div class="offcanvas-header border-bottom border-secondary p-4">
                    <h5 class="offcanvas-title fw-bold">LAKHVINDER SINGH</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body p-0">
                    <ul class="list-group list-group-flush menu-list">
                        <li class="list-group-item p-0">
                            <a href="${base}index.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="list-group-item p-0">
                            <a href="${base}about.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'about.html' ? 'active' : ''}">
                                <span>About</span>
                            </a>
                        </li>
                        <li class="list-group-item p-0">
                            <a href="${base}service.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'service.html' || currentPath === 'services.html' ? 'active' : ''}">
                                <span>Services</span>
                            </a>
                        </li>
                        <li class="list-group-item p-0">
                            <a href="${base}projects.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'projects.html' || currentPath === 'my-work.html' || currentPath === 'work.html' || currentPath === 'pages.html' ? 'active' : ''}">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li class="list-group-item p-0">
                            <a href="${base}contact.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'contact.html' ? 'active' : ''}">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div class="contact-info p-4 mt-5">
                        <h6>Contact Me</h6>
                        <p class="small text-secondary mb-1">Ambala Cantt, Haryana</p>
                        <p class="small text-secondary mb-1">lakhvinder9567@gmail.com</p>
                        <p class="small text-secondary">798-837-9885</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderBreadcrumb() {
        const container = document.getElementById('site-breadcrumb');
        if (!container) return;

        const base = getBasePath();

        // Extract filename from current location URL
        const filename = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
        const cleanName = filename.replace(/\.html?$/i, '');

        // Predefined configurations matching home page theme
        const pageConfigs = {
            'about': { title: 'ABOUT', label: 'About', index: '001' },
            'service': { title: 'SERVICES', label: 'Service', index: '002' },
            'services': { title: 'SERVICES', label: 'Services', index: '002' },
            'projects': { title: 'PROJECTS', label: 'Projects', index: '003' },
            'my-work': { title: 'PROJECTS', label: 'Projects', index: '003' },
            'pages': { title: 'PROJECTS', label: 'Projects', index: '003' },
            'work': { title: 'PROJECTS', label: 'Projects', index: '003' },
            'contact': { title: 'CONTACT ME', label: 'Contact', index: '004' },
            'admin-login': { title: 'ADMIN LOGIN', label: 'Admin Login', index: '005' },
            'admin-dashboard': { title: 'ADMIN DASHBOARD', label: 'Admin Console', index: '006' }
        };

        const fallbackTitle = cleanName ? cleanName.replace(/[-_]/g, ' ').toUpperCase() : 'PORTFOLIO';
        const fallbackLabel = cleanName ? cleanName.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Page';

        const config = pageConfigs[cleanName] || {
            title: fallbackTitle,
            label: fallbackLabel,
            index: '001'
        };

        const title = container.getAttribute('data-title') || config.title;
        const label = container.getAttribute('data-label') || config.label;
        const index = container.getAttribute('data-index') || config.index;

        container.innerHTML = `
            <section class="inner-breadcrumb-section px-4 pt-4 pb-2">
                <div class="container-fluid p-0">
                    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb m-0 text-uppercase small-text fw-bold">
                                <li class="breadcrumb-item">
                                    <a href="${base}index.html" class="text-decoration-none">Home</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    ${label}
                                </li>
                            </ol>
                        </nav>
                        <div class="d-none d-sm-block text-uppercase small-text text-secondary">
                            [ Lakhvinder Singh — Portfolio ]
                        </div>
                    </div>

                    <div class="d-flex align-items-end justify-content-between flex-wrap gap-3 my-2">
                        <h1 class="inner-page-title mb-0">${title}</h1>
                        <span class="index-badge">(${index})</span>
                    </div>

                    <div class="thick-line w-100 mt-3"></div>
                </div>
            </section>
        `;
    }

    function renderFooter() {
        const container = document.getElementById('site-footer');
        if (!container) return;

        const base = getBasePath();

        container.innerHTML = `
            <footer class="site-main-footer bg-black text-white pt-5 pb-4 px-3 px-md-4 mt-5 border-top border-dark">
                <div class="container-fluid">
                    <div class="row g-4 g-lg-5 pt-2">
                        <!-- Brand & Newsletter Subscription -->
                        <div class="col-lg-5">
                            <div class="mb-4">
                                <span class="d-inline-block text-uppercase fw-bold mb-2" style="color: #65c0f0; font-size: 11px; letter-spacing: 2px;">
                                    [ WEB DEVELOPER &amp; UI DESIGNER ]
                                </span>
                                <h2 class="text-white text-uppercase m-0 mb-3" style="font-family: 'Oswald', sans-serif; font-size: clamp(1.8rem, 3vw, 2.4rem); letter-spacing: 1px;">
                                    LAKHVINDER SINGH
                                </h2>
                                <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6; max-width: 440px;">
                                    Crafting high-impact websites, custom WordPress solutions, and intuitive digital interfaces with clean responsive code.
                                </p>
                            </div>

                            <div class="footer-newsletter-wrap" style="max-width: 420px;">
                                <label for="footerNewsletterEmail" class="text-white small text-uppercase fw-bold mb-2 d-block" style="font-size: 11px; letter-spacing: 1px;">
                                    Subscribe for Project Releases &amp; Updates
                                </label>
                                <form id="footerNewsletterForm" class="position-relative" novalidate>
                                    <input type="email" id="footerNewsletterEmail" class="form-control text-white p-3 rounded-pill"
                                        placeholder="Enter your email..." 
                                        style="padding-right: 55px; background: #1a1a1a; border: 1.5px solid #333; color: #fff; font-size: 14px;" required>
                                    <button type="submit" id="footerNewsletterBtn" class="btn position-absolute end-0 top-50 translate-middle-y me-2 rounded-circle d-flex align-items-center justify-content-center text-dark" 
                                        style="width: 38px; height: 38px; background: #65c0f0; border: none; transition: transform 0.2s ease;" 
                                        title="Subscribe">
                                        <i class="fas fa-arrow-right" style="font-size: 13px;"></i>
                                    </button>
                                </form>
                                <div id="footerNewsletterFeedback" style="display: none; font-size: 13px; font-weight: 600; margin-top: 10px;"></div>
                                <p class="small text-secondary mt-2 mb-0" style="font-size: 12px;">
                                    Direct updates whenever new projects or case studies go live.
                                </p>
                            </div>
                        </div>

                        <!-- Navigation Links -->
                        <div class="col-6 col-sm-4 col-lg-2 offset-lg-1">
                            <h6 class="text-uppercase fw-bold mb-3" style="font-family: 'Oswald', sans-serif; font-size: 1.05rem; letter-spacing: 1.5px; color: #65c0f0;">
                                Navigation
                            </h6>
                            <ul class="list-unstyled m-0">
                                <li class="mb-2"><a href="${base}index.html" class="footer-link">Home</a></li>
                                <li class="mb-2"><a href="${base}about.html" class="footer-link">About Me</a></li>
                                <li class="mb-2"><a href="${base}service.html" class="footer-link">Services</a></li>
                                <li class="mb-2"><a href="${base}projects.html" class="footer-link">Projects</a></li>
                                <li class="mb-2"><a href="${base}contact.html" class="footer-link">Contact</a></li>
                            </ul>
                        </div>

                        <!-- Services Column -->
                        <div class="col-6 col-sm-4 col-lg-2">
                            <h6 class="text-uppercase fw-bold mb-3" style="font-family: 'Oswald', sans-serif; font-size: 1.05rem; letter-spacing: 1.5px; color: #65c0f0;">
                                Services
                            </h6>
                            <ul class="list-unstyled m-0">
                                <li class="mb-2"><a href="${base}service.html" class="footer-link">Web Development</a></li>
                                <li class="mb-2"><a href="${base}service.html" class="footer-link">WordPress Custom</a></li>
                                <li class="mb-2"><a href="${base}service.html" class="footer-link">UI / UX Design</a></li>
                                <li class="mb-2"><a href="${base}service.html" class="footer-link">Website Maintenance</a></li>
                            </ul>
                        </div>

                        <!-- Contact & Social Column -->
                        <div class="col-12 col-sm-4 col-lg-2">
                            <h6 class="text-uppercase fw-bold mb-3" style="font-family: 'Oswald', sans-serif; font-size: 1.05rem; letter-spacing: 1.5px; color: #65c0f0;">
                                Connect
                            </h6>
                            <ul class="list-unstyled m-0">
                                <li class="mb-2">
                                    <a href="tel:+917988379885" class="footer-link d-inline-flex align-items-center gap-2">
                                        <i class="fas fa-phone-alt text-secondary" style="font-size: 11px;"></i> +91 798-837-9885
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a href="mailto:luckysngh08966@gmail.com" class="footer-link d-inline-flex align-items-center gap-2">
                                        <i class="fas fa-envelope text-secondary" style="font-size: 11px;"></i> Email Me ↗
                                    </a>
                                </li>
                                <li class="mb-3 text-secondary" style="font-size: 0.88rem; line-height: 1.4;">
                                    <i class="fas fa-map-marker-alt text-secondary me-1" style="font-size: 11px;"></i> Zirakpur, Punjab • Ambala Cantt, HR
                                </li>
                            </ul>

                            <div class="d-flex align-items-center gap-2 flex-wrap pt-1">
                                <a href="https://www.linkedin.com/in/lakhvinder-singh-dev/" target="_blank" rel="noopener noreferrer" 
                                   class="footer-social-icon" title="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/lakhvinder1664" target="_blank" rel="noopener noreferrer" 
                                   class="footer-social-icon" title="GitHub">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://wa.me/917988379885" target="_blank" rel="noopener noreferrer" 
                                   class="footer-social-icon" title="WhatsApp">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="mt-5 pt-4 border-top border-dark d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <p class="small text-secondary m-0">
                            © 2026 <strong class="text-white">Lakhvinder Singh</strong>. All rights reserved.
                        </p>
                        <div class="d-flex align-items-center gap-3">
                            <span class="small text-secondary d-none d-md-inline">Open for Freelance &amp; Full-time Roles</span>
                            <a href="#site-header" class="footer-back-to-top text-secondary small text-decoration-none">
                                Back to top <i class="fas fa-arrow-up ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        attachFooterNewsletterHandler();
    }

    function attachFooterNewsletterHandler() {
        const form = document.getElementById('footerNewsletterForm');
        if (!form) return;

        const emailInput = document.getElementById('footerNewsletterEmail');
        const submitBtn = document.getElementById('footerNewsletterBtn');
        const feedbackEl = document.getElementById('footerNewsletterFeedback');

        if (!emailInput || !submitBtn || !feedbackEl) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = (emailInput.value || '').trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email || !emailRegex.test(email)) {
                feedbackEl.style.display = 'block';
                feedbackEl.style.color = '#ef4444';
                feedbackEl.innerHTML = '⚠ Please enter a valid email address.';
                return;
            }

            // Loading state
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.6';
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true" style="width: 1rem; height: 1rem; border-width: 2px;"></span>';
            feedbackEl.style.display = 'none';

            try {
                const endpoint = 'https://firestore.googleapis.com/v1/projects/portfolio-contact-fe911/databases/(default)/documents/newsletter';
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fields: {
                            email: { stringValue: email },
                            time: { timestampValue: new Date().toISOString() }
                        }
                    })
                });

                if (!res.ok) {
                    const errData = await res.json().catch(() => ({}));
                    throw new Error(errData?.error?.message || 'Subscription failed');
                }

                // Success
                form.reset();
                feedbackEl.style.display = 'block';
                feedbackEl.style.color = '#65c0f0';
                feedbackEl.innerHTML = '🎉 Thank you! You are now subscribed to project updates.';

                setTimeout(() => {
                    feedbackEl.style.display = 'none';
                }, 7000);

            } catch (err) {
                console.error('Newsletter subscription error:', err);
                feedbackEl.style.display = 'block';
                feedbackEl.style.color = '#ef4444';
                feedbackEl.innerHTML = '⚠ Unable to subscribe right now. Please try again.';
            } finally {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.innerHTML = originalBtnContent;
            }
        });
    }

    function updateHivendsDynamicTenure() {
        const startYear = 2026;
        const startMonth = 1; // February (0-indexed: 0=Jan, 1=Feb)
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        let totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1;
        if (totalMonths < 1) totalMonths = 1;

        let tenureText = '';
        if (totalMonths < 12) {
            tenureText = `${totalMonths} MONTH${totalMonths > 1 ? 'S' : ''}`;
        } else {
            const years = Math.floor(totalMonths / 12);
            const remMonths = totalMonths % 12;
            if (remMonths === 0) {
                tenureText = `${years} YEAR${years > 1 ? 'S' : ''}`;
            } else {
                tenureText = `${years} YR${years > 1 ? 'S' : ''} ${remMonths} MO${remMonths > 1 ? 'S' : ''}`;
            }
        }

        document.querySelectorAll('.hivends-tenure-pill').forEach(el => {
            el.textContent = tenureText;
        });

        document.querySelectorAll('.hivends-modal-tenure').forEach(el => {
            el.textContent = `FEB 2026 — PRESENT • ${tenureText}`;
        });
    }

    function init() {
        renderHeader();
        renderBreadcrumb();
        renderFooter();
        updateHivendsDynamicTenure();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
