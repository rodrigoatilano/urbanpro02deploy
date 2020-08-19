$( document ).ready( function() {
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
	equalHeights({container: 'projectDataCtn', column: 'col'});
	setTimeout(autoplay, 4500);
});
// ----------------------------------------------------------------------------
// PROJECTS
// ----------------------------------------------------------------------------
function autoplay() {
	$('.carousel.carousel-slider').carousel('next');
	setTimeout(autoplay, 4500);
}
// ----------------------------------------------------------------------------