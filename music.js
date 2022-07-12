$('.title').click(function(){
    $(this).next().slideDown();    
});

$('.music_list li').click(function(){
    var txt = $(this).text();
                                            /*li이의 위에 부모(parent) 그전에꺼 prev*/
    $(this).parent().prev().text(txt);
    $(this).parent().slideUp();
    
                                            /*index는 순서,번호를 나타낼때 0 1 2*/
     var num = $(this).index();
    
    $('.cd img').eq(num).addClass('border');
    $('.cd img').eq(num).siblings().removeClass('border');
   
})