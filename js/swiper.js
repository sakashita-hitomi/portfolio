const swiperWork = new Swiper('.swiper-work',{
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    centeredSlides: true,
    speaceBetween: 50,
    slideActiveClass: 'swiper-work__Active',
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInterraction: true,
    }
});