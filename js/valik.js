$(document).ready(function() {
	$('.search__keyword').focusin(function(event) {
		$('.search__label').addClass('is-active');
	});
	$('.search__keyword').focusout(function(event) {
		$('.search__label').removeClass('is-active');
	});
	//search
	$('.search__keyword').on('keyup', function(event) {
	 if($(this).val() == '') {
		$(this).parent().find('.search__delete').addClass('is-not');
	 } else {
		$(this).parent().find('.search__delete').removeClass('is-not');
	 }
	});
	$('.search__delete').on('click', function() {
		$('.search__keyword').val('');
		$(this).addClass('is-not');
	});
	//request-search
	$('.request-top__keyword').on('keyup', function(event) {
	 if($(this).val() == '') {
		$(this).parent().find('.request-top__delete').addClass('is-not');
		$(this).removeClass('is-active');
	 } else {
		$(this).parent().find('.request-top__delete').removeClass('is-not');
		$(this).addClass('is-active');
	 }
	});
	$('.request-top__delete').on('click', function() {
		$('.request-top__keyword').val('');
		$(this).addClass('is-not');
	});
	//request-top search
	$('.request-top__search').focusin(function(event) {
		$('.request-top__icon').addClass('is-active');
	});
	$('.request-top__search').focusout(function(event) {
		$('.request-top__icon').removeClass('is-active');
	});
	
	// slider
	var slider = $('.js-slider');
 	if (slider.length) {
 		$('.js-slider').each(function(){
 			var slider_list = $(this).parent().find('.slider__list'),
 				slider_length = $(this).find('.slider__item').length,
 				slider_cloned = $(this).find('.slick-cloned').length,
 				slider_all = $(this).parent().find('.slider__all'),
 				slider_current = $(this).parent().find('.slider__current');
	 		slider_list.slick({
	 			dots: false,
	 			arrows: true,
	 			infinite: true,
	 			slidesToShow: 1,
	 			slidesToScroll: 1,
				swipeToSlide: true,
				touchThreshold: 15,
				slide: '.slider__item'
	 		});
	 		var currentSlide = slider_list.slick('slickCurrentSlide');
	 			slider_current.text(currentSlide + 1);

	 		slider_all.text(slider_length - slider_cloned);

	 		slider_list.on('swipe', function(event, slick, direction) {
		  		var currentSlide = slider_list.slick('slickCurrentSlide');
				slider_current.text(currentSlide+1);
			});

			$(this).find('.slick-next').on('click', function(){
				var currentSlide = slider_list.slick('slickCurrentSlide');
				slider_current.text(currentSlide+1);
				console.log('next');
			});
			$(this).find('.slick-prev').on('click', function(){
				var currentSlide = slider_list.slick('slickCurrentSlide');
				slider_current.text(currentSlide+1);
				console.log('prev');
			});
 		});

 	};

 	//slider new
 	/*var slickslider = $('.js-slick');
 	if(slickslider.length){
 		var slider_length = slickslider.find('.slider__item').length,
 			slider_copy = slickslider.find('.slick-cloned').length,
 			slider_all = slider_length - slider_copy,
 			slider_current = slickslider.parent().find('.slider__current');
 	}*/
 	//RANGE
 	$(function() {
		$( "#slider" ).slider({
			range: true,
			min: 0,
			max: 41,
			values: [ 11, 41 ]
		});
	});
	function ui_slider() {
        $(".js-ui-slider").each(function(){
            var slider = $(this).find(".js-ui-slider-main"),
            	inputFrom = $(this).find(".js-ui-slider-from"),
            	inputFromHidden = $(this).find(".js-input-from-hidden"),
            	inputTo = $(this).find(".js-ui-slider-to"),
            	inputToHidden = $(this).find(".js-input-to-hidden"),
            	maxVal = slider.attr("data-max"),
            	minVal = slider.attr("data-min"),
            	valFrom = inputFromHidden.val(),
            	valTo = inputToHidden.val(),
            	stepVal = slider.attr("data-step"),
            	reset = $(this).find('.js-reset-range');
            	inputFromHidden.val(minVal);
            	inputToHidden.val(maxVal);
            	if (!valFrom) {
            		var valFrom = minVal;
            	}
            	if (!valTo) {
            		var valTo = maxVal;
            	}
            slider.slider({
                range: true,
                min: minVal,
                max: maxVal,
                //step: stepVal,
                values: [ valFrom, valTo ],
                stop: function( event, ui ) {
                    inputFrom.val(ui.values[0]);
                    inputFromHidden.val(ui.values[0]);
                    inputTo.val(ui.values[1]);
                    inputToHidden.val(ui.values[1]);
                },
                slide: function( event, ui ) {
                   	inputFrom.val(ui.values[0]);
                    inputFromHidden.val(ui.values[0]);
                    inputTo.val(ui.values[1]);
                    inputToHidden.val(ui.values[1]);
                    if (inputFrom.val()!=minVal || inputTo.val()!=maxVal) {
                    	reset.show();
                    }else {
                    	reset.hide();
                    }
                }
            });

            inputFrom.on('change', function(){
            	var val1 = $(this).val(),
            		val2 = inputFromHidden.val(val1),
            		valmin = inputFromHidden.val(),
            		valmax = inputToHidden.val();
            	if(val1 < valmin) {
            		val1 = valmin
            		$(this).val(valmin);
            		$('.js-input-from-hidden').val(valmin);
            	}
            	if (parseInt(val1) > parseInt(valmax)) {
            		val1 = valmax;
            		inputFromHidden.val(val1);
            		$(this).val(valmax);
            	}
            	slider.slider('values',0 , val1);
            	if (inputFrom.val()!=minVal ) {
                   	reset.show();
                }else {
                   	reset.hide();
                }
            });
            inputTo.on('change', function(){
            	var val1 = $(this).val(),
            		val2 = inputToHidden.val(val1),
            		valmin = inputFromHidden.val(),
            		valmax = slider.attr('data-max');
            	if(val1 > valmax) {
            		val1 = valmax;
            		$(this).val(valmax);
            		$('.js-input-to-hidden').val(valmax);
            	}
            	if(parseInt(val1) < parseInt(valmin) ) {
            		val1 = valmin;
            		inputToHidden.val(val1);
            		$(this).val(valmin);
            	}
            	if (inputTo.val()!=maxVal ) {
                   	reset.show();
                }else {
                   	reset.hide();
                }
            	slider.slider('values',1 , val1);
            });


            $(this).find(".ui-slider-handle").html("<span></span>");
          
            inputFrom.val(slider.slider( "values", 0 ));
            inputTo.val(slider.slider( "values", 1 ));
        });
    }
    ui_slider();
    $(".js-reset-range").hide();
    $(".js-reset-range").on("click",function(){
    	var slider = $(this).parents(".js-ui-slider").find(".js-ui-slider-main"),
    			maxVal = slider.attr("data-max"),
           minVal = slider.attr("data-min");
    	slider.slider( "values", [ minVal, maxVal ] );
    	$(this).parents(".js-ui-slider").find(".js-input-from-hidden").val(minVal);
    	$(this).parents(".js-ui-slider").find(".js-input-to-hidden").val(maxVal);
    	$(this).parents(".js-ui-slider").find(".js-ui-slider-from").val(minVal);
    	$(this).parents(".js-ui-slider").find(".js-ui-slider-to").val(maxVal);
    	$(this).hide();	
    	return false;
    });
	//stores
	$('.js-graph').on('click', function() {
		$('.js-hidden').slideToggle('slow');
		$(this).toggleClass('is-close');
		return false;
	});
//1-1catalog series
	// scrollTop
	 $(".js-header__nav-link").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top - 100
		}, 600);
		return false;
	});
	function scrollHeader() {
	    if ($('.js-block').length) {
	      $('.js-block').each(function() {
	      	var navHeight = $('.header__bottom').outerHeight();
	        if ($(window).scrollTop() >= $(this).offset().top - navHeight) {
	          var id = $(this).attr("id");
	          $(".header__nav-list a").removeClass("is-active");
	          $("[href='#"+id+"']").addClass("is-active");
	        }	       
	      });
	    }
	  }
	scrollHeader();
	$(window).scroll(function() {
		scrollHeader();
	});
	//header fixed
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if ($('.js-wrap').length>0) {
	    	if (scroll >= $('.js-wrap').offset().top) {
	    	    $(".js-fixed").addClass("is-fixed");
	    	} else {
	    	    $(".js-fixed").removeClass("is-fixed");
	    	};
	    };
	});
	$(window).load(function() {    
	    var scroll = $(window).scrollTop();
	    if ($('.js-wrap').length>0) {
	    	if (scroll >= $('.js-wrap').offset().top) {
	    	    $(".js-fixed").addClass("is-fixed");
	    	} else {
	    	    $(".js-fixed").removeClass("is-fixed");
	    	};
	    };
	});
	//input popup
	$('.popup-form input').on('keyup', function(event) {
		if($(this).val() == '') {
			$(this).removeClass('is-active');
		} 
		else {
			$(this).addClass('is-active');
		}
	});
	$('.form__input input').on('click', function() {
		$(this).removeClass('has-error');
	});
});

