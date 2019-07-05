$(".buy-arrow").click(function(){
	if($("#visible").length){
		$(".form-container").removeAttr("id");
	} else {
		$(".form-container").attr("id","visible");
	}
	$(".buy-arrow i").toggleClass("fa-times");
	$(".buy-arrow i").toggleClass("fa-arrow-right");
	$(".buy-arrow").toggleClass("clicked");
});