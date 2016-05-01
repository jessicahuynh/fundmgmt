$(document).foundation();
      
heightsToStickFooter();

$(window).on('resize', function() {
	heightsToStickFooter();
});

function heightsToStickFooter() {
	var h = $('body').height();
	
	if ($('.mainBlock').height() >= $('.off-canvas-content').height() +1) {
		$('div.mainBlock').addClass('mainBlockLong');
		
		// no longer fix footer
		$('footer').css('position','relative');
		$('.off-canvas-content').height($('.mainBlock').height());
	}
	else {
		$('.off-canvas-content').height(h - $('.title-bar').height() - $('.top-bar').height()  - $('footer').height()*1.4);
	}
}

$(window).on('scroll', function() {
var $sidebar   = $("#offCanvasLeft"), 
	$window    = $(window),
	offset     = $sidebar.offset(),
	topPadding = 0;

if ($window.scrollTop() > offset.top) {
	$sidebar.stop().animate({
		marginTop: $window.scrollTop() - offset.top + topPadding
	});
} else {
	$sidebar.stop().animate({
		marginTop: 0
	});
} 
});