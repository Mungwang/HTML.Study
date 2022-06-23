$(document).ready(function(){
   
    var w = ($(window).width()/2)-($(".modal").width()/2);
    var h = ($(window).height()/2)-($(".modal").height()/2);
    
    $(".modal").css({
        left : w, top : h
    });
    
    $(".popzone a").click(function(){
       $(".modal").fadeIn(3000);
       $(".modal_bg").fadeIn(2000);        
    });
    
    $(".modal a").click(function(){
       $(".modal").fadeOut(0);
       $(".modal_bg").fadeOut(0);      
    });
});