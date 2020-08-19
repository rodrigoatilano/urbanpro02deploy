// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
$( document ).ready( function() {
	// $("body").addClass("parallax-demo");
	$(".parallax").parallax();
	$(".sidenav").sidenav();

	AOS.init({
		duration: 800,
		once: true
	});


	// if (localStorage.getItem("up02nav")) {
	// 	var destination = $("#" + localStorage.getItem("up02nav")).offset().top;
	// 	$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 60}, 500);
	// 	localStorage.removeItem("up02nav");
	// }

	// $(".navMenu a:not(.sidenav-trigger)").click(function(e) {
	// 	e.preventDefault();
	// 	var elementClicked = $(this).attr("href").replace(/\//g, ''),
	// 		pathname = document.location.pathname;

	// 	if (elementClicked == '') window.location.href = "/";
	// 	else if (elementClicked == 'servicios') window.location.href = "/" + elementClicked + "/";
	// 	else if (pathname == '/') {
	// 		var destination = $("#" + elementClicked).offset().top;
	// 		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 60}, 500);
	// 		if ($('.sidenav').is(":visible")) $('.sidenav').sidenav('close');

	// 	} else if (pathname != '/') {
	// 		localStorage.setItem("up02nav", elementClicked);
	// 		window.location.href = "/";
	// 	}
	// });

	if ($(".bannerCols").length) equalHeights({container: 'bannerCols', column: 'col'});
});
// ----------------------------------------------------------------------------
// App
// ----------------------------------------------------------------------------
function equalHeights(divsData) {
	$('.' + divsData.container).each(function() {
		var highestBox = 0;

		$('.' + divsData.column, this).each(function() {
			if ($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});

		$('.' + divsData.column, this).height(highestBox);
	});
}
// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}
// ----------------------------------------------------------------------------
