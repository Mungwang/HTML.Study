$('.logo').click(function(){
    $('.tt h2').removeClass('open');
    $('.tt p').slideUp();
    $('.tt img').fadeOut(200);    
});

$('.tt').click(function(){
    
    var me = $(this).children('h2');
    var bros = $(this).siblings().children('h2');
    
    if(me.hasClass('open')==true){
        me.removeClass('open');
        me.next().slideUp();
        me.prev().fadeOut(200);
    }else{
        me.addClass('open');
        bros.removeClass('open');
        
        me.next().slideDown();
        bros.next().slideUp();
        
        me.prev().fadeIn(200);
        bros.prev().fadeOut(200);
        
    }
});

    /*(내기준으로 전은 prev 후는 next)*/
