// модалка "Пополнить счет"
// __классы для кнопок__
// .js-open-top-up-account-modal - на кнопки открывания модалки
// .js-close-top-up-account-modal - на кнопку закрывания модалки
// .js-form-pre-modal-top-up-account - на форму, которая вроверяет валидность полей перед открытием модалки

import { Modal } from '../../components/modal';

export default function initTopUpAccount() {
  const btnsOpen = document.querySelectorAll('.js-open-top-up-account-modal');
  const btnsClose = document.querySelectorAll('.js-close-top-up-account-modal');
  const modalElem = document.querySelector('#modal-top-up-account-host');
  const formPreOpenElems = document.querySelectorAll('.js-form-pre-modal-top-up-account');

  let modalComponent;

  formPreOpenElems.forEach((formPreOpenElem, i) => {
    formPreOpenElem.onsubmit = event => {
      event.preventDefault()
      if ($(formPreOpenElem).parsley().isValid()) {
        modalComponent = new Modal(modalElem);
        modalComponent.onOpenModal();
      }

      return false;
    };
  })

  btnsClose.forEach(btn => {
    btn.onclick = () => {
      modalComponent.onCloseModal();
    }
  })
}
