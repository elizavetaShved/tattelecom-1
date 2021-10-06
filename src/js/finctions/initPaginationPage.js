import { PaginationPage } from '../components/pagination-page';

export default function initPaginationPage() {
  const phoneList = document.querySelector('.js-pagination-page');
  const sliderElem = phoneList.querySelector('.js-swiper-container-custom');
  const btnPrev = phoneList.querySelector('.js-slider-btn-prev');
  const btnNext = phoneList.querySelector('.js-slider-btn-next');

  new PaginationPage(sliderElem, btnPrev, btnNext);
}
