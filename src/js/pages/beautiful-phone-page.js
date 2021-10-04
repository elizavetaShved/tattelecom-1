import common from '../common';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import validation from '../finctions/validation';
import initSelects from '../finctions/initSelects';
import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
  common();

  validation(); // в модальном окне
  initSendRequestModal();
  initSelects();

  const phoneList = document.querySelector('#phone-list');
  const sliderElem = phoneList.querySelector('.js-swiper-container-custom');
  const btnPrev = phoneList.querySelector('.js-slider-btn-prev');
  const btnNext = phoneList.querySelector('.js-slider-btn-next');

  new Swiper(sliderElem, {
    slidesPerView: 'auto',
    lazy: true,
    keyboard: true,
    spaceBetween: 14,
    speed: 400,
    navigation: {
      prevEl: btnPrev,
      nextEl: btnNext
    },
    breakpoints: {
      769: {
        spaceBetween: 14
      },
      1201: {
        spaceBetween: 14
      }
    }
  })
});
