$(window).scroll(function(){
    
    var Scroll = $(window).scrollTop();
    
    var nowScroll = parseInt(Scroll);
    
 /*parseInt 문자열을 숫자(정수)로변경 / parseFloat 문자열을 숫자로(실수로변경)*/
    
    $('.scroll').text(nowScroll);
    $('.world').css('background-position-y',nowScroll);
    
    /*사진을 위바향으로하고싶으면 -y를 추가 안하면 x축으로만 이동*/
    
    if(nowScroll>500){
        $('.title').addClass('show',400,'easeInBack')
    }else{
        $('.title').removeClass('show',400,'easeOutBack')
    }
});
    var check = false;

  setInterval(function(){
        if(check ==true){
            $('.world').css('background-position-y','-=100');
        }   
    },30);

 /*setInterval 시간동안 같은동작을 반복*/

    $('.start').click(function(){
        if(check == true){
            check=false;                        
        }else{
            check =true;
        }
        });
 /*= 1개랑 == 2개차이 1개일때는 1개면 그값을 대입하는거고 2개면 그값이랑 맞는건지 확인하는거*/

$(window).keydown(function(){                     
    if(event.keyCode==65) {
         $('.start').click();
    }
    
})

/* keydown 키가눌릴때 실행 / 키보드를 꾹누르고있을때도 , 입력될때도 실행
 keypress 키가 입력되었을때 실행
 keyup 키보드에서 키가 떨어질때 실행 * keycode값은 다달라서 인터넷참조*/