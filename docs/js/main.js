

var mixer = mixitup('.directions__items');

$('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
})

$('.team__slider').slick({
    slidesToShow: 4,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    appendArrows: $('.team__slider-arrows'),
    waitForAnimate: false,
})

$('.team-slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
})
$('.team-slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
})

