$(document).ready(function() {

    if ($(window).width() < '1171'){

        $('.sign-block').appendTo('nav');
        $('.header-phone').appendTo('nav');
        $('.header-hours').appendTo('nav');

    } else {

        $('.header-phone').appendTo('.header-info');
        $('.header-hours').appendTo('.header-info');
        $('.sign-block').appendTo('.header-info');

    }

    $(window).resize(function(){

        if ($(window).width() < '1171'){

            $('.sign-block').appendTo('nav');
            $('.header-phone').appendTo('nav');
            $('.header-hours').appendTo('nav');

        } else {

            $('.header-phone').appendTo('.header-info');
            $('.header-hours').appendTo('.header-info');
            $('.sign-block').appendTo('.header-info');

        }

    });

    $('.burger').click(function () {

        var burger = $(this);

        $('nav').toggleClass('active');

        setTimeout(function() {
            $(burger).toggleClass('active');
        }, 300);

    });

});