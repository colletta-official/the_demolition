$(document).ready(function(){
	$("#intro_").on("click",function(event){
		var offset = $("#intro").offset();
		$("html body").animate({scrollTop:offset.top},500);
	});
	$("#story_").on("click",function(event){
		var offset = $("#story").offset();
		$("html body").animate({scrollTop:offset.top},500);
	});
	$("#monument_").on("click",function(event){
		var offset = $("#monument").offset();
		$("html body").animate({scrollTop:offset.top},500);
	});
});
$(window).scroll(function() {
	var el = $('ul');
	var offset = $("#story").offset();
	console.log(el);
	if($(this).scrollTop() <= offset.top) el.addClass('white');
	else el.removeClass('white');
});
