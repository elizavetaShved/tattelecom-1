import { checkExistParent } from '../finctions/checkExistParent';

export class Modal {
  modalElem;
  isOpenModal = false;

  constructor(btnOpenModalCSSSelector, btnCloseModalCSSSelector, modalClassCSSSelector) {
    this.checkClickByModalCallback = this.checkClickByModalCallback.bind(this);
    const btnsOpen = document.querySelectorAll(btnOpenModalCSSSelector);
    if (btnsOpen) {
      this.modalElem = document.querySelector(modalClassCSSSelector);
      const btnsClose = document.querySelectorAll(btnCloseModalCSSSelector);

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
    }
  }

  onOpenModal() {
    this.modalElem.classList.add('mod-show');
    document.addEventListener('click', this.checkClickByModalCallback);
  }

  onCloseModal() {
    this.modalElem.classList.remove('mod-show');
    document.removeEventListener('click', this.checkClickByModalCallback);
  }

  checkClickByModalCallback(event) {
    this.isOpenModal = false;
    this.isOpenModal = !checkExistParent(event.target, this.modalElem);
    if (!this.isOpenModal) {
      this.onCloseModal();
    }
  }
}
