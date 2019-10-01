ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.7, 37.6],
        zoom: 10,
        controls: []
    });

    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);

    // Создание метки с круглой активной областью.
    var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company_map compani_js">4</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.783202, 37.605584], {
            hintContent: ''
        }, {
            iconLayout: circleLayout,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company_map').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company_map').removeClass('company_hover');
    });


    // Создание метки с круглой активной областью.
    var circleLayout1 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company_map compani_js">3</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.673102, 37.555484], {
            hintContent: ''
        }, {
            iconLayout: circleLayout1,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company_map').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company_map').removeClass('company_hover');
    });


    // Создание метки с круглой активной областью.
    var circleLayout2 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company_map compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.853302, 37.665684], {
            hintContent: ''
        }, {
            iconLayout: circleLayout2,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company_map').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company_map').removeClass('company_hover');
    });

//
// Создание метки с круглой активной областью.
    var circleLayout4 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners_map compani_js">4</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.733202, 37.665584], {
            hintContent: ''
        }, {
            iconLayout: circleLayout4,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners_map').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners_map').removeClass('partners_hover');
    });


    // Создание метки с круглой активной областью.
    var circleLayout5 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners_map compani_js">3</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.573102, 37.535484], {
            hintContent: ''
        }, {
            iconLayout: circleLayout5,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners_map').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners_map').removeClass('partners_hover');
    });


    // Создание метки с круглой активной областью.
    var circleLayout6 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners_map compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.803302, 37.765684], {
            hintContent: ''
        }, {
            iconLayout: circleLayout6,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners_map').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners_map').removeClass('partners_hover');
    });
   
});



ymaps.ready(function () {
    var map = new ymaps.Map('map_small_1', {
        center: [53.189058388323645, 50.244943000000006],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);

var circleLayout2 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [53.189058388323645, 50.244943000000006], {
            hintContent: ''
        }, {
            iconLayout: circleLayout2,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company').removeClass('company_hover');
    });
});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_2', {
        center: [55.32892406936628,37.5194224999999],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);


var circleLayout5 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
       [55.32892406936628,37.5194224999999], {
            hintContent: ''
        }, {
            iconLayout: circleLayout5,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners').removeClass('partners_hover');
    });

});

ymaps.ready(function () {
    var map = new ymaps.Map('map_small_3', {
        center: [53.189058388323645, 50.244943000000006],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);

var circleLayout2 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [53.189058388323645, 50.244943000000006], {
            hintContent: ''
        }, {
            iconLayout: circleLayout2,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company').removeClass('company_hover');
    });
});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_4', {
        center: [55.32892406936628,37.5194224999999],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);


var circleLayout5 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
       [55.32892406936628,37.5194224999999], {
            hintContent: ''
        }, {
            iconLayout: circleLayout5,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners').removeClass('partners_hover');
    });

});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_5', {
        center: [53.189058388323645, 50.244943000000006],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);

var circleLayout2 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [53.189058388323645, 50.244943000000006], {
            hintContent: ''
        }, {
            iconLayout: circleLayout2,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company').removeClass('company_hover');
    });
});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_6', {
        center: [55.32892406936628,37.5194224999999],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);


var circleLayout5 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
       [55.32892406936628,37.5194224999999], {
            hintContent: ''
        }, {
            iconLayout: circleLayout5,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners').removeClass('partners_hover');
    });

});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_7', {
        center: [53.189058388323645, 50.244943000000006],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);

var circleLayout2 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [53.189058388323645, 50.244943000000006], {
            hintContent: ''
        }, {
            iconLayout: circleLayout2,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company').removeClass('company_hover');
    });
});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_8', {
        center: [55.32892406936628,37.5194224999999],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);


var circleLayout5 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
       [55.32892406936628,37.5194224999999], {
            hintContent: ''
        }, {
            iconLayout: circleLayout5,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners').removeClass('partners_hover');
    });

});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_9', {
        center: [53.189058388323645, 50.244943000000006],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);

var circleLayout2 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [53.189058388323645, 50.244943000000006], {
            hintContent: ''
        }, {
            iconLayout: circleLayout2,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.company').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company').removeClass('company_hover');
    });
});


ymaps.ready(function () {
    var map = new ymaps.Map('map_small_10', {
        center: [55.32892406936628,37.5194224999999],
        zoom: 16,
        controls: []
    });
    map.behaviors.disable([
         // 'drag',
         'scrollZoom'
         ]);


var circleLayout5 = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="partners compani_js"></div></div>');

    var circlePlacemark = new ymaps.Placemark(
       [55.32892406936628,37.5194224999999], {
            hintContent: ''
        }, {
            iconLayout: circleLayout5,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    map.geoObjects.add(circlePlacemark);
     circlePlacemark.events
     .add('mouseenter', function () {    
    $('.partners').addClass('partners_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.partners').removeClass('partners_hover');
    });

});