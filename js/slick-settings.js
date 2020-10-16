jQuery(function($) {
	$('.slider').slick({
    	asNavFor:'.samnails',
	});
	$('.samnails').slick({
		arrows:false,
    	asNavFor:'.slider',
    	focusOnSelect: true,
    	slidesToShow:8,
    	slidesToScroll:1,
	});    
});
