$(document).ready(function(){

$('.key_listli').last().prependTo('.key_list');
    $('.key_list').css('left',-1000);
setInterval(function(){
    
    $('.key_list').animate({left:'-='+1000},'slow',function(){
    $('.key_list li').first().appendTo('.key_list');
    $('.key_list').css('left',-1000);    
        
    });
    
},2000);
    
    
});