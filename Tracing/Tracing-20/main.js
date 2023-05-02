$(function(){
    $('#ac-menu .label').on('click',function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    });
});