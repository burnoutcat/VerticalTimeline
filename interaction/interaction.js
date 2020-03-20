$(document).ready(function(){
	landingAnimation();
	$('[data-fancybox="images"]').fancybox({
		buttons: [
	    "zoom",
	    //"share",
	    // "slideShow",
	    //"fullScreen",
	    //"download",
	    // "thumbs",
	    "close"
	  	],
	  	arrows: false
	});
	$.scrollify({
		section : ".fullpage-slide",
		sectionName:"section-name",
		interstitialSection : "",
	    easing: "easeOutExpo",
	    scrollSpeed: 1000,
	    offset : 0,
	    scrollbars: false,
	    standardScrollElements: "",
	    setHeights: true,
	    overflowScroll: true,
	    updateHash: true,
	    touchScroll:true,
	    before:function() {
	    	let currentSlide = $.scrollify.currentIndex() + 1;
	    	let lastSlide = $.scrollify.currentIndex();
	    	// $(".fullpage-slide:nth-child(" + lastSlide + ")").addClass("fadeOut").siblings().removeClass("fadeOut");
	    	// $(".fullpage-slide:nth-child(" + currentSlide + ")").addClass("active animated fadeIn").siblings().removeClass("fadeIn");
	    	$(".fullpage-slide:nth-child(" + currentSlide + ")").find("h1").addClass("animated fadeInUp");
	    	$(".fullpage-slide:nth-child(" + currentSlide + ")").find("img, p").addClass("animated fadeIn");
	    	$(".fullpage-slide:not(:nth-child(" + currentSlide + "))").find("h1").removeClass("fadeInUp");
	    	$(".fullpage-slide:not(:nth-child(" + currentSlide + "))").find("img, p").removeClass("fadeIn");
	    	$(".timeline-controll li:nth-child(" + currentSlide + ")" ).addClass("active").siblings().removeClass("active");
	    	if(currentSlide == 1){
	    		$(".fullpage-slide:nth-child(" + currentSlide + ")").addClass("active animated fadeIn").removeClass("fadeOut");
	    	}
	    	if(currentSlide == 8){
	    		$(".timeline-controll li:nth-child(7)").addClass("active").siblings().removeClass("active");
	    	}

	    	console.log(currentSlide);
	    },
	    after:function() {},
	    afterResize:function() {},
	    afterRender:function() {}
	});
	timelineControll();
})

timelineControll = () =>{

	$(".timeline-controll li").on('click',function(e){
	let index = $(this).index();
	let slide = index + 1;
	$.scrollify.move("#" + slide);
	$(this).addClass("active").siblings().removeClass('active');
	console.log("done");

	})
}

landingAnimation = () =>{
	$(".fullpage-slide:nth-child(1)").addClass("active animated fadeIn");
	$(".timeline-controll li:nth-child(1)").addClass("active").siblings().removeClass("active");
}




