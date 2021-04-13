$('.rightside-menu__btn').on('click', function () {
    console.log('Hello!');
})

// function initSlider(){
//     $('.main-content__slides').slick({
//         dots: false,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         autoplay: true
//     })

// };
$(document).ready(function(){
    $('.main-content__slides').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplay: true
    });
});

