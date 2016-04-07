// All custom Javascript


$(document).ready(function(){


	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100);
		var hue = scrollPercentRounded*1.8;
		// defining the filter value to insert into css
		// This needs more configuration
		var filterValue = 'hue-rotate('+hue+'deg) saturate(1)';

		$(".main-menu").css({
            'filter': filterValue ,
            '-webkit-filter': filterValue , 
            '-moz-filter': filterValue , 
            '-o-filter': filterValue , 
            '-ms-filter': filterValue ,
        });

        // $('.main-menu').css('background-position', 'center ' + scrollPercent + '%');


	});

	$( '.main-menu' )
	  .mouseenter(function() {
	    $('.students').css('color','transparent');
	    $('.pattern').css('color','black');
	  })
	  .mouseleave(function() {
	    $('.students').css('color','black');
	    $('.pattern').css('color','transparent');
	  });

	$( '.students' )
	  .mouseenter(function() {
	    $('.pattern').css('color','transparent');
	  })
	  .mouseleave(function() {
	    $('.pattern').css('color','black');
	  });


	  $(document).mousemove(function(e){
	    if(event.pageX < 100){
	        $('.main-menu').addClass('open');
	    } else {
	    	$('.main-menu').removeClass('open');
	    }

	  });


});