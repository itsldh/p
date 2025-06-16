$(function(){
    // let isPage2Loaded = false; //[주영]2페이지 인지 아닌지 판단할 변수 설정
    $('#main').fullpage({
        anchors : ['page1', 'page2', 'page3'],
        navigation : true,
        navigationTooltips : ['HOME', 'POTFOLIO', 'ABOUT'],
        keyboardScrolling : false,
        responsiveWidth : 800,
        afterLoad : function(anchorLink, index){
            if (index !== 1) {
                $('header').fadeIn(200);
            } else if (index == 1) {
                $('header').fadeOut(200);
            }
            
            if (index == 2) {
                // isPage2Loaded = true;
                $('.p-midside-list li').eq(0).trigger('click')
                $('.video').eq(0).find('iframe').attr('src', "https://www.youtube.com/embed/gFcyhltNa1M?vq=hd1920&muted=1&playsinline=1&cc_load_policy=0&autoplay=1")
            }
        },
    })
    $('.p-midside-list li').click(function(e){
        e.preventDefault()
        $(this).addClass('on').siblings().removeClass('on')
        
        let idx = $(this).index()
        $('.p-midside .sub').removeClass('on')
        $('.p-midmain .video').removeClass('on')
        $('.sub').eq(idx).addClass('on')
        $('.video').eq(idx).addClass('on')
        // 자동 재생
        let iframe = $('.video').eq(idx).find('iframe');
        let currentSrc = iframe.attr('src');
    
        // 자동 재생용 src에 autoplay 파라미터 추가 (기존 src에 autoplay=1이 없음)
        if (currentSrc.indexOf('autoplay=1') === -1) {
            let newSrc = currentSrc + (currentSrc.indexOf('?') !== -1 ? '&' : '?') + 'autoplay=1';
            iframe.attr('src', newSrc);
        }
    })
    //강제 이벤트 발생
    // $('.p-midside-list li').eq(0).trigger('click')

})
