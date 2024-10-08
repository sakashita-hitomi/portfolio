const swiperWork = new Swiper('.swiper-work',{
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 20,
    slideActiveClass: 'swiper-work__Active',
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInterraction: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
      breakpoints: {
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 50,
        }
      },
});