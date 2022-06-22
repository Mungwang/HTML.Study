$(document).ready(function(){
   var num=0;
    
    $(".key_list li").eq(num).fadeIn('fast');
    
    setInterval(function(){
        
    $(".key_list li").eq(num).fadeOut('fast');
    
    if(num==2){
        num=0;
        $(".key_list li").eq(num).fadeIn('fast');
    }
    else{
        num++;
        $(".key_list li").eq(num).fadeIn('fast');
    }
        
        
    },3000);
});