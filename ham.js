var sp=1000;

var fall=function(){
    $('.main img').fadeOut(sp);
    $('.main_img').toggleClass('show',sp,'easeOutElastic');
}
    $('.logo').click(fall);
