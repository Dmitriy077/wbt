//Слайдеры
	
	// Слайдер новостей главная
$(function() {
	$('.news_slider_slick').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveWidth: true,
		variableWidth: true,
		appendArrows:'.news_arrows',
		prevArrow:'<div class="news_arrows_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:'<div class="news_arrows_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});
	
	//Слайдер товаров главная
	$('.filters_article_slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveWidth: true,
		variableWidth: true,
		appendArrows:'.filters_arrows',
		prevArrow:'<div class="filters_arrows_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:'<div class="filters_arrows_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});

	// Главный слайдер
	$('.main_slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

	// Слайдер акксессуаров в карточке товара
	$('.productCard_accessories_slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveWidth: true,
		variableWidth: true,
		appendArrows:'.productCard_accessories_arrows',
		prevArrow:'<div class="productCard_accessories_arrows_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:'<div class="productCard_accessories_arrows_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});

	// Слайдер товаров в карчтоке товара
	$('.otherFiltrationSystems_slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveWidth: true,
		variableWidth: true,
		appendArrows:'.otherFiltrationSystems_arrows',
		prevArrow:'<div class="otherFiltrationSystems_arrows_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:'<div class="otherFiltrationSystems_arrows_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});


	//Медиа слайдер акссесуаров в системах фильтрации
	$('.accessories_list_slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		adaptiveWidth: true,
		variableWidth: true,
		// appendArrows:'.otherFiltrationSystems_arrows',
		// prevArrow:'<div class="otherFiltrationSystems_arrows_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		// nextArrow:'<div class="otherFiltrationSystems_arrows_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});
});

//



// Медиа запрос для слайдера

if(window.matchMedia('(max-width: 600px)').matches){
	$('.accessories_list').addClass('accessories_list_slider');
	} else {
		$('.accessories_list').removeClass('accessories_list_slider');
	}



// Показать еще 6 - Система фильтрации

$('.view6').on('click', function() {
	$('.list_articles_margin').css('display', 'block');
});


// Футер медиа

$('.footer_info_filters_main').on('click', function() {
	if ($('.footer_info_filters_a').hasClass('displayNone_media')) {
		$('.footer_info_filters_a').removeClass('displayNone_media');
	} else {
		$('.footer_info_filters_a').addClass('displayNone_media');
	}
});

$('.footer_info_technologies_main').on('click', function() {
	if ($('.footer_info_technologies_a').hasClass('displayNone_media')) {
		$('.footer_info_technologies_a').removeClass('displayNone_media');
	} else {
		$('.footer_info_technologies_a').addClass('displayNone_media');
	}
});



// хэдер медиа

$('.header_nav_media').on('click', function() {
	if ($('.header_nav_nav').hasClass('displayNone_media')) {
		$('.header_nav_nav').removeClass('displayNone_media');
	} else {
		$('.header_nav_nav').addClass('displayNone_media');
	}


	if ($('.header_nav_contacts').hasClass('displayNone_media')) {
		$('.header_nav_contacts').removeClass('displayNone_media');
	} else {
		$('.header_nav_contacts').addClass('displayNone_media');
	}
});


// Брэдкрамбс

$('.productCard_breadcrumb').on('click', function() {
	if ($('.productCard_breadcrumb_hide').hasClass('displayNone_media')) {
		$('.productCard_breadcrumb_hide').removeClass('displayNone_media');
	} else {
		$('.productCard_breadcrumb_hide').addClass('displayNone_media');
	}

});


// Читать полностью медиа карточка товара

$('.productCard_content_text_more').on('click', function() {
	if ($('.productCard_content_text_hide').hasClass('displayNone_media')) {
		$('.productCard_content_text_hide').removeClass('displayNone_media');
		$('.productCard_content_text_more').addClass('displayNone_media');
	} else {
		$('.productCard_content_text_hide').addClass('displayNone_media');
	}

});

// Дропдаун


$(function() {

	$('.filters_appoint_dropdown').dropdown({
		toggleText: 'По назначению',
		// followLinks: false
	});
});

// Табы карточка товара

$('.description_characteristics').on('click', function() {
	$('.description_tabs_content_description').addClass('display_none');
	$('.description_description').removeClass('description_tabs_line');
	$('.description_description').removeClass('description_tabs_active');

	$('.description_tabs_content_advantage').addClass('display_none');
	$('.description_advantage').removeClass('description_tabs_line');
	$('.description_advantage').removeClass('description_tabs_active');

	$('.description_tabs_content_characteristics').removeClass('display_none');
	$('.description_characteristics').addClass('description_tabs_line');
	$('.description_characteristics').addClass('description_tabs_active');
});

$('.description_advantage').on('click', function() {
	$('.description_tabs_content_description').addClass('display_none');
	$('.description_description').removeClass('description_tabs_line');
	$('.description_description').removeClass('description_tabs_active');

	$('.description_tabs_content_advantage').removeClass('display_none');
	$('.description_advantage').addClass('description_tabs_line');
	$('.description_advantage').addClass('description_tabs_active');

	$('.description_tabs_content_characteristics').addClass('display_none');
	$('.description_characteristics').removeClass('description_tabs_line');
	$('.description_characteristics').removeClass('description_tabs_active');
});

$('.description_description').on('click', function() {
	$('.description_tabs_content_description').removeClass('display_none');
	$('.description_description').addClass('description_tabs_line');
	$('.description_description').addClass('description_tabs_active');

	$('.description_tabs_content_advantage').addClass('display_none');
	$('.description_advantage').removeClass('description_tabs_line');
	$('.description_advantage').removeClass('description_tabs_active');

	$('.description_tabs_content_characteristics').addClass('display_none');
	$('.description_characteristics').removeClass('description_tabs_line');
	$('.description_characteristics').removeClass('description_tabs_active');
});

$(document).ready(function() {
	$("#phone_main").mask("+7 (999) 999-9999");
	$("#phone_systemFiltered").mask("+7 (999) 999-9999");
	$("#phone_about").mask("+7 (999) 999-9999");
	$("#phone_productCard").mask("+7 (999) 999-9999");
});
//
ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
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