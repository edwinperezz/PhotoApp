var sliderPhotos = [
"https://images.unsplash.com/photo-1558935365-f6cb860f3a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1513&q=80",
"https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554505157-23cbbf66b1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554230142-6e0f4ab6af7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1559183533-ee5f4826d3db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560547168-3a6b03b1d436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];
$(function() {
	$.scrollify({
		section : ".slider-container, .bio-container, .banner2, .portfolio",
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
var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");
var t = setInterval(slide, 9000);
var i = 1;
function slide(){
	if(i === sliderPhotos.length)
		i = 0;
	if(i%2==1)
		first[0].style.backgroundImage = "url("+sliderPhotos[i]+")";
	else
		second[0].style.backgroundImage = "url("+sliderPhotos[i]+")";
		setTimeout(1000);
	i++;
}