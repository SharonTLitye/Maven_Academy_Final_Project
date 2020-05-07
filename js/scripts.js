//<!--- Start Navigation -->

//<!--- End Navigation -->


//<!--- Typewriter-Landing Page Section -->

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('User interface disi')
	.pauseFor(1000)
	.deleteChars(3)
	.typeString('esign')
	.pauseFor(2500)
	.deleteAll()
	.typeString('User experience')
	.pauseFor(2500)
	.deleteAll()
	.typeString('Web development')
    .pauseFor(2500)
	.deleteAll()
	.typeString('User interface design')
    .pauseFor(2500)
	.deleteAll()
	.typeString('Mobile development')
    .pauseFor(2500)
	.deleteAll()
	.typeString('Software development')
    .pauseFor(2500)
    
    .start();
//<!--- End Landing Page Section -->









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
