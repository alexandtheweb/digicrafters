	$("document").ready(function() {

		var nav = $("#menu-mobile"),
			navTrig = $("#menu-trigger"),
			navItems = $('#menu-mobile a');

		navTrig.click(function () {		
			if(nav.css('height') == '0px') {
			    nav.animate({height: 130}, 500);
		    } else {
		    	nav.animate({height: 0}, 500);
		    }
		    return false;
		});

		navItems.click(function() {
		    nav.css({height: 0});	
		});



/*		popupTrigger.each(function() {
		  popupBoxOwn = $(this).next(".inner");
		  $.data(this,"origin", {
		  		width: $(this).width(),
				height: $(this).height(),
				position: $(this).css("position"),
				top: $(this).css("top"),
				bottom: $(this).css("bottom"),
				zindex: $(this).css("z-index")
		  });
		});
		popupTrigger.click(function(event){
			var origin = $.data(this, 'origin');
			eClass = $(event.target).attr('class');
			eID = $(event.target).attr('id');

			var animBottom = {
						"width": origin.width,
						"height": origin.height,
						"right": origin.right,
						"top": origin.top,
						"position": origin.position
					}

				if(eClass === "menu") {
					$(".inner",this).css({"z-index": 1,"position": "static"}).animate(animBottom);
					$(".inner",this).fadeOut();
					$(".menu",this).fadeOut();
				} else {
					$(".inner",this).fadeIn().css({"z-index": 5, "position": "absolute"}).animate({
						"width": "90%",
						"height": "90%",
						"top": "0",
						"right": "5%",
						"top": "5%"
					});
				}
		});
*/

// Find all YouTube videos
var $allVideos = $(".video-box iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".video-box");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});



  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });
// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();

		// Swipe stuff

/*		var windowSize = $(window).width(),
		  	windowH = $(window).height(),
			contentSwipe = $('.swipers');


			var moveIt = 0;
			
			contentSwipe.css({
				width: windowSize * dEntry.length + "px",
			});

			dEntry.css({
				height: windowH + "px",
		   		width: windowSize + "px"
		   	});	


	    hammertime.on("swipeleft", function(ev) {
	    	alert()
	    });
*/


	})

