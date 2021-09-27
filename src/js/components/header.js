import { checkExistParent } from '../finctions/checkExistParent';

export class Header {
  constructor() {
    const hostElem = document.getElementById('header-host');
    const bodyElem = document.querySelector('body');
    console.log(bodyElem)
    const popupElem = hostElem.querySelector('.header__popup-container');
    const qwe = hostElem.querySelector('.header__popup-wrapper');
    const qwe2 = hostElem.querySelector('.header__bottom-block-content');
    const menuLinkElements = hostElem.querySelectorAll('.header__bottom-menu-link');

    menuLinkElements.forEach(link => {
      link.onmouseover = () => {
        popupElem.classList.add('mod-show');
      }
    })

    document.addEventListener('mousemove', e => {
      if (!checkExistParent(e.target, qwe) && !checkExistParent(e.target, qwe2)) {
        popupElem.classList.remove('mod-show');
      }
    })
  }
}
