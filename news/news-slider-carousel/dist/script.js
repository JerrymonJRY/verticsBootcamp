$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: false, // Hide navigation
        pagination: true,
        autoPlay: true
    });

    // Stop autoplay on hover
    $(".post-slide").on('mouseover', function() {
        $(this).trigger('stop.owl.autoplay');
    });

    $(".post-slide").on('mouseleave', function() {
        $(this).trigger('play.owl.autoplay');
    });
});
