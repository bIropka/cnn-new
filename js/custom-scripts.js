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

    /* universities */

    $('.form-chooser .custom-select').click(function() {

        if($(this).hasClass('active')) {
            $('.form-chooser .custom-select.active').removeClass('active');
        } else {
            $('.form-chooser .custom-select.active').removeClass('active');
            $(this).addClass('active');
        }

    });

    $('.form-chooser .custom-select ul li').click(function() {

        var current = $(this).text();
        $(this).text($(this).parents('.custom-select').find('.current-value').text());
        $(this).parents('.custom-select').find('.current-value').text(current);
        $(this).parents('.custom-select').find('input').attr('value', current);

    });

    var arraySpec = $('.speciality');
    for(var i = 0; i < arraySpec.length; i++) {
        if($(arraySpec[i]).index() > 3) {
            $(arraySpec[i]).fadeOut(0);
        }
    }

    $('.university-specialities .see-all').click(function() {

        var currentArraySpec = $(this).siblings('.speciality');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            for(var j = 0; j < currentArraySpec.length; j++) {
                if($(currentArraySpec[j]).index() > 3) {
                    $(currentArraySpec[j]).fadeOut(300);
                }
            }
        } else {
            $(this).addClass('active');
            for(var k = 0; k < currentArraySpec.length; k++) {
                if($(currentArraySpec[k]).index() > 3) {
                    $(currentArraySpec[k]).fadeIn(300);
                }
            }
        }

    });

    if($(window).width() < 481) {
        $('.university-specialities .speciality:nth-of-type(3)').addClass('hidden');
    } else {
        $('.university-specialities .speciality:nth-of-type(3)').removeClass('hidden');
    }

    $(window).resize(function() {

        if($(window).width() < 481) {
            $('.university-specialities .speciality:nth-of-type(3)').addClass('hidden');
        } else {
            $('.university-specialities .speciality:nth-of-type(3)').removeClass('hidden');
        }

    });

});