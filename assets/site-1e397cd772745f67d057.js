(self.webpackChunk = self.webpackChunk || []).push([ [ 378 ], {
  /***/ 7431: 
  /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    function initTextScramble() {
      document.querySelectorAll("[data-scramble]").forEach((function(el) {
        var text = el.textContent, observer = new IntersectionObserver((function(entries) {
          entries.forEach((function(entry) {
            entry.isIntersecting && (!
            // =============================================================================
            // TEXT SCRAMBLE EFFECT
            // =============================================================================
            function scrambleText(el, finalText) {
              var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%", iteration = 0, maxIterations = finalText.length, targetEl = el, interval = setInterval((function() {
                targetEl.textContent = finalText.split("").map((function(char, index) {
                  return index < iteration ? finalText[index] : chars[Math.floor(40 * Math.random())];
                })).join(""), (iteration += 1 / 3) >= maxIterations && (clearInterval(interval), 
                targetEl.textContent = finalText);
              }), 30);
            }(el, text), observer.unobserve(el));
          }));
        }), {
          threshold: .5
        });
        observer.observe(el);
      }));
    }
    // =============================================================================
    // INITIALIZE ALL COMPONENTS
    // =============================================================================
        __webpack_require__(2726)(document).ready((function() {
      !
      // =============================================================================
      // RobotsBuildingRobots - Site JavaScript
      // =============================================================================
      // =============================================================================
      // PAGE LOADER
      // =============================================================================
      function initPageLoader() {
        var loader = document.querySelector("[data-loader]");
        loader && (
        // Wait for page load, then hide loader
        window.addEventListener("load", (function() {
          setTimeout((function() {
            loader.classList.add("loaded");
          }), 2e3);
 // Show loader for at least 2 seconds
                })), 
        // Fallback: hide loader after 5 seconds max
        setTimeout((function() {
          loader && !loader.classList.contains("loaded") && loader.classList.add("loaded");
        }), 5e3));
      }
      // =============================================================================
      // SCROLL ANIMATIONS
      // =============================================================================
      (), function initScrollAnimations() {
        var animatedElements = document.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale");
        if (animatedElements.length) {
          var observer = new IntersectionObserver((function(entries) {
            entries.forEach((function(entry) {
              entry.isIntersecting && (entry.target.classList.add("in-view"), observer.unobserve(entry.target));
            }));
          }), {
            threshold: .1,
            rootMargin: "0px 0px -50px 0px"
          });
          animatedElements.forEach((function(el) {
            return observer.observe(el);
          }));
        }
      }
      // =============================================================================
      // FLOATING NAVIGATION
      // =============================================================================
      (), function initFloatingNav() {
        var nav = document.querySelector("[data-floating-nav]");
        if (nav) {
          var progressBar = nav.querySelector(".scroll-progress-bar"), navDots = nav.querySelectorAll(".nav-dot"), sections = document.querySelectorAll("section[id]"), ticking = !1;
          window.addEventListener("scroll", (function() {
            ticking || (window.requestAnimationFrame((function() {
              updateScrollProgress(), updateActiveSection(), ticking = !1;
            })), ticking = !0);
          })), 
          // Initial state
          updateScrollProgress(), updateActiveSection();
        }
        // Update scroll progress
        function updateScrollProgress() {
          var scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
          progressBar && (progressBar.style.width = "".concat(scrollPercent, "%"));
        }
        // Update active nav dot
                function updateActiveSection() {
          var scrollPosition = window.scrollY + window.innerHeight / 3, scrollTop = window.scrollY, docHeight = document.documentElement.scrollHeight;
          // If near bottom, always highlight the last section (contact)
          if (scrollTop + window.innerHeight >= docHeight - 100) {
            var lastSection = sections[sections.length - 1];
            if (lastSection) {
              var lastSectionId = lastSection.getAttribute("id");
              navDots.forEach((function(dot) {
                dot.classList.remove("active"), dot.getAttribute("data-section") === lastSectionId && dot.classList.add("active");
              }));
            }
          }
          // Otherwise, use normal section detection
           else sections.forEach((function(section) {
            var sectionTop = section.offsetTop, sectionHeight = section.offsetHeight, sectionId = section.getAttribute("id");
            scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && navDots.forEach((function(dot) {
              dot.classList.remove("active"), dot.getAttribute("data-section") === sectionId && dot.classList.add("active");
            }));
          }));
        }
        // Throttled scroll handler
            }
      // =============================================================================
      // BACK TO TOP BUTTON
      // =============================================================================
      (), function initBackToTop() {
        var button = document.querySelector("[data-back-to-top]");
        if (button) {
          // Scroll to top on click
          button.addEventListener("click", (function() {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }));
          // Throttled scroll handler
          var ticking = !1;
          window.addEventListener("scroll", (function() {
            ticking || (window.requestAnimationFrame((function() {
              toggleButton(), ticking = !1;
            })), ticking = !0);
          })), 
          // Initial state
          toggleButton();
        }
        // Show/hide button based on scroll position
                function toggleButton() {
          window.scrollY > 500 ? button.classList.add("visible") : button.classList.remove("visible");
        }
      }
      // =============================================================================
      // SMOOTH SCROLL FOR ANCHOR LINKS
      // =============================================================================
      (), function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((function(link) {
          link.addEventListener("click", (function(e) {
            var href = link.getAttribute("href");
            if ("#" !== href) {
              var target = document.querySelector(href);
              if (target) {
                e.preventDefault();
                var offsetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }
          }));
        }));
      }(), initTextScramble();
    }));
  },
  /***/ 1597: 
  /***/ function(module) {
    module.exports = "/assets/site-e1a958da637f4906421de00253cf8236.css";
    /***/  }
}, 
/******/ function(__webpack_require__) {
  // webpackRuntimeModules
  /******/ var __webpack_exec__ = function(moduleId) {
    return __webpack_require__(__webpack_require__.s = moduleId);
  }
  /******/;
  __webpack_exec__(1597), __webpack_exec__(7431);
} ]);
//# sourceMappingURL=site-1e397cd772745f67d057.js.map