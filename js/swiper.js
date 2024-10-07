const swiperWork = new Swiper('.swiper-work',{
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 10,
    slideActiveClass: 'swiper-work__Active',
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInterraction: true,
        // @media screen and (min-width: 768px){
        //     slidesPerView:2.3,
        // }
    }
});