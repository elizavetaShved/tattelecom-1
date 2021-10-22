// js-filter-close gl__filter-modal-close - на кнопку закрытия
// js-filter-container gl__filter-container - на контейнер фильтра ('mod-show')
// gl__filter js-modal-container - на фильтр

import { Modal } from '../components/modal';

export default function initFilterMobile() {
  const btnOpenFilterMobile = document.querySelectorAll('.js-open-filter-modal');
  const btnCloseFilterMobile = document.querySelectorAll('.js-filter-close');
  const filterContainerElem = document.querySelector('.js-filter-container');

  let modalComponent;

  btnOpenFilterMobile.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      modalComponent = new Modal(filterContainerElem);
      modalComponent.onOpenModal();
    });
  })

  btnCloseFilterMobile.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent.onCloseModal();
    })
  })
}
