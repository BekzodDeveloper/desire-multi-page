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
    });
});




// function initSlider(){
//     $('.main-content__slides').slick({
//         dots: false,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         autoplay: true
//     })

// };
$(document).ready(function () {
    $('.main-content__slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false

    });
    $('.about__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false

    });
    $('.about-gallery__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false

    });
    $('.blog-page__post-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        draggable: false
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
        draggable: false

    });
});

/*video overlay play button
.blog-page__post-slider
*/

$('#play-video').on('click', function (e) {
    var $video = $('#video');
    src = $video.attr('src');
    $video.attr('src', src + '?autoplay=1');
});

