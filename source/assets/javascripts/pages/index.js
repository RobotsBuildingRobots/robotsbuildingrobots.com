export default () => {
  $('#projects-carousel').carousel({
    interval: false,
    wrap: false,
    pause: false,
  });

  const carouselNavigation = function () {
    const $projectsCarousel = $('#projects-carousel');

    if ($('#projects-carousel .carousel-inner .carousel-item:first').hasClass('active')) {
      $projectsCarousel.children('.left').hide();
      $projectsCarousel.children('.right').show();
    } else if ($('#projects-carousel .carousel-inner .carousel-item:last').hasClass('active')) {
      $projectsCarousel.children('.right').hide();
      $projectsCarousel.children('.left').show();
    } else {
      $projectsCarousel.children('.right').show();
      $projectsCarousel.children('.left').show();
    }
  };

  carouselNavigation();

  $('#projects-carousel').on('slid.bs.carousel', '', carouselNavigation);
};
