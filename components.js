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
                            <a href="${base}service.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'service.html' ? 'active' : ''}">
                                <span>Service</span>
                                <span>+</span>
                            </a>
                        </li>
                        <li class="list-group-item p-0">
                            <a href="${base}my-work.html" class="menu-nav-link d-flex justify-content-between align-items-center w-100 ${currentPath === 'my-work.html' || currentPath === 'work.html' || currentPath === 'pages.html' ? 'active' : ''}">
                                <span>My Work & Mockups</span>
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
            'my-work': { title: 'MY WORK & MOCKUPS', label: 'My Work', index: '003' },
            'pages': { title: 'MY WORK & MOCKUPS', label: 'My Work', index: '003' },
            'work': { title: 'MY WORK & MOCKUPS', label: 'My Work', index: '003' },
            'contact': { title: 'CONTACT ME', label: 'Contact', index: '004' }
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
            <footer class="bg-black text-white py-5 px-4 mt-5">
                <div class="container-fluid">
                    <div class="row pt-4">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="position-relative" style="max-width: 400px;">
                                <input type="email" class="form-control bg-dark border-0 text-white p-3 rounded-pill"
                                    placeholder="Enter your email" style="padding-right: 50px;">
                                <button class="btn position-absolute end-0 top-50 translate-middle-y me-2 text-white border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-send-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.001.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                    </svg>
                                </button>
                            </div>
                            <p class="small text-secondary mt-3 mb-0">
                                By subscribing you agree with our <a href="#"
                                    class="text-white text-decoration-underline">Privacy Policy</a>
                            </p>
                        </div>

                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-4">
                                    <h6 class="text-secondary small text-uppercase mb-4">Services</h6>
                                    <ul class="list-unstyled footer-link-list">
                                        <li><a href="${base}service.html">Web Development</a></li>
                                        <li><a href="${base}service.html">UI/UX Design</a></li>
                                        <li><a href="${base}service.html">WordPress Customization</a></li>
                                        <li><a href="${base}service.html">Web Performance & Optimization</a></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h6 class="text-secondary small text-uppercase mb-4">Social</h6>
                                    <ul class="list-unstyled footer-link-list">
                                        <li><a href="https://www.linkedin.com/in/lakhvinder-singh-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">WhatsApp</a></li>
                                        <li><a href="#">Instagram</a></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h6 class="text-secondary small text-uppercase mb-4">Contact Info</h6>
                                    <ul class="list-unstyled footer-link-list">
                                        <li>Zirakpur, Punjanb (current)</li>
                                        <li>Ambala Cantt, HR (from) </li>
                                        <li>+91 798-837-9885</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5 pt-5 border-top border-secondary align-items-center">
                        <div class="col-12">
                            <p class="small text-secondary m-0">
                                © 2026 <span class="text-white fw-bold">Lakhvinder Singh Portfolio</span>. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
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
