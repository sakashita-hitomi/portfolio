$(function() {
// ここにjQueryを記述

//バーガーボタンをクリックしたら…
$('#header__btn').on('click', function(){
    //span要素にクラスを追加・削除
     $('#header__btn__top').toggleClass('rotateTop');//上の線
     $('#header__btn__middle').toggleClass('hideMiddle');//中央の線
     $('#header__btn__bottom').toggleClass('rotateBottom');//下の線
     //ナビゲーションをスライド表示させる
 $('#gnav').toggleClass('translateNav');
 });

 $('.gnav__link').on('click', function(){
    $('#header__btn__top').removeClass('rotateTop');//上の線
    $('#header__btn__middle').removeClass('hideMiddle');//中央の線
    $('#header__btn__bottom').removeClass('rotateBottom');
    $('#gnav').removeClass('translateNav');
 });


});