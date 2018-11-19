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
$("#intro_").click(function(event){
	var offset = $("#intro").offset();
	$("body").animate({scrollTop:offset.top},500);
});
$("#story_").click(function(event){
	var offset = $("#story").offset();
	$("body").animate({scrollTop:offset.top},500);
});
$("#monument_").click(function(event){
	var offset = $("#monument").offset();
	$("body").animate({scrollTop:offset.top},500);
});
