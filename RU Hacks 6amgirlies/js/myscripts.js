$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    
    if(scrollPos > $('.rotate-in-demo').offset().top-500){
        $('.rotate-in-demo').find('.box').addClass('rotateFade');
   
    } else {
        $('.rotate-in-demo').find('.box').removeClass('rotateFade');
    }

});

var scrollOptions = {
    delay: 375,
    interval: 125,
    reset: true,
    duration: 500,
};

ScrollReveal().reveal('.box', scrollOptions);