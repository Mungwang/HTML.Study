$(document).ready(function(){

$('.imgslide_list li').last().prependTo('.imgslide_list');
    $('.imgslide_list').css('left',-1200);
setInterval(function(){
    
    $('.imgslide_list').animate({left:'-='+1200},'slow',function(){
    $('.imgslide li').first().appendTo('.imgslide_list');
    $('.imgslide_list').css('left',-1200);    
        
    });
    
},3000);
    
    
});