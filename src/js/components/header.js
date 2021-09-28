import { checkExistParent } from '../finctions/checkExistParent';

export class Header {
  constructor() {
    const hostElem = document.getElementById('header-host');

    const popupElem = hostElem.querySelector('.header__popup-container');
    const popupWrapperElem = hostElem.querySelector('.header__popup-wrapper');
    const bottomBlockElem = hostElem.querySelector('.header__bottom-block-content');
    const menuLinkElements = hostElem.querySelectorAll('.header__bottom-menu-link');

    menuLinkElements.forEach(link => {
      link.onmouseover = () => {
        popupElem.classList.add('mod-show');
      }
    })

    document.addEventListener('mousemove', e => {
      if (!checkExistParent(e.target, popupWrapperElem) && !checkExistParent(e.target, bottomBlockElem)) {
        popupElem.classList.remove('mod-show');
      }
    })
  }
}
