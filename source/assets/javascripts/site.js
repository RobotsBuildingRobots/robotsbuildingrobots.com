import breakpoints from './vendor/breakpoints';
import navigation from './components/navigation';
import index from './pages/index';
import contact from './pages/contact';
import engagements from './pages/engagements';

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
    case 'contact':
      contact();
      break;
    case 'engagements':
      engagements();
      break;
    default:
      break;
  }
});

$(window).on('load', () => {
  hidePreloader();
});
