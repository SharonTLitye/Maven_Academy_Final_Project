//<!--- Start Carousel Section -->

$(".client-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	responsiveClass: true,
	autoplay: true,
	autoplaySpeed: 500,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		700: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});

// <!--- End Carousel Section -->

// <!--- Start Testimonials Section Carousel -->
$("#testimonials-carousel").owlCarousel({
	autoplay: true,
	autoplaySpeed: 1000,
	dots: false,
	loop: true,
	nav: true,
	navText: ['<i class="fas fa-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		700: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

// <!--- End Testimonials Section Carousel -->
