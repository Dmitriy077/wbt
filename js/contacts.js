ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map_contacts", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.69350506905505, 37.660547499999936],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

        myMap.controls
        	.remove('geolocationControl')
        	.remove('searchControl')
        	.remove('trafficControl')
        	.remove('typeSelector')
        	.remove('fullscreenControl')
        	.remove('zoomControl')
        	.remove('rulerControl')
        	.remove('control.Button');

        myMap.behaviors.disable([
			// 'drag',
			'scrollZoom'
        	]);

        var myPlacemark = new ymaps.Placemark([55.69350506905505,37.660547499999936], {}, {
    		iconLayout: 'default#image',
		    iconImageHref: '../img/main/Vector.svg',
		    iconImageSize: [46, 52],
		    iconImageOffset: [-10, -40]
        });
		myMap.geoObjects.add(myPlacemark);
    }