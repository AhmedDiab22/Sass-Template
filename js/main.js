$(function (){
    $(window).scroll(function () { 
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".nav2").slideDown(1000);
        }else{
            $(".nav2").slideUp(500);
        }
    });
})