// модалка "Тариф “Много интернета”"
// __классы для кнопок__
// .js-open-connects-tariff-modal - на кнопки открывания модалки
// .js-close-modal - на кнопку закрывания модалки
// #modal-connect-tariff-host - компонент модалки
// .js-modal-container - окно модалки
// .js-form-modal - форма в модалке
// .js-btn-submit - кнопка сабмита в форме додалки

import { Modal } from '../../components/modal';

export default function initConnectsTariffModal() {
  const btnsOpen = document.querySelectorAll('.js-open-connects-tariff-modal');
  const modalElem = document.querySelector('#modal-connect-tariff-host');
  const modalTitleElem = modalElem.querySelector('.modal__title');
  const modalPriceElem = modalElem.querySelector('.connect-tariff__price .number');

  btnsOpen.forEach(btn => {
    btn.onclick = () => {
      const modal = new Modal(modalElem);
      modal.onOpenModal();

      const modalTitle = btn.getAttribute('data-tariff-name');
      const modalPrise = btn.getAttribute('data-prise');
      modalTitleElem.innerText = modalTitle;
      modalPriceElem.innerText = modalPrise;
    };
  })
}
