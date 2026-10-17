/**
 * Reusable Header & Footer Components
 * Lakhvinder Singh Portfolio
 * 
 * Usage in any page:
 *   1. Add <header id="site-header"></header> at top of page / main-wrapper
 *   2. Add <footer id="site-footer"></footer> at bottom
 *   3. Include <script src="components.js"></script>
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
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="${base}index.html" class="text-decoration-none text-reset w-100 d-flex justify-content-between align-items-center">Home</a>
                        </li>
                        <li class="list-group-item">
                            <a href="${base}about.html" class="text-decoration-none text-reset d-block">About Us</a>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="${base}service.html" class="text-decoration-none text-reset w-100 d-flex justify-content-between align-items-center">Service <span>+</span></a>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="${base}pages.html" class="text-decoration-none text-reset w-100 d-flex justify-content-between align-items-center">Pages <span>+</span></a>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="${base}blog.html" class="text-decoration-none text-reset w-100 d-flex justify-content-between align-items-center">Blog <span>+</span></a>
                        </li>
                        <li class="list-group-item">
                            <a href="${base}contact.html" class="text-decoration-none text-reset d-block">Contact</a>
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

    function init() {
        renderHeader();
        renderFooter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
