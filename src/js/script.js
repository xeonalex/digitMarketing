console.log('hello from script.js');

$(function (){

    $('.js_tabs-navigation .js_tabs-link').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var parent = $(this).closest('.js_tabs');
            parent.find('.activated').removeClass('activated');
            parent.find($(this).addClass('activated').attr('data-tab')).slideDown('fast', function (){
                $(this).addClass('activated').attr('style', '');
            })
        return false;
    });
    $('.js_open-menu').click(function(event) {
    	/* Act on the event */
    	event.preventDefault();
    	$('.js_menu').addClass('opened')
    	return false;
    });
    $('.js_close-menu').click(function(event) {
    	event.preventDefault();
    	$('.js_menu').removeClass('opened')
    	return false;
    });

})