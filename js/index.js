(function($){

        
    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var scw = $(this).width()
        // var videoNear = $('article1').offset().top - $(this).height()/2

        console.log($(this).scrollTop())
        if (sct > 0 && sct <= 120) {
            $('.seok-logo-big-box img').css({
                transform : 'scale(0.7)',
                transformOrigin : 'bottom',
                transition : 'all 1s'
            })
            $('.article1 video').css({
                transform : 'scale(0.93)',
                transition : 'all 0.3s'
            })
            $('.header-box .seok-logo-box').hide()
        } else if (sct > 120 && sct <= 230) {
            $('.seok-logo-big-box img').css({
                transform : 'scale(0.4)',
                transformOrigin : 'bottom',
                transition : 'all 1s'
            })
            $('.article1 video').css({
                transform : 'scale(0.96)',
                transition : 'all 0.1s'
            })
            $('.header-box .seok-logo-box').hide()
        } else if (sct > 230 && sct <= 300) {
            $('.seok-logo-big-box img').css({
                transform : 'scale(0)',
                transformOrigin : 'bottom',
                transition : 'all 0s'
            })
            $('.article1 video').css({
                transform : 'scale(1)',
                transition : 'all 0.1s'
            })
            $('.header-box .seok-logo-box').delay(500).show()
        } else if (sct === 0) {
            $('.seok-logo-big-box img').css({
                transform : 'scale(1)',
                transformOrigin : 'bottom',
                transition : 'all 0.5s'
            })
            $('.article1 video').css({
                transform : 'scale(0.9)',
                transition : 'all 0.1s'
            })
            $('.header-box .seok-logo-box').hide()
        }

    })

})(jQuery)