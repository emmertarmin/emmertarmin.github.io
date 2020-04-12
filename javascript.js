$(document).ready(function() {
	
	$('#darkmode').change(function() {
		// this will contain a reference to the checkbox
		if (this.checked) {
			// the checkbox is now checked
			$('body').addClass('dark');
		} else {
			// the checkbox is now no longer checked
			$('body').removeClass('dark');
		}
	});	
	
	$('nav .menu').click(function() {
		// this will contain a reference to the checkbox
		if ($('nav').hasClass('open')) {
			$('nav').removeClass('open');
		} else {
			$('nav').addClass('open');
		}
	});

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});


});



/* ---------- Mobil készülék ez egyáltalán? ---------- */
var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isMobile = true;
	
} else {
	// alert("This application is designed to use the sensor data of mobile phones. It might not work properly on your device.");
}

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop && !$('nav').hasClass('open')){
	  // downscroll code
	  $('nav').css("bottom", "-200px");
   } else {
	  // upscroll code
	  $('nav').css("bottom", "0px");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);