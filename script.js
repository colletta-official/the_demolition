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
			console.log($(this).next());
			if (delta < 0) {
				if(section_next(this)!=null) {
					moveTop = section_next(this).offset().top;
				}
			}
			else {
				if (section_prev(this)!=null) {
					moveTop = section_prev(this).offset().top;
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
	if($(this).scrollTop() < offset.top) $el.addClass('white');
	else $el.removeClass('white');
});
function linkmove(where)
{
	var offset = $("#" + where).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
}
function section_next(e)
{
	console.log(e);
	var id=e.id;
	var no=parseInt(id.substring(2, id.length));
	no++;
	if(no==10) return null;
	else return $("#d"+no);
}
function section_prev(e)
{
	console.log(e);
	var id=e.id;
	var no=parseInt(id.substring(2, id.length));
	no--;
	if(no==0) return null;
	else return $("#d"+no);
}
