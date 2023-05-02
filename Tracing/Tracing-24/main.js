$(function(){

$('#thumbnail img').on('mouseover', function(){
    
let img_src = $(this).attr("src");

if($('#mainvisual img').attr("src") != img_src) {
    $('#mainvisual img').fadeOut(500, function(){
        $('#mainvisual img').attr({src:img_src});
        $('#mainvisual img').fadeIn(500);
         })
    }
});
});