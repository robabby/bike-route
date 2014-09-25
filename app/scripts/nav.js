(function(w, $) {
	'use strict';

	var $navToggle = $('.nav-toggle'),
			$drawer = $('#drawer'),
			$pageWrap = $('#page-wrap'),
			$header = $('.header'),
			drawerOpen = false;

	/* This function handles the action of
		animating out the navigation drawer panel */
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

	$navToggle.on('click', animatePage);

})(window, window.jQuery);
