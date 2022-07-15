var width = 0;
var milk = 200;

var long = function(){
    
    if(width>=1000 || width<=100){
        $('.joule').addClass('end')
    }else{
        $('.joule').removeClass('end')
    }
    
    $('.height').text(width+'M');
    $('.joule').css('width',width);
}
long();

$('.arr_right').click(function(){
    
    if(width<1000){
        width += milk;
        long();
    }else{
        $('.joule').effect('bounce');
    }
});

$('.arr_left').click(function(){
    
    if(width>200){
        width-=milk;
        long();
    }else{
        $('.joule').effect('pulsate')
    }    
});