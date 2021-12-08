// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-callback-modal - на кнопки открывания модалки
// .js-close-callback-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initCallbackModal() {
  const btnsOpen = document.querySelectorAll('.js-open-badRequestLetai-modal');
  const btnsClose = document.querySelectorAll('.js-close-badRequestLetai-modal');
  const modalElem = document.querySelector('#modal-badRequestLetai-host');

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
