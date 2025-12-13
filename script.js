// ---------- Preloader (hide on load + fallback) ----------
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
});
// Fallback: if something blocks load, hide after 4s
setTimeout(() => {
  const preloader = document.querySelector('.preloader');
  if (preloader && getComputedStyle(preloader).display !== 'none') {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
}, 4000);

// ---------- DOMContentLoaded initializations ----------
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const themeToggle = document.getElementById('themeToggle');
  const backToTop = document.querySelector('.back-to-top');

  // Restore theme from localStorage
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = themeToggle?.querySelector('i');
    if (icon) {
      if (savedTheme === 'light') icon.classList.replace('fa-moon', 'fa-sun');
      else icon.classList.replace('fa-sun', 'fa-moon');
    }
  }

  // Mobile Menu Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      const icon = themeToggle.querySelector('i');
      if (icon) {
        if (next === 'light') icon.classList.replace('fa-moon', 'fa-sun');
        else icon.classList.replace('fa-sun', 'fa-moon');
      }
    });
  }

  // Smooth scrolling for page anchors (offset for fixed header)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 80; // matches CSS header height/padding
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Back to top show/hide
  window.addEventListener('scroll', () => {
    if (!backToTop) return;
    if (window.pageYOffset > 300) backToTop.style.display = 'flex';
    else backToTop.style.display = 'none';
  });
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Note: Contact form is handled by Firebase in index.html
  // No need for a separate handler here

  // Newsletter form - can be connected to email service or Firebase
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: Connect to email service or Firebase
      const email = newsletterForm.querySelector('input[type="email"]').value;
      console.log('Newsletter subscription:', email);
      newsletterForm.reset();
    });
  }

  // Portfolio Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          // add visible class after display to animate
          setTimeout(() => item.classList.add('visible'), 20);
        } else {
          item.classList.remove('visible');
          setTimeout(() => item.style.display = 'none', 250);
        }
      });
    });
  });

  // Start with animateOnScroll run to show elements in viewport
  animateOnScroll();
});

// ---------- Typewriter Effect ----------
const typewriterElement = document.getElementById('typewriter');
const phrases = [
  "Web Developer",
  "UI/UX Designer",
  "Creative Thinker",
  "Problem Solver"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typewriterElement) return;
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
}
// start typewriter after brief delay
setTimeout(typeWriter, 800);

// ---------- Swiper (testimonials) ----------
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonial-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: { slidesPerView: 2 }
      }
    });
  }
});

// ---------- Scroll reveal / animate on scroll ----------
function animateOnScroll() {
  const elements = document.querySelectorAll('.about-image, .about-content, .service-card, .portfolio-item, .testimonial-card, .contact-info, .contact-form');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
