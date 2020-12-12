import breakpoints from './vendor/breakpoints';
import navigation from './components/navigation';
import index from './pages/index';

const hidePreloader = () => {
  $('#preloader').fadeOut(1000, () => {
    $('#cover').remove();
  });
};

const resizeContent = () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
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

  resizeContent();
});

window.addEventListener("load", function(){
  hidePreloader();
}, false);

window.addEventListener('resize', () => {
  resizeContent();
});
