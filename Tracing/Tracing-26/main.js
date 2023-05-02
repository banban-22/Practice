$(function(){

    $('#slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '18%',
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerMode: false
                }
            }
        ]
    });
});