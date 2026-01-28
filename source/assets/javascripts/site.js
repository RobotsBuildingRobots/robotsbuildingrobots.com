// =============================================================================
// RobotsBuildingRobots - Site JavaScript
// =============================================================================

// =============================================================================
// PAGE LOADER
// =============================================================================

function initPageLoader() {
  const loader = document.querySelector('[data-loader]');
  if (!loader) return;

  // Wait for page load, then hide loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
    }, 2000); // Show loader for at least 2 seconds
  });

  // Fallback: hide loader after 5 seconds max
  setTimeout(() => {
    if (loader && !loader.classList.contains('loaded')) {
      loader.classList.add('loaded');
    }
  }, 5000);
}

// =============================================================================
// SCROLL ANIMATIONS
// =============================================================================

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
}

// =============================================================================
// FLOATING NAVIGATION
// =============================================================================

function initFloatingNav() {
  const nav = document.querySelector('[data-floating-nav]');
  if (!nav) return;

  const progressBar = nav.querySelector('.scroll-progress-bar');
  const navDots = nav.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('section[id]');

  // Update scroll progress
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  }

  // Update active nav dot
  function updateActiveSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navDots.forEach((dot) => {
          dot.classList.remove('active');
          if (dot.getAttribute('data-section') === sectionId) {
            dot.classList.add('active');
          }
        });
      }
    });
  }

  // Throttled scroll handler
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScrollProgress();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial state
  updateScrollProgress();
  updateActiveSection();
}

// =============================================================================
// BACK TO TOP BUTTON
// =============================================================================

function initBackToTop() {
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;

  // Show/hide button based on scroll position
  function toggleButton() {
    if (window.scrollY > 500) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  }

  // Scroll to top on click
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Throttled scroll handler
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleButton();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial state
  toggleButton();
}

// =============================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================================================

function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
}

// =============================================================================
// TEXT SCRAMBLE EFFECT
// =============================================================================

function scrambleText(el, finalText) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
  let iteration = 0;
  const maxIterations = finalText.length;
  const targetEl = el;

  const interval = setInterval(() => {
    targetEl.textContent = finalText
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return finalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    iteration += 1 / 3;

    if (iteration >= maxIterations) {
      clearInterval(interval);
      targetEl.textContent = finalText;
    }
  }, 30);
}

function initTextScramble() {
  document.querySelectorAll('[data-scramble]').forEach((el) => {
    const text = el.textContent;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleText(el, text);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
  });
}

// =============================================================================
// INITIALIZE ALL COMPONENTS
// =============================================================================

$(document).ready(() => {
  initPageLoader();
  initScrollAnimations();
  initFloatingNav();
  initBackToTop();
  initSmoothScroll();
  initTextScramble();
});
