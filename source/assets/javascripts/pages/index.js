export default () => {
  $('#projects-carousel').carousel({
    interval: false,
    wrap: false,
    pause: false
  });

  var checkitem = function() {
    var $this;
    $this = $("#projects-carousel");
    if ($("#projects-carousel .carousel-inner .carousel-item:first").hasClass("active")) {
      $this.children(".left").hide();
      $this.children(".right").show();
    } else if ($("#projects-carousel .carousel-inner .carousel-item:last").hasClass("active")) {
      $this.children(".right").hide();
      $this.children(".left").show();
    } else {
      $this.children(".right").show();
      $this.children(".left").show();
    }
  };

  checkitem();

  $("#projects-carousel").on("slid.bs.carousel", "", checkitem);
};
