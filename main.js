$(function(){
    $('#menu-icon').on('click', function(){
        $(this).toggleClass('menu-active');
    });
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});