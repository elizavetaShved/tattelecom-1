import { Slider } from '../components/slider';

// 1ур. gl-slider + js-swiper data-swiper-slides-preview="4" + data-swiper-gap="20"? - общая обертка:
// 2ур. gl-slider__container + swiper-container + js-swiper-container
// 3ур. gl-slider__wrapper + swiper-wrapper
// 4ур. swiper-slide
// 2ур. {{> common/controls/btns-slider }} - кнопки

export default function initSlider() {
  const sliderWrapperElements = Array.from(document.querySelectorAll(`.js-swiper`));
  if (!sliderWrapperElements) return;

  sliderWrapperElements.map((sliderElem, index) => new Slider(
    sliderElem.querySelector('.js-swiper-container'),
    sliderElem.getAttribute('data-swiper-slides-preview'),
    sliderElem.querySelector('.js-slider-btn-prev'),
    sliderElem.querySelector('.js-slider-btn-next'),
    sliderElem.querySelector('.js-pagination-slider'),
    sliderElem.getAttribute('data-swiper-gap')
  ));
}
