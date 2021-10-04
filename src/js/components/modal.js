import { checkExistParent } from '../finctions/checkExistParent';

export class Modal {
  modalElem;
  modalContainerElem;
  isOpenModal = false;
  isOpenThanksModal = false;

  modalThanksElem;
  modalThanksContainerElem;
  modalThanksCloseBtn;

  constructor(btnOpenModalCSSSelector, modalClassCSSSelector) {
    this.checkClickByModal = this.checkClickByModal.bind(this);
    this.checkClickByModalThanks = this.checkClickByModalThanks.bind(this);
    const btnsOpen = document.querySelectorAll(btnOpenModalCSSSelector);
    if (btnsOpen) {
      this.modalElem = document.querySelector(modalClassCSSSelector);
      this.modalContainerElem = this.modalElem.querySelector('.js-modal-container');
      const btnSubmitForm = this.modalElem.querySelector('.js-btn-submit');
      const formModal = this.modalElem.querySelector('.js-form-modal');
      const btnsClose = this.modalElem.querySelectorAll('.js-close-modal');

      this.modalThanksElem = document.querySelector('#modal-thanks');
      this.modalThanksContainerElem = document.querySelector('#modal-thanks-container');
      this.modalThanksCloseBtn = document.querySelector('#close-thanks-modal');

      btnsOpen.forEach(btn => {
        btn.onclick = () => {
          this.onOpenModal();
        };
      })

      btnsClose.forEach(btn => {
        btn.onclick = () => {
          this.onCloseModal();
        }
      })

      this.modalThanksCloseBtn.onclick = () => {
        this.onCloseModalThanks();
      }

      // todo убрать с фронта
      btnSubmitForm.onclick = () => {
        if ($(formModal).parsley().isValid()) {
          this.onCloseModal();
          this.modalThanksElem.classList.add('mod-show');
          document.addEventListener('click', this.checkClickByModalThanks);
        }
      }
    }

    document.addEventListener('click', this.checkClickByModal);
  }

  onOpenModal() {
    this.modalElem.classList.add('mod-show');
  }

  onCloseModal() {
    this.modalElem.classList.remove('mod-show');
    this.isOpenModal = false;
    document.removeEventListener('click', this.checkClickByModal);
  }

  checkClickByModal(event) {
    if (this.isOpenModal && !checkExistParent(event.target, this.modalContainerElem)) {
      this.onCloseModal();
    } else {
      this.isOpenModal = true;
    }
  }

  checkClickByModalThanks(event) {
    if (this.isOpenThanksModal && !checkExistParent(event.target, this.modalThanksContainerElem)) {
      this.onCloseModalThanks();
    } else {
      this.isOpenThanksModal = true;
    }
  }

  onCloseModalThanks() {
    this.modalThanksElem.classList.remove('mod-show');
    this.isOpenThanksModal = false;
    document.removeEventListener('click', this.checkClickByModalThanks);
  }
}
