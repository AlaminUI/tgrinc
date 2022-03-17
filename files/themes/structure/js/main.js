/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
jQuery(document).ready(function($) {
	"use strict";

	//setup parallax
	$.stellar();

	$("nav#menu").mmenu();
	$(".menu-item-has-children").on("click", function() {
		if ($(".menu-link").hasClass("active")) {
			$(this)
				.find(".sub-menu")
				.toggle();
		}
	});

	// $(".gallery,.single-featured").magnificPopup({
	// 	delegate: "a", // child items selector, by clicking on it popup will open
	// 	type: "image",
	// 	removalDelay: 300,
	// 	mainClass: "mfp-fade",
	// 	gallery: {
	// 		enabled: true
	// 	}
	// });

	// $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
	// 	disableOn: 700,
	// 	type: "iframe",
	// 	mainClass: "mfp-fade",
	// 	removalDelay: 160,
	// 	preloader: false,
	// 	fixedContentPos: false
	// });

	//owl carousel


/* ===================================
shrink navigation
====================================== */
$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
	  $('.logo').addClass('shrink');
  } else {
	  $('.logo').removeClass('shrink');
  }
  });
  

		(function ($) {
			jQuery(window).on('resize', function () {
				if ($(window).width() >= 992) {
					$('#page').css('padding-bottom', $('.uncover .bottom-wrapper').outerHeight());
				}
			});

			jQuery(window).on('load', function () {
				jQuery(window).trigger('resize');
			});
		})(jQuery);



		jQuery(document).ready(function ($) {
			$(".header").headroom({
				offset: 44
			});
		});


		jQuery(document).ready(function ($) {
			var $window = $(window);
			// Scroll up
			var $scrollup = $('.scrollup');

			$window.scroll(function () {
				if ($window.scrollTop() > 100) {
					$scrollup.addClass('show');
				} else {
					$scrollup.removeClass('show');
				}
			});

			$scrollup.on('click', function (evt) {
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				evt.preventDefault();
			});
		});





	$(document).on('load', '#form [data-role="page"][data-num-children]:not([data-num-children="0"])', function () {
		$(this).css("padding","0px")
	})
	


	jQuery("li.product").matchHeight({ byRow: true });
});

