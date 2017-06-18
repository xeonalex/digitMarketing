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
            name: "Ім'я не може бути порожнім.",
            email: {
                required: "Email не може бути порожнім.",
                email: "Email адреса повинна бути у форматі, типу name@domain.com"
            },
            last_name: "Прізвище не може бути порожнім.",
            body: "Повідомлення не може бути порожнім."
        }
    });

});