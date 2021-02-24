$(function() {

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });
    // for navbar background color when scrolling
    $(window).scroll(function() {
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".back-top-btn");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 10) {
            stickytop.addClass('navcss');
        } else {
            stickytop.removeClass('navcss');
        }

        if ($scrolling > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });

    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    // Preloader js    
    $(window).on('load', function() {
        $('.preloader').delay(1500).fadeOut(500);

    })


    //service slider
    $('.ser_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //team slider
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // this is for back to top and sticky menu js
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function() {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });



});