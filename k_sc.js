$(document).ready(function(){
    
    /*메뉴슬라이드*/
    
    $(".header_menu_list>li").mouseover(function(){
       $(this).find(".sub_menu_list").slideDown();
        });
    $(".sub_menu_list").mouseleave(function(){
        $(".sub_menu_list").slideUp();
    });
    
    /*이미지슬라이드*/
    
     var num=0;
    
    $(".slide_list li").eq(num).fadeIn('slow');
    
    setInterval(function(){
        
    $(".slide_list li").eq(num).fadeOut('fast');
    
    if(num==2){
        num=0;
        $(".slide_list li").eq(num).fadeIn('slow');
    }
    else{
        num++;
        $(".slide_list li").eq(num).fadeIn('slow');
    }
        
    },3000);
      
    /*탭*/
    
    $(".tab").click(function(){

    $(this).parent().addClass("on").siblings().removeClass("on");   
        
    });
    
    /*모달*/
    
    var w = ($(window).width()/2)-($(".modal").width()/2);
    
    var h = ($(window).height()/2)-($(".modal").height()/2);
    
    $(".modal").css({
        left:w, top:h
    });
    
    $(".pop").click(function(){
      $(".modal").fadeIn(2000);
      $(".modal_bg").fadeIn(2000);
    });
    
    $(".modal_x").click(function(){
      $(".modal").fadeOut(0);
      $(".modal_bg").fadeOut(0);    
    });
    
  
    
    
    
});