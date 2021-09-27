import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export class Slider {

  constructor(sliderElem, numSlide, btnPrev, btnNext) {
    new Swiper(sliderElem, {
      slidesPerView: numSlide,
      lazy: true,
      keyboard: true,
      spaceBetween: 30,
      speed: 400,
      navigation: {
        prevEl: btnPrev,
        nextEl: btnNext
      },

      // breakpoints: {
      //   769: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   },
      //   1025: {
      //     slidesPerView: 2,
      //     spaceBetween: 30
      //   }
      // }
    })
  }
}
