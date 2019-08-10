(function() {

	$(window).scroll(function(){
		if ( $("html").scrollTop() > 0) {
			$('header').addClass('background_color')
		} else {
			$('header').removeClass('background_color')
		}
  	})

	$('.burger').on('click', function(e) {
		e.preventDefault;
		$('header').toggleClass('open');
		return false;
	})

	$('.scroll').on('click', function(e) {
		e.preventDefault;
		var link = $(this).attr('href');
		$('html, body').animate({scrollTop: ($(link).offset().top - 90)}, 1000);
		if ($('header').hasClass('open')) {
			$('header').removeClass('open');
		}
		return false;
	})

	$('.popup_open').on('click', function(e) {
		e.preventDefault;
		var link = $(this).attr('href');
		$(link).fadeIn();
		$(link).css('display', 'flex');
		$('body').css('overflow', 'hidden');
		return false;
	})

	$('.close_popup').on('click', function() {		
		$(this).parents('.popup_block').fadeOut();
		$('body').css('overflow', 'auto');
	})

  $('.slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		swipeToSlide: true,
		responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 4
		    }
		  },
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 3 
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1
		    }
		  }
		]
	});

	$('input[type=tel]').on('keydown', function(evt) {
    var key = evt.charCode || evt.keyCode || 0;
    return (key == 8 ||
            key == 9 ||
            key == 46 ||
            key == 110 ||
            key == 107 ||
            key == 190 ||
            (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
	});
}())
