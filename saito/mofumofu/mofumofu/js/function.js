$(function(){
// --------ここからjQueryの記述--------
$('.gnav__link').on('click', function(){
const target = $(this).attr('href');
const targetPos = $(target).offset().top;
$('html, body').animate({scrollTop: targetPos}, 500);
    return false
})

const mvHeight = $('#mv').height();
$(window).on('scroll', function(){
    const ST = $(window).scrollTop();
    if(ST >= mvHeight){
        $('#header').addClass('resizeHeader');
    }else{
        $('#header').removeClass('resizeHeader');
    }
});

$('#btn').on('click', function(){ 
     $('#btn__top').toggleClass('rotateTop');
     $('#btn__middle').toggleClass('hideMiddle');
     $('#btn__bottom').toggleClass('rotateBottom');
 $('#gnav2').toggleClass('translateNav');
 
 });


 $('.items__box1,.items__box1__1,.items__box1__2,.items__box1__3').on('click', function () {
    const modal = $(this).attr('data-modal');
    $(modal).fadeIn(function () {

        $(this).on('click', function () {
            $(this).fadeOut();
        });

        $('.modal__link').on('click', function (clickEvent) {
            clickEvent.stopPropagation();
        });

    });
});


// ---ここまで---
});