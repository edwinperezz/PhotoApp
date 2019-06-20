var sliderPhotos = [
"https://images.unsplash.com/photo-1558935365-f6cb860f3a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1513&q=80",
"https://images.unsplash.com/photo-1560343787-b90cb337028e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554505157-23cbbf66b1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554230142-6e0f4ab6af7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1559183533-ee5f4826d3db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560547168-3a6b03b1d436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];
var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");
var t = setInterval(slide, 5000);
var i = 1;
function slide(){
	first[0].style.visibility = "visible";
	second[0].style.visibility = "visible";
	if(i === sliderPhotos.length)
		i = 0;
	if(i%2==1)
		second[0].style.backgroundImage = "url("+sliderPhotos[i]+")";
	else
		first[0].style.backgroundImage = "url("+sliderPhotos[i]+")";
	if(i%2==1){
		first[0].classList.toggle("slide-left");
		second[0].classList.toggle("right");
		setTimeout(function(){
			first[0].classList.toggle("slide-left");
			first[0].style.visibility = "hidden";
		},1000);
		first[0].classList.toggle("right");

	} else {
		second[0].classList.toggle("slide-left");
		first[0].classList.toggle("right");
		setTimeout(function(){
			second[0].classList.toggle("slide-left");
			second[0].style.visibility = "hidden";
		},1000);
		second[0].classList.toggle("right");

	}
	i++;
}