(self.webpackChunk = self.webpackChunk || []).push([ [ 378 ], {
  /***/ 4848: 
  /***/ function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
    "use strict";
    // ./source/assets/javascripts/vendor/breakpoints.js
    /* harmony default export */ var $ = __webpack_require__(2726), pages_$ = __webpack_require__(2726), contact_$ = __webpack_require__(2726), site_$ = __webpack_require__(2726), resizeContent = function resizeContent() {
      var vh = .01 * window.innerHeight;
      document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
    };
    site_$(document).ready((function() {
      var $navbarToggler, $navLink, scrollToHomeAnchor, redirectToPage, $bodyId = site_$("body").attr("id");
      switch (Breakpoints({
        xs: {
          min: 0,
          max: 576
        },
        minimium: {
          min: 350,
          max: 576
        },
        transition: {
          min: 450,
          max: 576
        },
        sm: {
          min: 576,
          max: 768
        },
        md: {
          min: 768,
          max: 992
        },
        lg: {
          min: 992,
          max: 1200
        },
        maximum: {
          min: 1e3,
          max: 1200
        },
        xl: {
          min: 1200,
          max: 1800
        },
        xxl: {
          min: 1800,
          max: 2450
        },
        xxxl: {
          min: 2450,
          max: 1 / 0
        }
      }), $navbarToggler = $(".navbar-toggler"), $navLink = $(".nav-link"), scrollToHomeAnchor = function scrollToHomeAnchor(anchor) {
        var anchorTag = $("a[name='".concat(anchor, "']")), resetUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname);
        $(".navbar-collapse").collapse("hide"), $(".navbar-toggler-wrapper").find("svg").removeClass("fa-rotate-90"), 
        $("html, body").animate({
          scrollTop: anchorTag.offset().top
        }, "slow"), window.history.pushState({
          path: resetUrl
        }, "", resetUrl);
      }, redirectToPage = function redirectToPage(element, redirection) {
        !0 === redirection ? $(location).attr("href", "/#".concat(element)) : $(location).attr("href", "/".concat(element));
      }, Breakpoints.on("xs", {
        enter: function enter() {
          $navbarToggler.attr("data-toggle", "collapse"), $navbarToggler.on("click", (function() {
            $(".navbar-toggler-wrapper").find("svg").hasClass("fa-rotate-90") ? $(".navbar-toggler-wrapper").find("svg").removeClass("fa-rotate-90") : $(".navbar-toggler-wrapper").find("svg").addClass("fa-rotate-90");
          }));
        },
        leave: function leave() {
          $navbarToggler.attr("data-toggle", ""), $navbarToggler.off("click");
        }
      }), Breakpoints.on("sm md", "enter", (function() {
        $navbarToggler.attr("data-toggle", "");
      })), $navLink.on("click", (function(event) {
        event.preventDefault(), !0 === $(event.currentTarget).data("redirection") ? "home" === $(event.currentTarget).data("reference") ? redirectToPage($(event.currentTarget).attr("id"), !0) : redirectToPage($(event.currentTarget).attr("id"), !1) : scrollToHomeAnchor($(event.currentTarget).attr("id"));
      })), window.addEventListener("load", (function() {
        var anchor = window.location.hash;
        [ "#services", "#engagements", "#about" ].includes(anchor) && scrollToHomeAnchor(anchor.substring(1, anchor.length));
      }), !1), $bodyId) {
       case "index":
        !function() {
          pages_$("#projects-carousel").carousel({
            interval: !1,
            wrap: !1,
            pause: !1
          });
          var carouselNavigation = function carouselNavigation() {
            var $projectsCarousel = pages_$("#projects-carousel");
            pages_$("#projects-carousel .carousel-inner .carousel-item:first").hasClass("active") ? ($projectsCarousel.children(".left").hide(), 
            $projectsCarousel.children(".right").show()) : pages_$("#projects-carousel .carousel-inner .carousel-item:last").hasClass("active") ? ($projectsCarousel.children(".right").hide(), 
            $projectsCarousel.children(".left").show()) : ($projectsCarousel.children(".right").show(), 
            $projectsCarousel.children(".left").show());
          };
          carouselNavigation(), pages_$("#projects-carousel").on("slid.bs.carousel", "", carouselNavigation);
        }();
        break;

       case "contact":
        contact_$.validator.addMethod("alphanumeric", (function(value, element) {
          // eslint-disable-line func-names
          return this.optional(element) || /^[a-z0-9!?\-\s]+$/i.test(value);
        })), contact_$.validator.setDefaults({
          submitHandler: function submitHandler() {
            var $inputFirstName = contact_$("#input-first-name").val(), $inputLastName = contact_$("#input-last-name").val(), $inputEmail = contact_$("#input-email").val(), $inputEmailBody = contact_$("#input-email-body").val(), $inputSubject = contact_$("#input-subject").val(), $inputBody = "Project Title: ".concat($inputSubject);
            $inputBody = "".concat($inputBody, "\r\nFirst Name: ").concat($inputFirstName), 
            $inputBody = "".concat($inputBody, "\r\nLast Name: ").concat($inputLastName), $inputBody = "".concat($inputBody, "\r\nEmail Address: ").concat($inputEmail), 
            $inputBody = "".concat($inputBody, "\r\n\r\n—————————————————————"), $inputBody = "".concat($inputBody, "\r\n\r\n").concat($inputEmailBody), 
            window.location.href = "mailto:".concat(encodeURIComponent("salesteam@robotsbuildingrobots.com"), "?subject=").concat(encodeURIComponent("Project Request Submission"), "&body=").concat(encodeURIComponent($inputBody));
          }
        }), contact_$("#contact-form").validate({
          rules: {
            "input-first-name": {
              required: !0,
              minlength: 3,
              alphanumeric: !0,
              normalizer: function normalizer(value) {
                return contact_$.trim(value);
              }
            },
            "input-last-name": {
              required: !0,
              minlength: 3,
              alphanumeric: !0,
              normalizer: function normalizer(value) {
                return contact_$.trim(value);
              }
            },
            "input-email": {
              required: !0,
              minlength: 3,
              email: !0,
              normalizer: function normalizer(value) {
                return contact_$.trim(value);
              }
            },
            "input-subject": {
              required: !0,
              minlength: 3,
              alphanumeric: !0,
              normalizer: function normalizer(value) {
                return contact_$.trim(value);
              }
            },
            "input-email-body": {
              required: !0,
              minlength: 3,
              normalizer: function normalizer(value) {
                return contact_$.trim(value);
              }
            }
          },
          messages: {
            "input-first-name": {
              required: "Please provide your first name!",
              minlength: "Three character minimum!",
              alphanumeric: "Only alphabetical, numbers, spaces, and dash characters!"
            },
            "input-last-name": {
              required: "Please provide your last name!",
              minlength: "Three character minimum!",
              alphanumeric: "Only alphabetical, numbers, spaces, and dash characters!"
            },
            "input-email": {
              required: "Please provide your email address!",
              minlength: "Three character minimum!",
              email: "Not a valid email address!"
            },
            "input-subject": {
              required: "Please provide the project title!",
              minlength: "Three character minimum!",
              alphanumeric: "Only alphabetical, numbers, spaces, and dash characters!"
            },
            "input-email-body": {
              required: "Please provide project details!",
              minlength: "Three character minimum!"
            }
          },
          errorElement: "div",
          errorPlacement: function errorPlacement(error, element) {
            error.addClass("invalid-feedback"), error.insertAfter(element);
          }
        });
      }
      resizeContent();
    })), window.addEventListener("load", (function() {
      !function hidePreloader() {
        site_$("#preloader").fadeOut(1e3, (function() {
          site_$("#cover").remove();
        }));
      }();
    }), !1), window.addEventListener("resize", (function() {
      resizeContent();
    }));
  },
  /***/ 1597: 
  /***/ function(module) {
    module.exports = "/assets/site-662ce3b0a3ec89cd0aa2356d3b2c11a9.css";
    /***/  }
}, 
/******/ function(__webpack_require__) {
  // webpackRuntimeModules
  /******/ var __webpack_exec__ = function(moduleId) {
    return __webpack_require__(__webpack_require__.s = moduleId);
  }
  /******/;
  __webpack_exec__(1597), __webpack_exec__(4848);
} ]);
//# sourceMappingURL=site-a173402a9ec1ef782bf3.js.map