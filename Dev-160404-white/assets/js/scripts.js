// All custom Javascript


$(document).ready(function(){


	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100);
		// defining the filter value to insert into css
		// This needs more configuration
		var filterValue = 'hue-rotate('+scrollPercentRounded+'deg) saturate(1)';

		$(".main-menu").css({
            'filter': filterValue ,
            '-webkit-filter': filterValue , 
            '-moz-filter': filterValue , 
            '-o-filter': filterValue , 
            '-ms-filter': filterValue ,
        });



	});

	$( '.main-menu' )
	  .mouseenter(function() {
	    $('.students').css('color','transparent');
	    // $('.pattern').css('color','black');
	  })
	  .mouseleave(function() {
	    $('.students').css('color','black');
	    // $('.pattern').css('color','transparent');
	  });


});