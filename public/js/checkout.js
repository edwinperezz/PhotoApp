$(".buy-arrow").click(function(){
	$("#form-container").toggleClass("hidden");
	$(".buy-arrow i").toggleClass("fa-times");
	$(".buy-arrow i").toggleClass("fa-arrow-right");
	$(".buy-arrow").toggleClass("clicked");
});