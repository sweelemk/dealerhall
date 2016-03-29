$(document).ready(function() {

	//map
	// ymaps.ready(init);
	// var myMap,
	// 	myPlacemark;

	// function init(){
	// 	myMap = new ymaps.Map ("map", {
	// 		center: [53.899367, 27.5623000],
	// 		zoom: 16,
	// 	});
	// 	myPlacemark = new ymaps.Placemark([53.899367, 27.5623000], {
	// 		hintContent: 'Адрес'
	// 	}, {
	// 		iconLayout: 'default#image',
	// 		iconImageHref: 'img/icons/marker.png',
	// 		iconImageSize: [100, 87],
	// 		iconImageOffset: [-20, -80]
	// 	});
	// 	myMap.controls
	// 		.remove('zoomControl')
	// 		.remove('mapTools')
	// 		.remove('smallMapDefaultSet')
	// 		.remove('trafficControl')
	// 		.remove('largeMapDefaultSet')
	// 		.remove('routeEditor')
	// 		.remove('typeSelector');
	// 	myMap.geoObjects.add(myPlacemark);
	// };

	//js-accordion
	$(".js-accordion-title").on("click", function(){
		if ($(this).parents(".js-accordion").hasClass("is-active")) {
			$(this).parents(".js-accordion").removeClass("is-active").find(".js-accordion-body").slideUp();
		}
		else {
			$(".js-accordion").removeClass("is-active");
			$(".js-accordion-body").slideUp();
			$(this).parents(".js-accordion").toggleClass("is-active").find(".js-accordion-body").slideDown()
		}
		
		return false;
	});

});