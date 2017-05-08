$(function() {
	var carouselList = $('#carousel ul');

	function changeSlide() {
		carouselList.animate({'marginLeft':-525}, 400, moveFirstSlide); //dlaczego to działa bez '$(carouselList)'? //
	}
	setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd.*/
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	$('#nextSlide').on('click', changeSlide);

	$('#previousSlide').click(function() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-525});
		carouselList.animate({'marginLeft':0}, 400);
	})
});