import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export class PaginationPage {

  constructor(sliderElem, btnPrev, btnNext) {
    new Swiper(sliderElem, {
      slidesPerView: 'auto',
      lazy: true,
      keyboard: true,
      spaceBetween: 14,
      speed: 400,
      navigation: {
        prevEl: btnPrev,
        nextEl: btnNext
      }
    })
  }
}
