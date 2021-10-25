// модалка "Пополнить счет"
// __классы для кнопок__
// .js-close-top-up-account-modal - на кнопку закрывания модалки
// .js-form-pre-modal-top-up-account - на форму, которая вроверяет валидность полей перед открытием модалки

// Не нужно:
// .js-open-top-up-account-modal - на кнопки открывания модалки

import { Modal } from '../../components/modal';

export default function initTopUpAccountModal() {
  // const btnsOpen = document.querySelectorAll('.js-open-top-up-account-modal');
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

      const typeModal = formPreOpenElem.getAttribute('data-modal-type');

      if (typeModal) {
        const modalMenuTabElems = modalComponent.modalElem.querySelectorAll('.js-menu-tab');
        const contentElems = modalComponent.modalElem.querySelectorAll('.js-menu-tab-content');

        const paymentMethodElem = modalComponent.modalElem.querySelectorAll('.js-payment-method');

        paymentMethodElem.forEach(elem => {
          const radioElems = elem.querySelectorAll('.radio');
          const selectContainerElem = elem.querySelector('.select__container');

          selectContainerElem.classList.add('mod-disabled');

          radioElems.forEach(radio => {
            radio.onchange = () => {
              console.log(radio.value)
              if (radio.value === 'other') {
                selectContainerElem.classList.remove('mod-disabled');
              } else {
                selectContainerElem.classList.add('mod-disabled');
              }
            }
          })
        })

        modalMenuTabElems.forEach(tabElem => {
          if (tabElem.value === typeModal) {
            tabElem.setAttribute('checked', true);

            contentElems.forEach(contentElem => {
              if (contentElem.hasAttribute(`data-menu-${ typeModal }`)) {
                contentElem.classList.add('mod-show');
              } else {
                contentElem.classList.remove('mod-show');
              }
            })
          } else {
            tabElem.removeAttribute('checked');
          }
        })
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
