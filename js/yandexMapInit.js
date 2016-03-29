ymaps.ready(init);
	var myMap;
	function init(){     
		myMap = window.map = new ymaps.Map ("map", {
			center: [53.90614, 27.54849],
			zoom: 12
		}),
		clusterer = new ymaps.Clusterer({
			preset: 'twirl#blueClusterIcons',
			groupByCoordinates: false,
			clusterDisableClickZoom: true,
            zoomMargin: [300, 0, 0, 0]
		});

		myMap.controls
            // Adds the zoom control button. The position of the control on the map is passed as a parameter.
            .add('zoomControl', {
                right: '35',
                top: '350'
            })
		
		getPointData = function (index) {
            return {
                balloonContentBody: '<span class="ymap__title">Автосалон AV-3</span><span class="ymap__gray">официальный дилер Audi</span><p>г. Минск, ул. Серова, 1</p><p>+375 29 191-88-88</p><p><a href="#">www.audi.by</a></p>',
            }
        };

		getPointOptions = function () {
            return {
                preset: 'twirl#blueIcon'
            };
        },
        points = [
            [53.90672, 27.52199], 
            [53.93099, 27.54069], 
            [53.90614, 27.54849], 
            [53.861657,27.674764], 
            [53.907128,27.542645], 
            [53.950336,27.706410], 
            [53.963093,27.630225], 
            [53.962587,27.627908], 
            [53.908069,27.454491], 
            [53.886039,27.448466], 
            [53.964617,27.643781], 
            [53.961191,27.733661], 
            [53.851916,27.651151], 
            [53.823284,27.640337], 
            [53.930206,27.534851]
        ],
        geoObjects = [];

		for(var i = 0, len = points.length; i < len; i++) {
		        geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
		    }

		clusterer.options.set({
	        gridSize: 80,
	        clusterDisableClickZoom: false
	    });

		clusterer.add(geoObjects);
		clusterer.events.once('objectsaddtomap', function () {
	        myMap.setBounds(clusterer.getBounds(), {
	        	zoomMargin: [300, 0, 0, 0]
	        });
	    });

		myMap.geoObjects
			.add(clusterer);
}