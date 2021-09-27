import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export class Slider {

  constructor(sliderElem, numSlide, btnPrev, btnNext) {
    new Swiper(sliderElem, {
      slidesPerView: 1.5,
      lazy: true,
      keyboard: true,
      spaceBetween: 30,
      speed: 400,
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
