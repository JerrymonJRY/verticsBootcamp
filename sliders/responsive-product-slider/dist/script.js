$(document).ready(function() {
    // Initialize the owl-carousel instance
    var owl = $("#owl-demo");

    // Initialize owlCarousel with the settings
    owl.owlCarousel({
        autoplay: true, // Enable auto play
        autoplayTimeout: 3000, // Set auto scroll speed to 3 seconds
        items: 4, // 4 items for desktop
        itemsDesktop: [1000, 4], // 4 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // 3 items between 900px and 601px
        itemsTablet: [600, 1], // 1 item between 600px and 0
        itemsMobile: false, // itemsMobile disabled, inherits from itemsTablet
        pagination: false, // Disable pagination
        center: true, // Center items on mobile view
        responsive: {
            0: {
                items: 1, // 1 item for mobile view
                center: true // Center the item
            },
            600: {
                items: 1, // 1 item for tablet view
                center: true // Center the item
            },
            1000: {
                items: 4, // 4 items for desktop
                center: false // No centering on desktop
            }
        }
    });

    // Stop carousel on hover over any .item (desktop and mobile/tablet)
    $("#owl-demo .item").hover(
        function() {
            owl.trigger('stop.owl.autoplay'); // Stop auto scroll on hover
        },
        function() {
            owl.trigger('play.owl.autoplay', [3000]); // Resume auto scroll after hover
        }
    );

    // Adding touchstart and touchend for mobile/tablet devices
    $("#owl-demo").on('touchstart', function() {
        owl.trigger('stop.owl.autoplay'); // Stop auto scroll on touch start
    }).on('touchend', function() {
        owl.trigger('play.owl.autoplay', [3000]); // Resume auto scroll after touch end
    });

    // Next and Previous buttons
    $(".next").click(function() {
        owl.trigger('next.owl.carousel'); // Trigger next item
    });

    $(".prev").click(function() {
        owl.trigger('prev.owl.carousel'); // Trigger previous item
    });
});
