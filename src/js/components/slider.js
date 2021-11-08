import { Navigation, Swiper, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export class Slider {

  constructor(sliderElem, numSlide, btnPrev, btnNext, paginationElem, customGap) {

    numSlide = +numSlide;

    const gap = customGap ? +customGap : 30;

    let slidesPerView769;
    let slidesPerView1025;

    switch (true) {
      case numSlide === 'auto':
        slidesPerView769 = numSlide;
        slidesPerView1025 = numSlide;
        break;

      case  numSlide > 2:
        slidesPerView769 = numSlide - 1 + 0.2;
        slidesPerView1025 = numSlide - 1;
        break;

      default:
        slidesPerView769 = numSlide + 0.2;
        slidesPerView1025 = numSlide;
      }

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
          slidesPerView: slidesPerView769,
          spaceBetween: gap - 10 > 16 ? gap - 10 : 16
        },
        1025: {
          slidesPerView: slidesPerView1025,
        },
        1201: {
          slidesPerView: numSlide,
          spaceBetween: gap
        }
      }
    })
  }
}
