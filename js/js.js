$(document).ready(function () {

    // Whitepaper
    $('.js-header-button').on('click', function (event) {
        $('.js-whitepaper').toggleClass('whitepaper--open');
        event.stopPropagation();
    });

    // Whitepaper
    $('.js-download-whitepaper-button').on('click', function (event) {
        $('.js-download-whitepaper').toggleClass('whitepaper--open');
        event.stopPropagation();
    });

    $('body').on('click', function () {
        $('.js-whitepaper.whitepaper--open').removeClass('whitepaper--open');
        $('.js-download-whitepaper.whitepaper--open').removeClass('whitepaper--open');
    });

    //Team
    var teamMove = $('.js-team__move');
    var bodyWidth = document.body.clientWidth;


    var leftArrow = '<img src="img/left.svg" style="cursor:pointer;" class="slick-prev"/>';
    var rightArrow =  '<img src="img/right.svg"  style="cursor:pointer;" class="slick-next"/>';

    if (teamMove.length) {
        teamMove.slick({
            dots: true,
            infinite: false,
            mobileFirst: true,
            variableWidth: true,
            swipeToSlide: true,
            slidesToScroll: 1,
            prevArrow: leftArrow,
            nextArrow: rightArrow,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 786,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //Advisors
    var advisors_carousel = $('.js-owl-carousel--advisors');

    if (advisors_carousel.length) {

        advisors_carousel.on('changed.owl.carousel', function (event) {
            $('.js-advisors__card.advisors__card--active').removeClass('advisors__card--active');
            $('#advisors_card-' + event.page.index).addClass('advisors__card--active');
        });

        advisors_carousel.owlCarousel({
            items: 1,
            loop: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 30000,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            dots: true,
            nav: true,
            navText: ["<img src='img/left.svg'>","<img src='img/right.svg'>"]
        });

        advisors_carousel.on('mouseleave', function () {
            advisors_carousel.trigger('play.owl.autoplay', [5000])
        });
        advisors_carousel.on('mouseenter', function () {
            advisors_carousel.trigger('stop.owl.autoplay')
        });
    }

    //Media
    var mediaButton = $('.js-media__button');

    if (mediaButton.length) {
        mediaButton.on('click', function () {
            $('.js-media__hide').removeClass('media__hidden');
            mediaButton.addClass('media__hidden')
        })
    }

    // Animated MapRoad
    var wrapBlocksYear = $('.roadmap-timeline__year');

    if (wrapBlocksYear.length) {

        function animateMapRoad() {

            var jsAnimatedClass = 'wow-js-animated';
            var blocksInYearBlocks = [];

            wrapBlocksYear.each(function (index, domElement) {
                blocksInYearBlocks.push($(domElement).find('.js-timeline-block'));
            });

            blocksInYearBlocks.forEach(function (item) {

                item.each(function (index, domElement) {
                    indexNumber = index % 2;

                    switch (indexNumber) {

                        case 0:
                            $(domElement).addClass(jsAnimatedClass + ' ' + 'animated-wow-js-right');
                            break;

                        case 1:
                            $(domElement).addClass(jsAnimatedClass + ' ' + 'animated-wow-js-left');
                            break;

                        default:
                            return;
                    }
                });
            });

            var wow = new WOW(
                {
                    boxClass: jsAnimatedClass,
                    animateClass: 'animated-wow-js',
                    offset: 300,
                    mobile: true,
                    live: false
                }
            );
            wow.init();
        }

        animateMapRoad();
    }

    //Features & FAQ & Pricing
    $('.js-features__button').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $(".js-features").offset().top
        }, 500);
    });
	
	$('.js-faq__button').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $(".js-faq").offset().top
        }, 500);
    });
	
	$('.js-pricing__button').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $(".js-pricing").offset().top
        }, 500);
    });

    //FAQ
    $('.js-token-faq__item').on('click', function () {
        $(this).toggleClass('token-faq__item--active');
        $(this).find('.js-token-faq__answer').toggleClass('token-faq__answer--active');
        $(this).find('.js-token-faq__img').toggleClass('token-faq__img--active');
    });
});
