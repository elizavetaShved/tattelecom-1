import { Navigation, Swiper, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export class Slider {

  constructor(sliderElem, numSlide, btnPrev, btnNext, paginationElem) {
    new Swiper(sliderElem, {
      slidesPerView: 1.2,
      lazy: true,
      keyboard: true,
      spaceBetween: 16,
      speed: 400,
      pagination: {
        el: paginationElem
      },
      navigation: {
        prevEl: btnPrev,
        nextEl: btnNext
      },
      breakpoints: {
        769: {
          slidesPerView: numSlide - 1,
          spaceBetween: 20
        },
        1201: {
          slidesPerView: numSlide,
          spaceBetween: 30
        }
      }
    })
  }
}
