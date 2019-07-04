var sliderPhotos = [
"https://images.unsplash.com/photo-1558935365-f6cb860f3a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1513&q=80",
"https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554505157-23cbbf66b1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554230142-6e0f4ab6af7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1559183533-ee5f4826d3db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560547168-3a6b03b1d436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

var mobileMenuOpen = false;





$(function(){
	var headerTitle = $(".header-title");
	var trigger = $("#about");
	$(window).scroll(function(){
		var triggerTop = trigger.position().top;
		var winScrollTop =$(window).scrollTop();
		triggerTop = triggerTop/2;
		if(winScrollTop>=triggerTop){
			$(".header").css("transition-delay", "unset");
			headerTitle.css("transform","translateX(0)");
			$(".header").css("height", "80%");
		}
		if(winScrollTop<triggerTop){
			headerTitle.css("transform","translateX(150%)");
			$(".header").css("transition-delay", "2s");
			$(".header").css("height", "0");
		}
	});
});
$(function() {
	$.scrollify({
		section : ".content",
		sectionName : false,
		before: function(i){
			if(i===1){
				$(".right-side").addClass("slideInRight");
				$(".left-side").addClass("slideInLeft");
				$(".bio-banner").addClass("fadeInDown");
			}
			if(i!==1){
				$(".right-side").removeClass("slideInRight");
				$(".left-side").removeClass("slideInLeft");
				$(".bio-banner").removeClass("fadeInDown");
			}
		} 
	});
});

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
var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");
var t = setInterval(slide, 10000);
var i = 1;
function slide(){
	if(i === sliderPhotos.length)
		i = 0;
	if(i%2==1)
		first[0].style.backgroundImage = "url("+sliderPhotos[i]+")";
	else
		second[0].style.backgroundImage = "url("+sliderPhotos[i]+")";
	i++;
}