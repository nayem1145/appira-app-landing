(function($) {
    "use strict"
    jQuery(document).ready(function() {

        //Background Image Set 
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });

        //Header Sticky 
        $(window).on("scroll", function(){
            var ScrollBar = $(this).scrollTop(); 
            if( ScrollBar > 150 ) {
                $(".header-area").addClass("header-sticky"); 
            } else {
                $(".header-area").removeClass("header-sticky");
            }
        });

        //Mobile Menu 
        $(".mobile-menu-open").on("click", function(){
            $(".body-overlay").addClass("overlay-on");
            setTimeout(function(){
                $(".mobile-menu").addClass("mobile-menu-on");
            }, 500)
            
        });
        
        $(".mobile-menu-close").on("click", function(){
            $(".mobile-menu").removeClass("mobile-menu-on");
            setTimeout(function(){
                $(".body-overlay").removeClass("overlay-on");
            }, 500);
        });

        $(".body-overlay").on("click", function(){
            $(".mobile-menu").removeClass("mobile-menu-on");
            setTimeout(function(){
                $(".body-overlay").removeClass("overlay-on"); 
            }, 500);
        }); 

        $(".mobile-navigation ul li.has-submenu > a").each(function(){
            $(this).on("click", function(){
                $(this).siblings("ul").slideToggle();
            });
        });

        //ScrollTop
        $(window).on("scroll", function(){
            var ScrollOffset = $(this).scrollTop(); 
            if ( ScrollOffset > 150 ) {
                $(".scrolltop-btn").addClass("open"); 
            } else {
                $(".scrolltop-btn").removeClass("open");
            }
        });

        $(".scrolltop-btn").on("click", function(e){
            e.preventDefault();
            $("body,html").animate({
                scrollTop: 0, 
            }); 
        });

        //ScrollToSection 
        // $(".desktop-navigation ul li a, .mobile-navigation ul li a").on('click', function(event) {
        //     if (this.hash !== "") {
        //         event.preventDefault();
        //         var hash = this.hash;
        //         $('html, body').animate({
        //             scrollTop: $(hash).offset().top
        //         }, 800, function(){
        //             window.location.hash = hash;
        //         });
        //     }
        // });

        //Change Active Nav With Scroll
        $(window).on("scroll", function(){
            var ScrollBar = $(this).scrollTop();
            $(".desktop-navigation.scroll-effect ul li a").each(function(){
                if( this.hash !== "" ){

                    var offsetTop = $(this.hash).offset().top - 100; 
                    
                    if ( ScrollBar > offsetTop ) {
                        $(this).parents("ul").find("a.active").removeClass("active");
                        $(this).addClass("active");
                    }
                    if ( ScrollBar < 150 ) {
                        $(this).removeClass("active"); 
                        $(this).parents("ul").children().first().children().first().addClass("active");
                    }
                }
            });
        });

        //Hero Slider 
        $(".hero-slider").slick({
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1, 
            dots: true, 
            arrows: false,
            fade: true,

        });

        //Feedback Slider 
        $(".feedback-slider").slick({
            slidesToShow: 3, 
            slidesToScroll: 1, 
            autoplay: true, 
            prevArrow: '<button type="button" class="prev-btn"><i class="fas fa-arrow-left"></i></button>"', 
            nextArrow: '<button type="button" class="next-btn"><i class="fas fa-arrow-right"></i></button>"', 
            responsive: [
                {
                    breakpoint: 900, 
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


        //Team Slider 
        $(".team-slider").slick({
            slidesToShow: 4, 
            slidesToScroll: 2, 
            autoplay: true,
            arrows: false, 
            dots: true,
            responsive: [
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 460, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        //Screenshot
        var screenSlideLength = $(".screen-slider .swiper-slide").length;
        if (screenSlideLength > 0 ) {
            var swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                loop: true,
                paginationClickable: true,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 6,
                  depth: 150,
                  modifier: 1,
                  slideShadows: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
            });
        }

        //Odometer 
        function odometerStart() {
            var counterup = $(".odometer"); 
            counterup.each(function(){
                var dataValue = $(this).attr('data-value'); 
                $(this).text(dataValue);
            });
        }

        $(window).on("load", function(){
            var odometer = $(".odometer"); 
            odometer.each(function(){
                var odometerContainer = $(this).parents(".statistics-column"); 
                var ColumnOffset = odometerContainer.offset().top; 
                var WinHeight = $(window).height();
                var ScrollBar = $(window).scrollTop();
                var MainOffset = ColumnOffset - WinHeight; 
                if(MainOffset < ScrollBar ) {
                    odometerStart(); 
                }
                
            });
        });         

        $(window).on("scroll", function(){
            var odometer = $(".odometer"); 
            odometer.each(function(){
                var odometerContainer = $(this).parents(".statistics-column"); 
                var ColumnOffset = odometerContainer.offset().top; 
                var WinHeight = $(window).height();
                var ScrollBar = $(window).scrollTop();
                var MainOffset = ColumnOffset - WinHeight; 
                if(MainOffset < ScrollBar ) {
                    odometerStart(); 
                }
                
            });

        }); 

        //Video Popup 
        $('.video-popup').magnificPopup({
            type: 'iframe', 
            iframe: {
                patterns: {
                  youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                  },
                  gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                  }
              
                },
                srcAction: 'iframe_src', 
              }
          });
        

        //Blog Slider
        $(".blog-slider").slick({
            slidesToShow: 3, 
            autplay: true, 
            arrows: false, 
            dots: true, 
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $(".blog-thumb-slider").slick({
            slidesToShow: 1, 
            autoplay: true,
            prevArrow: '<button class="prev-btn"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="next-btn"><i class="fas fa-angle-right"></i></button>',
        });


    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });
})(jQuery);
