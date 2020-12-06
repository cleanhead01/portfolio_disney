(function($){

    // $(window).load(function(){
    //     $('.loading-box').delay(500).fadeOut(500)
    // })


    // 로딩화면
    var percentage = 0
    var setTimer = setInterval(timer, 20)
    function timer() {
        percentage++
        // 얼굴 색 채우기
        $('.loading-box .loading .face span').css({
            width: percentage+'%'
        })
        // 귀 색 채우기
        $('.loading-box .loading .ear span').css({
            width: percentage+'%'
        })
        // 100%까지 가면 사라지기
        if (percentage === 101) {
            clearInterval(setTimer)
            $('.loading-box').fadeOut(800)
            return false
        }
        // 퍼센트 숫자세기
        $('.loading-box .percentage p').text(percentage+'%')
    }


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
        }, 500)
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