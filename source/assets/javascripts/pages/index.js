export default () => {
  const $sectionCallToAction = $('.section-call-to-action');
  const $iOS = navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;

	if ($iOS) {
    $sectionCallToAction.addClass('section-call-to-action-ios')
	}
};
