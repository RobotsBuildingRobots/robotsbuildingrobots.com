import breakpoints from './vendor/breakpoints';
import navigation from './components/navigation';

const hidePreloader = () => {
  $('#preloader').fadeOut(1000, () => {
    $('#cover').remove();
  });
};

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();
  navigation();

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
