//<!--- Start Navigation -->
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
//<!--- End Navigation -->

//<!--- Typewriter-Landing Page Section -->

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
	loop: true,
});

typewriter
	.typeString("User interface disi")
	.pauseFor(1000)
	.deleteChars(3)
	.typeString("esign")
	.pauseFor(2500)
	.deleteAll()
	.typeString("User experience")
	.pauseFor(2500)
	.deleteAll()
	.typeString("Web development")
	.pauseFor(2500)
	.deleteAll()
	.typeString("User interface design")
	.pauseFor(2500)
	.deleteAll()
	.typeString("Mobile development")
	.pauseFor(2500)
	.deleteAll()
	.typeString("Software development")
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

// <!--- Start Cart Section -->
let carts = document.querySelectorAll('.add-to-enquiry');

let products = [
	{
		name: 'Full Stack Web Developer',
		tag: 'fullstackwebdeveloper',
		price: 26000,
		inCart: 0
	},
	{
		name: 'Front End Web Developer',
		tag: 'frontendwebdeveloper',
		price: 26000,
		inCart: 0
	},
	{
		name: 'Java Spring Boot Developer',
		tag: 'javaspringbootdeveloper',
		price: 26000,
		inCart: 0
	}]


for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
	})
}

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');

	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}

}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}	

	seItems(product);
}

function setItems(product){
	
}


onLoadCartNumbers();
// <!--- End Cart Section -->
