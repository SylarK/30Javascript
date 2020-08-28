$(function(){

    var currentSlide = 0;
    var delay = 4; //sec
    var maxSlide = $('.banner-single').length - 1;

    initSlider()
    changeSlider()

    function initSlider(){
        $('.banner-single').hide();
        $('.banner-single').eq(0).show();

        for(let i = 0; i < maxSlide + 1; i++){
            var content = $('.bullets').html();

            if( i == 0){
                content+='<span class="active-slider"></span>'
            } else {
                content+='<span></span>';
            }
            $('.bullets').html(content);

        }

    }

    function changeSlider(){

        setInterval(function(){

            $('.banner-single').eq(currentSlide).stop().fadeOut(1800);
            currentSlide++

            //reset
            if(currentSlide > maxSlide){
                currentSlide = 0;
            }

            $('.banner-single').eq(currentSlide).stop().fadeIn(1800);
            $('.bullets span').removeClass('active-slider');
            $('.bullets span').eq(currentSlide).addClass('active-slider');
        

        }, delay * 1000 ) //transform to sec

    }



})