$(document).ready(function(){
	$(window).trigger('scroll');
});
$(window).scroll(function() {
	var $el = $('header');
	var offset = $("#story").offset();
	console.log($(this).scrollTop());
	if($(this).scrollTop() <= offset.top) $el.addClass('white');
	else $el.removeClass('white');
});
function linkmove(where)
{
	var offset = $("#" + where).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
}
