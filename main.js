$(function(){
    $(document).on('click', function(event){
        var clickOver = $(event.target);
        var opened = $('#menu-icon').hasClass('menu-active');
        if(clickOver.is('#menu-icon')){
            $('#menu-icon').toggleClass('menu-active');
        }
        else if(opened === true && !clickOver.hasClass("media-active")) {
            $("#menu-icon").click();
        }
    });
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});