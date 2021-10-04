// модалка "О тарифе"
// __классы для кнопок__
// .js-open-about-tariff-modal - на кнопки открывания модалки
// .js-close-about-tariff-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initAboutTariffModal() {
  const btnsOpen = document.querySelectorAll('.js-open-about-tariff-modal');
  const btnsClose = document.querySelectorAll('.js-close-about-tariff-modal');
  const modalElem = document.querySelector('#modal-about-tariff-host');

  let modalComponent;

  btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent = new Modal(modalElem);
      modalComponent.onOpenModal();
    });
  })

  btnsClose.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent.onCloseModal();
    })
  })
}
