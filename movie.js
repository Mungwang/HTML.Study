var a = 0;
var count = $('.wall_list li').size()-1

$('.wall_list li').click(function(){
   
    var name= $(this).children().attr('title');
    $('.title').text(name);
    
    var src = $(this).children().attr('src');
    $('.wall').css('background-image','url('+src+')');          
    
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
    
    current = $(this).index();
});

$('.wall_list li').eq(6).click()   /*< eq에 0 번째를 클릭한상태로 시작화면을 해줘*/

$('.left').click(function(){
    a-=1;
    
    if(a<0){
        a=count;
    }
    
    $('.wall_list li').eq(a).click()
})

$('.right').click(function(){
    a+=1;
    
    if(a>count){
      a=0;  
    };
     $('.wall_list li').eq(a).click()
})