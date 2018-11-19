current_section=0;
$(document).ready(function(){
	document.body.scrollTop = 0;
	$(window).trigger('scroll');
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
				if(current_section<10) {
					current_section++;
					moveTop = $("#d"+current_section).offset().top;
				}
			}
			else {
				if (current_section>0) {
					current_section--;
					moveTop = $("#d"+current_section).offset().top;
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
});
$(window).scroll(function() {
	var $el = $('header');
	var offset = $("#story").offset();
	console.log($(this).scrollTop());
	if($(this).scrollTop() < offset.top) $el.addClass('white');
	else $el.removeClass('white');
});
window.onload = function () {
	
}
function linkmove(where)
{
	var offset = $("#" + where).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
}
