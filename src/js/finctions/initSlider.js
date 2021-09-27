import { Slider } from '../components/slider';

export default function initSlider(numSlide) {
  const sliderWrapperElements = Array.from(document.querySelectorAll(`.js-swiper-${ numSlide }`));

  if (!sliderWrapperElements) return;
  const sliderElements = Array.from(document.querySelectorAll(`.js-swiper-container-${ numSlide }`));

  sliderElements.map((sliderElem, index) => new Slider(
    sliderElem,
    numSlide,
    sliderWrapperElements[index].querySelector('.js-slider-btn-prev'),
    sliderWrapperElements[index].querySelector('.js-slider-btn-next'),
  ));
}
