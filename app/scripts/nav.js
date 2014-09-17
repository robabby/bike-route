(function(w, $) {
	var $navToggle = $('.nav-toggle'),
			$drawer = $('#drawer'),
			$pageWrap = $('#page-wrap'),
			$header = $('.header')
			drawerOpen = false;

	$navToggle.on('click', animatePage);

	function animatePage() {
		if(!drawerOpen) {
			drawerOpen = true;

			$navToggle.addClass('open');
			$drawer.addClass('open');
			$header.addClass('open');
			$pageWrap.addClass('open');

		} else {
			drawerOpen = false;

			$navToggle.removeClass('open');
			$drawer.removeClass('open');
			$header.removeClass('open');
			$pageWrap.removeClass('open');
		}
	}
})(window, window.jQuery);
