$(document).ready(function() {
	//menu open 
	function openMenu() {
		var menu = $('.js-menu-nav'),
				close = $('.close__menu'),
				container = $('.menu__container'),
				body = $('body'),
				form = $('.form__init'),
				input = form.prev(),
				panel = $('.search__panel'),
				formCase = $('.form__menu'),
				searchBox = $('.search__case');

		menu.on('click', function(){
			body.css('overflow', 'hidden');
			container.fadeIn({
				duration: 400,
				complete: function() {
					$(this).addClass('is-active');
				}
			});
		});

		close.add(container).on('click', function(){
			input.val('');
			panel.removeClass('focus');
			formCase.trigger('reset');
			searchBox.fadeOut({
				duration: 10,
				complete: function() {
					$(this).removeClass('visible').delay(200).fadeIn();
				}
			});
			$(this).removeClass('close__input');
			body.removeAttr('style');
			container
				.removeClass('is-active')
				.delay(400)
				.fadeOut(300);
			form.removeClass('reset__input');
		});

		form.on('click', function(){
			if(!$(this).hasClass('reset__input')) {
				panel.addClass('focus');
				setTimeout(function(){
					input.focus();
				},10);
				$(this).addClass('reset__input');
			} else {
				input.val('');
				panel.removeClass('focus');
				formCase.trigger('reset');
				searchBox.fadeOut({
					duration: 400,
					complete: function() {
						$(this).removeClass('visible').delay(400).fadeIn();
					}
				});
				$(this).removeClass('reset__input');
			};
		});

		input.on('input', function(){
			var _ = $(this);

			if(_.val().length === 0) {

				searchBox.fadeOut({
					duration: 200,
					complete: function() {
						$(this).removeClass('visible').delay(200).fadeIn();
					}
				});
			} else {
				searchBox.addClass('visible').addClass('loading');
				setTimeout(function(){
					searchBox.removeClass('loading');
					if(!head.mobile) {
						$('#container').perfectScrollbar('update');
					}					
				},1000);

			}

		});

		$('.menu__area').on('click', function(event) {
			event.stopPropagation();
		});

	};
	openMenu();

	function scroll(){
		if($('.scroll__area').length) {
			
			$('#container').perfectScrollbar({
			  wheelSpeed: 2,
				wheelPropagation: true,
				minScrollbarLength: 20
			});
		}
	};
	if(!head.mobile) {
		scroll();
	}	else {
		$('#container').css('overflow-y', 'auto');
	}

	$(window).on('resize', function() {
		if(!head.mobile) {
			$('#container').perfectScrollbar('update');
		}
	});


});