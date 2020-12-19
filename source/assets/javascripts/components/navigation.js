export default () => {
  const $navbarToggler = $('.navbar-toggler');
  const $navLink = $('.nav-link');

  const scrollToHomeAnchor = (anchor) => {
    var anchorTag = $("a[name='"+ anchor +"']");
    var resetUrl = window.location.protocol + "//" + window.location.host + window.location.pathname

    $('.navbar-collapse').collapse('hide');
    $('.navbar-toggler-wrapper').find('svg').removeClass('fa-rotate-90');
    $('html, body').animate({scrollTop: anchorTag.offset().top},'slow');

    window.history.pushState({path:resetUrl},'',resetUrl);
  }

  const redirectToPage = (element, redirection) => {
    if (redirection === true) {
      var url = '/#'+ element;
    } else {
      var url = '/'+ element;
    }

    $(location).attr('href', url);
  }

  Breakpoints.on('xs', {
    enter() {
      $navbarToggler.attr('data-toggle', 'collapse');
      $navbarToggler.on('click', () => {
        if ($('.navbar-toggler-wrapper').find('svg').hasClass('fa-rotate-90')) {
          $('.navbar-toggler-wrapper').find('svg').removeClass('fa-rotate-90');
        } else {
          $('.navbar-toggler-wrapper').find('svg').addClass('fa-rotate-90');
        }
      });
    },
    leave() {
      $navbarToggler.attr('data-toggle', '');
      $navbarToggler.off('click');
    },
  });

  Breakpoints.on('sm md', 'enter', () => {
    $navbarToggler.attr('data-toggle', '');
  });

  $navLink.on('click', (event) => {
    event.preventDefault();

    if ($(event.currentTarget).data('redirection') == true) {
      if ($(event.currentTarget).data('reference') == "home" ) {
        redirectToPage($(event.currentTarget).attr('id'), true);
      } else {
        redirectToPage($(event.currentTarget).attr('id'), false);
      }
    } else {
      scrollToHomeAnchor($(event.currentTarget).attr('id'));
    }
  });

  window.addEventListener("load", function(){
    var sections = ["#services", "#engagements", "#about"];
    var anchor = window.location.hash;

    if (sections.includes(anchor)) {
      scrollToHomeAnchor(anchor.substring(1, anchor.length));
    }
  }, false);
};
