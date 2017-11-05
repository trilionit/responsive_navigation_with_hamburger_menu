$(function(){
	$(".menu-toggle").click(function(){
		$(".nav").toggleClass("show-menu",100);
		$(this).toggleClass("open", 100);
	});
});
