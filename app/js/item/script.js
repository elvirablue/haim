$(document).on('ready', function () {
    $("input[name^='user-phone']").mask("+7 (999) 999-9999");
    var owl1 = $('#owl-init');

    owl1.owlCarousel({
        loop: true,//Зацикливаем слайдер
        margin: 50,
        dots: true,
        autoWidth: true,
        nav: true,
        mouseDrag : false,
        touchDrag : false,
        autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        autoplay: false, //Автозапуск слайдера
        smartSpeed: 800, //Время движения слайда
        //autoplayTimeout: 50, //Время смены слайда
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                mouseDrag : true,
                touchDrag : true
            },
            578: {
                dots: true
            },
            991: {
                items: 1,
                mouseDrag : false,
                touchDrag : false
            },
            1200: {
                items: 1
            }
        }
    });
    prevImgSlider();

    $('.owl-prev, .owl-next, .owl-dot').click(function() {
        prevImgSlider();
    });

    function prevImgSlider() {
        var before = $('.slider-prev.before .img');
        var after = $('.slider-prev.after .img');
        before.css('opacity', '0');
        after.css('opacity', '0');
        setTimeout(function () {
            var id = $('.owl-item.active').index();
            var imgBefore = $('.owl-item.active').prev('.owl-item').find('.img').css('backgroundImage');
            var imgAfter = $('.owl-item.active').next('.owl-item').find('.img').css('backgroundImage');
            before.css('backgroundImage', imgBefore);
            after.css('background-image', imgAfter);
        }, 300);
        setTimeout(function () {
            before.css('opacity', '1');
            after.css('opacity', '1');
        }, 600);
    }


    $('.navbar .navbar-nav a, .btn-down').click(function () {
        var el = $(this).attr('href');
        $('html,body').animate({scrollTop: $(el).offset().top - 100}, 600);
        return false;
    });
//при нажатии на ссылку
    $(".navbar-collapse a").click(function () {
        $('.nav-item.active').removeClass('active');
        $(this).parent('.nav-item').addClass('active');
        //если она не имеет класс dropdown-toggle
        if (!$(this).hasClass("dropdown-toggle")) {
            //то закрыть меню
            $(".navbar-collapse").collapse('hide');
        }
    });
    $(window).scroll(function () {
        if (screen.width <= '992') return;
        if ($(window).scrollTop() >= 830) {
            $('.navbar').css({
                position: 'fixed',
                opacity: '1'
            });
            $('.navbar').addClass('navbar-scroll');
        }
        if ($(window).scrollTop() <= 500) {
            $('.navbar').css({
                position: 'static',
                opacity: '1'
            });
            $('.navbar').removeClass('navbar-scroll');

        }
        if ($(window).scrollTop() > 510 && $(window).scrollTop() < 800) {
            $('.navbar').css({
                opacity: '0'
            });
        }
    });
})
;