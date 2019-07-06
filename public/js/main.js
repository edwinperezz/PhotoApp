
$(".header-title").click(function(){
	$("html").css("scroll-behavior", "smooth");
	window.setTimeout(function(){
		$("html").css("scroll-behavior", "unset");
	},1000);
});
$(".menu-item a").click(function(){
	$("html").css("scroll-behavior", "smooth");
	window.setTimeout(function(){
		$("html").css("scroll-behavior", "unset");
	},1000);
});
