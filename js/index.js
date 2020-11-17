(function($){


    $('.article3 .princess a').on('click', function(){
        $(this).next().slideDown(500)
        return false
    })

    $('.article3 .princess-content-box .princess-content .close-box').on('click', function(){
        $(this).parents('.princess-content-box').hide()
    })

    // 슬라이드 --------------------------------------------------------------------   
    $('.slide-inner').slick({
        autoplay : true,
        autoplaySpeed : 3000,
        dots : false,
        speed : 500,
        centerMode: true,   // centerMode 는 slidesToScroll 값이 1값으로 고정되어 있음
        centerPadding: '0px',  // 좌우측 끝에 보여질 슬라이드 조각의 너비값
        slidesToScroll : 1,
        slidesToShow : 5,
        pauseOnHover : false,
        pauseOnDotsHover : false,
        pauseOnFocus : true,
        draggable : true,
        arrows : false,
        prevArrow : '<button class="prev arr"><i class="fas fa-arrow-left"></i></button>',
        nextArrow : '<button class="next arr"><i class="fas fa-arrow-right"></i></button>',
    })



})(jQuery)