$(document).ready(function(){
	function checkWidth(){
		if($(window).width()>600){
			$(".mobile-item").css("opacity","1");
			$("#mobile").css("background-color","");
			$("#mobile").css("transition-delay","");
			$("#mobile").css("height","");
			$("#bars").unbind("click");
			$("#form-container").removeClass("hidden");
		} else {
			$("#form-container").addClass("hidden");
			var mobileMenuOpen = false;
			$("#bars").click(function(){
				if(!mobileMenuOpen){
					mobileMenuOpen = true;
					$(".menu").css("transition-delay","unset");
					$(".mobile-menu").css("background-color","rgba(255,255,255,1)");
					$(".mobile-menu").css("transition-delay","unset");
					$("#bars #ham").removeClass("fa-bars");
					$("#bars #ham").addClass("fa-times");
					$(".mobile-menu").css("height","21vh");
					$(".menu").css("background-color", "rgba(255,255,255,1)");
					$(".mobile-item").css("opacity","1");
					$(".mobile-item").css("transition-delay","0.2s");
					$(".blank").css("display","block");
				} else{
					mobileMenuOpen = false;
					$(".mobile-item").css("transition-delay","unset");
					$("#bars #ham").addClass("fa-bars");
					$("#bars #ham").removeClass("fa-times");
					$(".mobile-menu").css("height","0");
					$(".mobile-menu").css("background-color","rgba(255,255,255,1)");
					$(".mobile-menu").css("transition-delay","0.2s");
					$(".menu").css("background-color", "rgba(255,255,255,1)");
					$(".mobile-item").css("opacity","0");
					$(".menu").css("transition-delay",".2s");
					$(".blank").css("display","none");
				}
			});
		}
	}
	checkWidth();
	$(window).resize(checkWidth);
});
$(window).scroll(function(){
	var winScrollTop =$(window).scrollTop();
	if(winScrollTop<70){
		console.log(winScrollTop);
		var opacity = winScrollTop/70;
		console.log(opacity/2.5);
		$(".menu").css("background-color","rgba(255,255,255,"+opacity+")");
		$(".menu").css("box-shadow","0px -5px 14px 3px rgba(0,0,0,"+(opacity/2.5)+")");
	} else{
		$(".menu").css("background-color","rgba(255,255,255,1)");
		$(".menu").css("box-shadow","0px -5px 14px 3px rgba(0,0,0,0.4");
	}
});
