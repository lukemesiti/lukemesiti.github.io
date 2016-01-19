document.addEventListener("DOMContentLoaded", function() {

	var hamburger = document.querySelector('.hamburger');
	var overlay = document.querySelector('.overlay');

	setInterval(function() {
    if (window.scrollY > 150) {
			hamburger.classList.add('drop-hamburger');
		} else {
			hamburger.classList.remove('drop-hamburger');
		}
	}, 500);

	hamburger.addEventListener('click', function(){
		this.classList.remove('hamburger-hover');
		this.classList.toggle('open');
		overlay.classList.toggle('open');
	}, false);

	hamburger.addEventListener('mouseenter', function() {
		this.classList.add('hamburger-hover');
	}, false);

	hamburger.addEventListener('mouseleave', function() {
		this.classList.remove('hamburger-hover');
	}, false);

	overlay.addEventListener('click', function(event) {
	    this.classList.toggle('open');
			hamburger.classList.toggle('open');
	}, false);

});
