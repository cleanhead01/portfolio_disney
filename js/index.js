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

    // 스크롤 했을 때 해당 구역의 위치가 네비버튼에 표시되기
    var sct;
    $(window).scroll(function(){
        sct = $(this).scrollTop()
        var art1 = $('.article1').offset().top
        var art2 = $('.article2').offset().top
        var art3 = $('.article3').offset().top
        var art4 = $('.article4').offset().top
        var art5 = $('.article5').offset().top

        if (sct < art2) {
            // console.log($('.article2').offset().top)
            $('.nav-button-box ul li').siblings().removeClass('on')
            $('.nav-button-box ul li').eq(0).addClass('on')
        } else if (sct >= art2 && sct < art3) {
            // console.log($('.article2').offset().top)
            $('.nav-button-box ul li').siblings().removeClass('on')
            $('.nav-button-box ul li').eq(1).addClass('on')
        } else if (sct >= art3 && sct < art4) {
            // console.log($('.article3').offset().top)
            $('.nav-button-box ul li').siblings().removeClass('on')
            $('.nav-button-box ul li').eq(2).addClass('on')
        } else if (sct >= art4 && sct < art5) {
            $('.nav-button-box ul li').siblings().removeClass('on')
            $('.nav-button-box ul li').eq(3).addClass('on')
        } else if (sct >= art5) {
            $('.nav-button-box ul li').siblings().removeClass('on')
            $('.nav-button-box ul li').eq(4).addClass('on')
        }

    })

    // var sch1 = $('section').eq(0).outerHeight()
    // var sch2 = $('section').eq(1).outerHeight()
    // var sch3 = $('section').eq(2).outerHeight()
    // var sch4 = $('section').eq(3).outerHeight()
    // function currNav (){
    //     if(sct < sch1){
    //         $('.nav li').eq(0).addClass('focus')
    //         $('.nav li').eq(0).siblings().removeClass('focus')
    //         $('.left-nav ul a').eq(0).addClass('on')
    //         $('.left-nav ul a').eq(0).siblings().removeClass('on')
    //         $('.prev-arrow').stop().animate({opacity: '0s'}, 500)
    //         $('.next-arrow').stop().animate({opacity: '1'}, 500)
    //     } else if(sct>=sch1 && sct<sch1+sch2){
    //         $('.nav li').eq(1).addClass('focus')
    //         $('.nav li').eq(1).siblings().removeClass('focus')
    //         $('.left-nav ul a').eq(1).addClass('on')
    //         $('.left-nav ul a').eq(1).siblings().removeClass('on')
    //         $('.prev-arrow').stop().animate({opacity: '1'}, 500)
    //         $('.next-arrow').stop().animate({opacity: '1'}, 500)
    //         $('.skill ul').css({display: 'inline-block'}).stop().animate({opacity: '1'}, 500)
    //     } else if(sct>=sch1+sch2 && sct<sch1+sch2+sch3){
    //         $('.nav li').eq(2).addClass('focus')
    //         $('.nav li').eq(2).siblings().removeClass('focus')
    //         $('.left-nav ul a').eq(2).addClass('on')
    //         $('.left-nav ul a').eq(2).siblings().removeClass('on')
    //         $('.prev-arrow').stop().animate({opacity: '1'}, 500)
    //         $('.next-arrow').stop().animate({opacity: '1'}, 500)
    //     } else if(sct>=sch1+sch2+sch3 && sct<sch1+sch2+sch3+sch4){
    //         $('.nav li').eq(3).addClass('focus')
    //         $('.nav li').eq(3).siblings().removeClass('focus')
    //         $('.left-nav ul a').eq(3).addClass('on')
    //         $('.left-nav ul a').eq(3).siblings().removeClass('on')
    //         $('.prev-arrow').stop().animate({opacity: '1'}, 500)
    //         $('.next-arrow').stop().animate({opacity: '1'}, 500)
    //     } else if(sct>=sch1+sch2+sch3+sch4){
    //         $('.nav li').eq(4).addClass('focus')
    //         $('.nav li').eq(4).siblings().removeClass('focus')
    //         $('.left-nav ul a').eq(4).addClass('on')
    //         $('.left-nav ul a').eq(4).siblings().removeClass('on')
    //         $('.prev-arrow').stop().animate({opacity: '1'}, 500)
    //         $('.next-arrow').stop().animate({opacity: '0'}, 500)
    //     }
    // }
    // currNav()


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