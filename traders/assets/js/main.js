(function($) {
    "use strict";

    /* Wow JS */
    new WOW().init();

    /* onePageNav */
    $(".main-menu-area").onePageNav();
	
	/* meanmenu */
    jQuery('#mobile-nav').meanmenu();

    /* Preloading JS */
    $(window).load(function() {
        $('.preloader-wrap').fadeOut('500', function() {
            $(this).remove();
        });
    });

    /* owlCarousel for testimonial */
    $(".our-pro-active").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class=' fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    /* owlCarousel for Brand */
    $(".brand-active").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 6,
                nav: false,
                loop: true
            }
        }
    }); 
	
    /* sticky nav */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 600) {
            $(".main-menu-area").removeClass("sticky");
        } else {
            $(".main-menu-area").addClass("sticky");
        }
    }); 
	
    /* ScrollToTop JS */
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 500) {
            $('.scroll-to-top').fadeIn('slow');
        } else {
            $('.scroll-to-top').fadeOut('slow');
        }
    });
    $('.scroll-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });  
   
    /* Smooth scroll Js*/
    $('.navbar-nav li a, .home-arrow-down a').on('click', function(event) {
        $('.navbar-nav li a, .home-arrow-down a').parent().removeClass('active');
        var $anchor = $($(this).attr('href')).offset().top - 60;
        $(this).parent().addClass('active');
        $('body, html').animate({
            scrollTop: $anchor
        }, 800);
        event.preventDefault();
        return false;
    }); 
	
})(jQuery);