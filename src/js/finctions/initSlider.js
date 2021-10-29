import { Slider } from '../components/slider';

// 1ур. gl-slider + js-swiper-4 + data-swiper-gap="20"? - общая обертка:
// 2ур. gl-slider__container + swiper-container + js-swiper-container-4
// 3ур. gl-slider__wrapper + swiper-wrapper
// 4ур. swiper-slide
// 2ур. {{> common/controls/btns-slider }} - кнопки


export default function initSlider(numSlide) {
  const sliderContainerElements = Array.from(document.querySelectorAll(`.js-swiper-container-${ numSlide }`));

  if (!sliderContainerElements) return;

  const sliderWrapperElements = Array.from(document.querySelectorAll(`.js-swiper-${ numSlide }`));

  sliderContainerElements.map((sliderElem, index) => new Slider(
    sliderElem,
    numSlide,
    sliderWrapperElements[index].querySelector('.js-slider-btn-prev'),
    sliderWrapperElements[index].querySelector('.js-slider-btn-next'),
    sliderWrapperElements[index].querySelector('.js-pagination-slider'),
    sliderWrapperElements[index].getAttribute('data-swiper-gap')
  ));
}
