import breakpoints from './vendor/breakpoints';
import index from './pages/index';

const hidePreloader = () => {
  $('#preloader').fadeOut(1000, () => {
    $('#cover').remove();
  });
};

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();

  switch ($bodyId) {
    case 'index':
      index();
      break;
    default:
      break;
  }
});

$(window).on('load', () => {
  hidePreloader();
});
