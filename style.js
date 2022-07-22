var current = 0;
var count = $('.imgslide_box li').size()-1;

$('.slide_btn li').click(function(){
	
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	
    current = $(this).index();
    
    var index = $ (this).index();
    var pos = 1920*index;
    
    $('.imgslide_box').animate({left:-pos},400);
    
});

$('.controls a').click(function(){
   
    var check = $(this).hasClass('prev');
    
    if(check==true){
        current-=1;
    }else{
        current+=1;
    }
    
    if(current<0){
        current=count;
    }
    
    if(current>count){
        current=0;
    }
    
    
    $('.slide_btn li').eq(current).click();
    
});

$('.logo').mouseover(function(){
	$('.header_top_img').addClass('hover');
});

$('.logo').mouseout(function(){
	$('.header_top_img').removeClass('hover');
});

$('.contents01').mouseover(function(){
	$('.contents01').addClass('bgin');
});

$('.title').click(function(){
    $(this).parent().addClass('on').siblings().removeClass('on')
});

/*-탭기능-*/

 var w = ($(window).width()/2)-($(".modal").width()/2);
 var h = ($(window).height()/2)-($(".modal").height()/2);

$(".modal").css({
   left : w, top : h
});

$(".md_one a").click(function(){
    $(".modal_one").fadeIn(500)
    $(".modal_bg").fadeIn(1000)
});

$(".modal a").click(function(){
    $(".modal_one").fadeOut(0);
    $(".modal_bg").fadeOut(0); 
});

$(".md_two a").click(function(){
    $(".modal_two").fadeIn(500)
    $(".modal_bg").fadeIn(1000)
});

$(".modal a").click(function(){
    $(".modal_two").fadeOut(0);
    $(".modal_bg").fadeOut(0);
	
});

/*-모달-*/

$(".title").click(function(){
    var name = $(this).text()
    $('.main_title').text(name);
	
});

/**메인 타이들 선택시 변경*/

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>4200){
            $('.bottom_bg').addClass('active02');
        }else{
            $('.bottom_bg').removeClass('active02');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>2500){
            $('.con01').addClass('active03');
        }else{
            $('.con01').removeClass('active03');
        }
        fixScroll + scroll;
		
		
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>1100){
            $('.con02').addClass('active04');
        }else{
            $('.con02').removeClass('active04');
        }
        fixScroll + scroll;
    }); 
});

$(function(){
    var fixScroll = 0;
    
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll>3500){
            $('.con03').addClass('active05');
        }else{
            $('.con03').removeClass('active05');
        }
        fixScroll + scroll;
    }); 
});
/**바닥이미지 스크롤**/    
    



