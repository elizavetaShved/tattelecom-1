import { checkExistParent } from '../finctions/checkExistParent';

export class Header {
  constructor() {
    const hostElem = document.getElementById('header-host');

    const popupElem = hostElem.querySelector('.header__popup-container');
    const popupWrapperElem = hostElem.querySelector('.header__popup-wrapper');
    const bottomBlockElem = hostElem.querySelector('.header__bottom-block-content');
    const menuLinkElements = hostElem.querySelectorAll('.header__bottom-menu-link');
    const popupContentElements = Array.from(hostElem.querySelectorAll('.header__popup-content'));

    menuLinkElements.forEach(link => {
      link.onmouseover = () => {
        popupElem.classList.add('mod-show');

        popupContentElements.forEach(popupContentElem => {
          if (popupContentElem.className.includes(`mod-${ link.getAttribute('data-hover-value') }`) && !popupContentElem.className.includes('mod-show')) {
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

    const isBusinessMainPageHeader = !!document.querySelector('.js-business-main');

    if (isBusinessMainPageHeader) {
      const businessMainPageMenuHost = hostElem.querySelector('#header-b-main-page-menu-host');
      const headerTopBlockElem = hostElem.querySelector('#header-top-block-host');
      const headerBottomBlockElem = hostElem.querySelector('#header-b-bottom-block-host');

      document.addEventListener('scroll', () => {
        let headerHeight = headerTopBlockElem.offsetHeight + headerBottomBlockElem.offsetHeight;
        if (window.innerWidth >= 1024 && window.pageYOffset >= headerHeight) {
          businessMainPageMenuHost.classList.remove('mod-show');
        } else {
          businessMainPageMenuHost.classList.add('mod-show');
        }
      })
    }
  }
}
