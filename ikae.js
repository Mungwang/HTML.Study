var current = 0;
var count = $('.wall_list li').size()-1

$('.wall_list li').click(function(){
   
    var name= $(this).children().attr('title');
    $('.title').text(name);
    
    var src = $(this).children().attr('src');
    $('.wall').css('background-image','url('+src+')');               /*url( < + 더하고 src에 >) 더해야 작동 그래서 +src+를 입력해야함. */
    
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
    
    current = $(this).index();
});

$('.wall_list li').eq(0).click()

$('.left').click(function(){
    current-=1;
    
    if(current<0){
        current=count;
    }
    
    $('.wall_list li').eq(current).click()
})

$('.right').click(function(){
    current+=1;
    
    if(current>count){
      current=0;  
    };
     $('.wall_list li').eq(current).click()
})