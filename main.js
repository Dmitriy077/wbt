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

if(window.matchMedia('(max-width: 500px)').matches){
	$('.accessories_list').addClass('accessories_list_slider');
	} else {
		$('.accessories_list').removeClass('accessories_list_slider');
	}



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

//