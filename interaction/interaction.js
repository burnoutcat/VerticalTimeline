$(document).ready(function(){
	$.scrollify({
		section : ".fullpage-slide",
		sectionName:"section-name",
		interstitialSection : "",
	    easing: "easeOutExpo",
	    scrollSpeed: 2000,
	    offset : 0,
	    scrollbars: false,
	    standardScrollElements: "",
	    setHeights: true,
	    overflowScroll: true,
	    updateHash: true,
	    touchScroll:true,
	    before:function() {},
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
	console.log("done");


})

}


