import { checkExistParent } from '../finctions/checkExistParent';

export class Header {
  hostElem;
  popupElem;
  popupContentElements;
  isBusinessMainPageHeader;

  businessMainPageMenuHost
  businessMainPageMenuContent
  businessMainPageMenu

  constructor() {
    this.openBusinessPopUp = this.openBusinessPopUp.bind(this);
    this.closeBusinessPopUp = this.closeBusinessPopUp.bind(this);

    this.hostElem = document.getElementById('header-host');

    this.popupElem = this.hostElem.querySelector('.js-header-popup-container');
    const popupWrapperElem = this.hostElem.querySelector('.js-header-popup-wrapper');
    const bottomBlockElem = this.hostElem.querySelector('.header__bottom-block-content');
    const menuLinkElements = this.hostElem.querySelectorAll('.header__bottom-menu-link');
    this.popupContentElements = Array.from(this.hostElem.querySelectorAll('.js-header-popup'));

    // наведение на ссылку в меню нижнего блока
    menuLinkElements.forEach(link => {
      link.onmouseover = () => {
        this.openPopUp(link);
      }
    })

    // удод с поп-ап
    // document.addEventListener('mousemove', e => {
    //   if (!checkExistParent(e.target, popupWrapperElem) && !checkExistParent(e.target, bottomBlockElem)) {
    //     this.closePopUp();
    //     if (this.isBusinessMainPageHeader) {
    //       if (window.pageYOffset > 0) {
    //         this.closeBusinessPopUp();
    //       }
    //     }
    //   }
    // })

    this.isBusinessMainPageHeader = !!document.querySelector('.js-business-main');

    // если это страница бизнеса (главная), то по скроллу убираем нижнее меню
    if (this.isBusinessMainPageHeader) {
      this.businessMainPageMenuHost = this.hostElem.querySelector('#header-b-main-page-menu-host');
      this.businessMainPageMenuContent = this.businessMainPageMenuHost.querySelector('#header-b-main-page-menu-content');
      this.businessMainPageMenu = this.hostElem.querySelector('.js-b-menu-header');

      this.businessMainPageMenuHost.style.maxHeight = `${ this.businessMainPageMenuContent.offsetHeight }px`;

      document.addEventListener('scroll', () => {
        if (window.innerWidth >= 1024) {
          if (window.pageYOffset > 0) {
            this.closeBusinessPopUp();
          } else {
            this.openBusinessPopUp(true);
            this.closePopUp();
          }
        }
      });
    }
  }

  // открыть поп-ап
  openPopUp(link) {
    this.popupElem.classList.add('mod-show');
    this.popupContentElements.forEach(popupContentElem => {
      if ((popupContentElem.getAttribute('data-hover-value') === link.getAttribute('data-hover-value'))
        && !popupContentElem.className.includes('mod-show')) {
        this.popupContentElements.map(elem => elem.classList.remove('mod-show'));
        popupContentElem.classList.add('mod-show');
      }
    })
  }

  // закрыть поп-ап
  closePopUp() {
    this.popupElem.classList.remove('mod-show');
  }

  // открыть бизнес поп-ап (со всей навигацией)
  openBusinessPopUp(isCloseMenu) {
    this.businessMainPageMenuHost.style.maxHeight = `${ this.businessMainPageMenuContent.offsetHeight }px`;
    this.businessMainPageMenuHost.style.overflow = 'initial';
    if (isCloseMenu) {
      this.businessMainPageMenu.classList.remove('mod-show');
    }
  }

  // закрыть бизнес поп-ап (со всей навигацией)
  closeBusinessPopUp() {
    this.businessMainPageMenuHost.style.maxHeight = 0;
    this.businessMainPageMenuHost.style.overflow = 'hidden';
    this.businessMainPageMenu.classList.add('mod-show');
  }
}
