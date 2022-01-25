// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-callback-modal - на кнопки открывания модалки
// .js-close-callback-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initCallbackModal() {
  const btnsOpen = document.querySelectorAll('.js-open-requestLetai-modal');
  const btnsClose = document.querySelectorAll('.js-close-requestLetai-modal');
  const modalElem = document.querySelector('#modal-requestLetai-host');

  let modalComponent;

  btnsOpen.forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
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
