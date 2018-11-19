$(document).ready(function(){
	$(window).trigger('scroll');
});
$(window).scroll(function() {
	var $el = $('header');
	var offset = $("#story").offset();
	console.log($(this).scrollTop());
	if($(this).scrollTop() < offset.top) $el.addClass('white');
	else $el.removeClass('white');
});
window.onload = function () {
	$("section").each(function () {
		$(this).on("mousewheel DOMMouseScroll", function (e) {
			e.preventDefault();
			var delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			}
			else if (event.detail) delta = -event.detail / 3;
			var moveTop = null;
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
			}
			else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}
			$("html,body").stop().animate(
			{
				scrollTop: moveTop + 'px'
				}, {
				duration: 500, complete: function () {}
			});
		});
	});
}
function linkmove(where)
{
	var offset = $("#" + where).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
}
