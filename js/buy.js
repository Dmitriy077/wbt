ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [55.7, 37.6],
        zoom: 10,
        controls: []
    });

    

    // Создание метки с круглой активной областью.
    var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="company compani_js">3</div></div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.783202, 37.605584], {
            hintContent: 'Метка с круглым HTML макетом'
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
    $('.company').addClass('company_hover');
    });
    circlePlacemark.events.add('mouseleave', function () {
    $('.company').removeClass('company_hover');
    });


   
});
