var mobileMenuOpen = false;


$("#bars").click(function(){
	if(!mobileMenuOpen){
		mobileMenuOpen = true;
		$(".menu").css("transition-delay","unset");
		$(".mobile-menu").css("background-color","rgba(0,0,0,1)");
		$(".mobile-menu").css("transition-delay","unset");
		$("#bars .ham").removeClass("fa-bars");
		$("#bars .ham").addClass("fa-times");
		$(".mobile-menu").css("height","21vh");
		$(".menu").css("background-color", "rgba(0,0,0,1)");
		$(".mobile-item").css("opacity","1");
		$(".mobile-item").css("transition-delay","0.5s");
		$(".blank").css("height","79vh");
	} else{
		mobileMenuOpen = false;
		$(".mobile-item").css("transition-delay","unset");
		$("#bars .ham").addClass("fa-bars");
		$("#bars .ham").removeClass("fa-times");
		$(".mobile-menu").css("height","0");
		$(".mobile-menu").css("background-color","rgba(0,0,0,0.8)");
		$(".mobile-menu").css("transition-delay","0.2s");
		$(".menu").css("background-color", "rgba(0,0,0,0.8)");
		$(".mobile-item").css("opacity","0");
		$(".menu").css("transition-delay",".2s");
		$(".blank").css("height","0");


	}
});