export default () => {
  const $sectionProductsWrapper = $('.section-products-wrapper');
  const $iOS = navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;

  if ($iOS) {
    $sectionProductsWrapper.addClass('section-products-wrapper-ios');
  }
};
