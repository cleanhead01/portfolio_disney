(function($){

    // 왼쪽 네비버튼 클릭하면 해당 구역으로 가기
    $('.nav-button-box ul li').on('click', function(){
        var index = $(this).index()
        var zero = 0
        for(var i=0; i < index; i++){
            var artHight = $('article').eq(i).outerHeight()
            zero += artHight
        }
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
        $('body, html').stop().animate({
            scrollTop: zero
        }, 800)
        return false
    })

    // 공주들 얼굴 클릭하면 나오는 설명메뉴
    $('.article3 .princess a').on('click', function(){
        $(this).next().slideDown(500)
        return false
    })

    $('.article3 .princess-content-box .princess-content .close-box').on('click', function(){
        $(this).parents('.princess-content-box').hide()
    })

    // 슬라이드 --------------------------------------------------------------------   
    $('.slide-inner-txt').slick({
        autoplay : true,
        autoplaySpeed : 3000,
        dots : false,
        speed : 800,
        centerMode: false,   // centerMode 는 slidesToScroll 값이 1값으로 고정되어 있음
        centerPadding: '0px',  // 좌우측 끝에 보여질 슬라이드 조각의 너비값
        slidesToScroll : 1,
        slidesToShow : 1,
        pauseOnHover : false,
        pauseOnDotsHover : false,
        pauseOnFocus : false,
        draggable : false,
        arrows : false,
        prevArrow : '<button class="prev arr"><i class="fas fa-arrow-left"></i></button>',
        nextArrow : '<button class="next arr"><i class="fas fa-arrow-right"></i></button>',
    })

    $('.slide-inner-img').slick({
        autoplay : true,
        autoplaySpeed : 3000,
        dots : false,
        speed : 800,
        centerMode: false,   // centerMode 는 slidesToScroll 값이 1값으로 고정되어 있음
        centerPadding: '0px',  // 좌우측 끝에 보여질 슬라이드 조각의 너비값
        slidesToScroll : 1,
        slidesToShow : 4,
        pauseOnHover : false,
        pauseOnDotsHover : false,
        pauseOnFocus : false,
        draggable : false,
        arrows : false,
        prevArrow : '<button class="prev arr"><i class="fas fa-arrow-left"></i></button>',
        nextArrow : '<button class="next arr"><i class="fas fa-arrow-right"></i></button>',
    })



})(jQuery)