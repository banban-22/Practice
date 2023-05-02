    $(function(){
    $('.hamburger').on('click', function() {
        hamburger();
    });

    $('#navi a').on('click', function(){
        hamburger();
    });

    $('.inview-slide-left').on('inview',function(event, isInview, visiblePartx, visiblePartY){
        if(isInview){
            $(this).stop().addClass('slide-left');
        }
    });
    $('.inview-slide-right').on('inview', function(event, isInview, visiblePartX, visiblePartY){
        if(isInview){
            $(this).stop().addClass('slide-right');
        }
    });
    $('.inview-balloon').on('inview', function(event, isInview, visiblePartX, visiblePartY){
        if(isInview){
            $(this).stop().addClass('balloon');
        }
    });
});


function hamburger(){
    $('.hamburger').toggleClass('active');
    if($('.hamburger').hasClass('active')){
        $('#navi').addClass('active');
    } else {
        $('#navi').removeClass('active');
    }
}   
