(function($){

        
    $(window).scroll(function(){
        var sct = $(this).scrollTop()

        console.log($(this).scrollTop())
        if (sct > 0 && sct <= 120) {
            $('.seok-logo-big-box').css({
                transform : 'scale(0.8)',
                transition : 'all 0.5s'
            })
            $('.article1 video').css({
                transform : 'scale(0.93)',
                marginTop : '-70px',
                transition : 'all 0.3s'
            })
            $('.header-box .seok-logo-box').hide()
        } else if (sct > 120 && sct <= 230) {
            $('.seok-logo-big-box').css({
                transform : 'scale(0.4)',
                transition : 'all 0.5s'
            })
            $('.article1 video').css({
                transform : 'scale(0.96)',
                transition : 'all 0.1s'
            })
            $('.header-box .seok-logo-box').hide()
        } else if (sct > 230 && sct <= 300) {
            $('.seok-logo-big-box').css({
                transform : 'scale(0)',
                transition : 'all 0.1s'
            })
            $('.article1 video').css({
                transform : 'scale(1)',
                transition : 'all 0.1s'
            })
            $('.header-box .seok-logo-box').show(0)
        } else if (sct === 0) {
            $('.seok-logo-big-box').css({
                transform : 'scale(1)',
                transition : 'all 0.5s'
            })
            $('.article1 video').css({
                transform : 'scale(0.9)',
                marginTop : '-50px',
                transition : 'all 0.1s'
            })
            $('.header-box .seok-logo-box').hide()
        }

    })

})(jQuery)