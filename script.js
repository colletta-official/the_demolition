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
			var next=section_next(this);
			var prev=section_prev(this);
			if (delta < 0) {
				if(next!==null) {
					moveTop = next.offset().top;
				}
			}
			else {
				if (prev!==null) {
					moveTop = prev.offset().top;
				}
			}
			if(!(next===null&&delta<0))
			{
				$("html,body").stop().animate(
				{
					scrollTop: moveTop + 'px'
					}, {
					duration: 500, complete: function () {}
				});
			}
		});
		$(this).on("click", function (e) {
			var p=$(this).find(".description")[0];
			if(p)
			{
				if(p.style.visibility=="hidden") p.style.visibility="visible";
				else p.style.visibility="hidden";
			}
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
	var id=e.id;
	var no=parseInt(id.substring(1, id.length));
	no++;
	if(no==11) return null;
	else return $("#d"+no);
}
function section_prev(e)
{
	var id=e.id;
	var no=parseInt(id.substring(1, id.length));
	no--;
	if(no==-1) return null;
	else return $("#d"+no);
}
