import { Slider } from '../components/slider';

export default function initSlider(numSlide) {
  const sliderContainerElements = Array.from(document.querySelectorAll(`.js-swiper-container-${ numSlide }`));

  if (!sliderContainerElements) return;

  const sliderWrapperElements = Array.from(document.querySelectorAll(`.js-swiper-${ numSlide }`));

  sliderContainerElements.map((sliderElem, index) => new Slider(
    sliderElem,
    numSlide,
    sliderWrapperElements[index].querySelector('.js-slider-btn-prev'),
    sliderWrapperElements[index].querySelector('.js-slider-btn-next'),
    sliderWrapperElements[index].querySelector('.js-pagination-slider')
  ));
}
