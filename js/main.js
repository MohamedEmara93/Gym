$('.block').smoove({ offset: '30%' });
////////////////////////////////// OUR TEAM /////////////////////
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2,
            margin: 5
        },
        1000: {
            items: 3
        }
    }
});
////////////////////////////////////////////////////
let aboutOffset = $('#about').offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffset - 50) {
        $('#header').css('clip-path', 'none');
        $('#nav').css('background', '#303030');
        $('#btnUp').fadeIn(200);
    } else {
        $('#header').css('clip-path', 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)')
        $('#nav').css('background', 'transparent')
        $('#btnUp').fadeOut(100)
    }
})