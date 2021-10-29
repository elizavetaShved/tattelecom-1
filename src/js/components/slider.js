import { Navigation, Swiper, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export class Slider {

  constructor(sliderElem, numSlide, btnPrev, btnNext, paginationElem, customGap) {

    const gap = customGap ? +customGap : 30;

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
          slidesPerView: numSlide > 2 ? numSlide - 1 + 0.2: numSlide + 0.2,
          spaceBetween: gap - 10 > 16 ? gap - 10 : 16
        },
        1025: {
          slidesPerView: numSlide > 2 ? numSlide - 1 : numSlide,
        },
        1201: {
          slidesPerView: numSlide,
          spaceBetween: gap
        }
      }
    })
  }
}
