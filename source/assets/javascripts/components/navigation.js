export default () => {
  const $navbarToggler = $('.navbar-toggler');

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
};
