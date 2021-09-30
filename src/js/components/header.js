import { checkExistParent } from '../finctions/checkExistParent';

export class Header {
  constructor() {
    const hostElem = document.getElementById('header-host');

    const popupElem = hostElem.querySelector('.header__popup-container');
    const popupWrapperElem = hostElem.querySelector('.header__popup-wrapper');
    const bottomBlockElem = hostElem.querySelector('.header__bottom-block-content');
    const menuBtnElements = hostElem.querySelectorAll('.header__bottom-menu-btn');
    const popupContentElements = Array.from(hostElem.querySelectorAll('.header__popup-content'));

    menuBtnElements.forEach(btn => {
      btn.onmouseover = () => {
        popupElem.classList.add('mod-show');

        popupContentElements.forEach(popupContentElem => {
          if (popupContentElem.className.includes(`mod-${ btn.value }`) && !popupContentElem.className.includes('mod-show')) {
            popupContentElements.map(elem => elem.classList.remove('mod-show'));
            popupContentElem.classList.add('mod-show');
          }
        })
      }
    })

    document.addEventListener('mousemove', e => {
      if (!checkExistParent(e.target, popupWrapperElem) && !checkExistParent(e.target, bottomBlockElem)) {
        popupElem.classList.remove('mod-show');
      }
    })
  }
}
