$('.rightside-menu__btn').on('click', function () {
    console.log('Hello!');
})


$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__btn-close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });


    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');

        $('.main').toggleClass('main--class');
        console.log('class');
    });

});



$(document).ready(function () {
    $('.main-content__slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: true

    });
    $('.about__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.about-gallery__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    $('.blog-page__post-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        draggable: true
        // prevArrow: false,
        // nextArrow: false
    });
    $('.contact-page-gallery__slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,


                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]

    });
});

$('#play-video').on('click', function (e) {
    var $video = $('#video');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
});

