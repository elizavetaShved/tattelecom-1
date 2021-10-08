// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-installments-modal - на кнопки открывания модалки
// .js-close-installments-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initInstallmentsModal() {
  const btnsOpen = document.querySelectorAll('.js-open-installments-modal');
  const btnsClose = document.querySelectorAll('.js-close-installments-modal');
  const modalElem = document.querySelector('#modal-installments-host');

  let modalComponent;

  btnsOpen.forEach(btn => {
    btn.onclick = () => {
      modalComponent = new Modal(modalElem);
      modalComponent.onOpenModal();
    };
  })

  btnsClose.forEach(btn => {
    btn.onclick = () => {
      modalComponent.onCloseModal();
    }
  })
}
