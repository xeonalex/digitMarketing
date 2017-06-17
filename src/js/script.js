console.log('hello from script.js');

$(function (){

    $('.js_tabs-navigation .js_tabs-link').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var parent = $(this).closest('.js_tabs');
            parent.find('.activated').removeClass('activated');
            parent.find($(this).addClass('activated').attr('href')).slideDown('fast', function (){
                $(this).addClass('activated').attr('style', '');
            })
        return false;
    });
})