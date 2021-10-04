// модалка "Тариф “Много интернета”"
// __классы для кнопок__
// .js-open-send-request-modal - на кнопки открывания модалки
// .js-close-send-request-modal - на кнопку закрывания модалки

// __Атрибуты для кнопки открытия
//  data-tariff-name="title" - заголовок
//  data-prise="250" - цена, необяз

import { Modal } from '../../components/modal';

export default function initSendRequestModal() {
  const btnsOpen = document.querySelectorAll('.js-open-send-request-modal');
  const btnsClose = document.querySelectorAll('.js-close-send-request-modal');
  const modalElem = document.querySelector('#modal-send-request-host');
  const modalTitleElem = modalElem.querySelector('.modal__title');
  const modalPriceWrapperElem = modalElem.querySelector('.send-request__price');
  const modalPriceElem = modalElem.querySelector('.connect-tariff__price .number');

  let modalComponent;

  btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent = new Modal(modalElem);
      modalComponent.onOpenModal();

      const modalTitle = btn.getAttribute('data-tariff-name');
      const modalPrise = btn.getAttribute('data-prise');
      modalTitleElem.innerText = modalTitle;
      if (modalPrise) {
        modalPriceElem.innerText = modalPrise;
      } else {
        modalPriceWrapperElem.remove();
      }
    });
  })

  btnsClose.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent.onCloseModal();
    })
  })
}
