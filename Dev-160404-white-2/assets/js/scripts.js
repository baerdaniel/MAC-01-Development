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
	    $('.close.hide').removeClass('hide');
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
	    	// $('.main-menu').removeClass('open');
	    }
	  });

	  $('.close').click(function() {
        $('.main-menu').removeClass('open');
        $('.close').addClass('hide');
      });


	  var winHeight = $(window).height();
		var section1 = 0;
		var section2 = $('#photography').offset().top - winHeight/2;
		var section3 = $('#fine-art').offset().top - winHeight/2;
		var section4 = $('#art-and-science').offset().top - winHeight/2;

		$(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > section1 && scrollTop <= section2){
            $('.link-main-info').addClass('active');
            $('.link-photography').removeClass('active');
            $('.link-art-and-science').removeClass('active');

        } else if(scrollTop > section2 && scrollTop <= section3){
            $('.link-photography').addClass('active');
            $('.link-main-info').removeClass('active');
            $('.link-fine-art').removeClass('active');
                
        } else if(scrollTop > section3 && scrollTop <= section4){
        	$('.link-fine-art').addClass('active');
            $('.link-photography').removeClass('active');
            $('.link-art-and-science').removeClass('active');
        } else if(scrollTop > section4) {
        	$('.link-art-and-science').addClass('active');
            $('.link-fine-art').removeClass('active');
        };



        // $('html').css({transform:'rotate(' + scrollTop/10 + 'deg)'});


});


});