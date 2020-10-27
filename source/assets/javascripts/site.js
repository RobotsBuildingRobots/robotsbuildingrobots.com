const hidePreloader = () => {
  $('#preloader').fadeOut(1000, () => {
    $('#cover').remove();
  });
};

$(window).on('load', () => {
  hidePreloader();
});
