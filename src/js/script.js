
$(function (){
   $("a[href^='#_'").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top-50 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
    $('.js_tabs-navigation .js_tabs-link').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var parent = $(this).closest('.js_tabs');
            parent.find('.activated').removeClass('activated');
            parent.find($(this).addClass('activated').attr('data-tab')).addClass('activated');
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

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            email: {
                required: true,
            },
            body: {
                required: true,
            }
        },
        messages: {
            name: "Name can't be empty.",
            email: {
                required: "Email can't be empty.",
                email: "Email format name@domain.com"
            },
            last_name: "Surname can't be empty.",
            body: "Message can't be empty."
        }
    });

});
