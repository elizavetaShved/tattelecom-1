import { checkExistParent } from '../finctions/checkExistParent';

export class Header {
  hostElem;
  popupElem;
  popupContentElements;
  isBusinessMainPageHeader;
  isTattelekomMain;
  menuLinkElements;

  businessMainPageMenuHost;
  businessMainPageMenuContent;
  businessMainPageMenu;

  contentMainPageBusinessElem;

  isOpenPopup = false;

  constructor() {
    this.openBusinessPopUp = this.openBusinessPopUp.bind(this);
    this.closeBusinessPopUp = this.closeBusinessPopUp.bind(this);

    this.hostElem = document.getElementById('header-host');

    if (!this.hostElem) return;

    this.popupElem = this.hostElem.querySelector('.js-header-popup-container');
    const popupWrapperElem = this.hostElem.querySelector('.js-header-popup-wrapper');
    const bottomBlockElem = this.hostElem.querySelector('.header__bottom-block-content');
    this.menuLinkElements = this.hostElem.querySelectorAll('.header__bottom-menu-link');
    this.popupContentElements = Array.from(this.hostElem.querySelectorAll('.js-header-popup'));

    const btnOpenSearch = this.hostElem.querySelector('.js-open-search-btn');
    const btnCloseSearch = this.hostElem.querySelector('.js-close-search-btn');
    const hideWhenSearchElems = Array.from(this.hostElem.querySelectorAll('.js-hide-when-search'));
    const showWhenSearchElems = Array.from(this.hostElem.querySelectorAll('.js-show-when-search'));
    const inputSearch = this.hostElem.querySelector('.js-input-search');

    this.contentMainPageBusinessElem = document.querySelector('#b-main-page-host');

    hideWhenSearchElems.map(elem => elem.classList.add('mod-show-search'));

    if (btnOpenSearch) {
      btnOpenSearch.onclick = () => {
        hideWhenSearchElems.map(elem => elem.classList.remove('mod-show-search'));
        showWhenSearchElems.map(elem => elem.classList.add('mod-show-search'));
      }
    }

    if (btnCloseSearch) {
      btnCloseSearch.onclick = () => {
        hideWhenSearchElems.map(elem => elem.classList.add('mod-show-search'));
        showWhenSearchElems.map(elem => elem.classList.remove('mod-show-search'));
        inputSearch.value = '';
      }
    }

    // наведение на ссылку в меню нижнего блока
    this.menuLinkElements.forEach(link => {
      link.onmouseover = () => {
        this.openPopUp(link);
      }
    })

    // уход с поп-ап
    document.addEventListener('mousemove', e => {
      let isMovePopup = false;
      this.popupContentElements.forEach(popup => {
        if (checkExistParent(e.target, popup)) {
          isMovePopup = true;
        }
      })
      if (this.isOpenPopup && !isMovePopup && !checkExistParent(e.target, popupWrapperElem) && !checkExistParent(e.target, bottomBlockElem)) {
        this.closePopUp();
        if (this.isBusinessMainPageHeader) {
          if (window.pageYOffset > 0) {
            this.closeBusinessPopUp();
          }
        }
      }
    })

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

      window.addEventListener('resize', () => this.changePaddingMainContent(true));
    }

    this.changePaddingMainContent(true);
  }

  // открыть поп-ап
  openPopUp(link) {
    this.isTattelekomMain = !!document.querySelector('.js-tattelekom-pages');

    // если не разделы таттелком то выполняем
    if (this.isTattelekomMain == false) {
      this.popupElem.classList.add('mod-show');
      this.popupContentElements.forEach(popupContentElem => {
        if ((popupContentElem.getAttribute('data-hover-value') === link.getAttribute('data-hover-value'))
          && !popupContentElem.className.includes('mod-show')) {
          this.popupContentElements.map(elem => {
            elem.classList.remove('mod-show');
            elem.style.marginLeft = 0;
          });
          popupContentElem.classList.add('mod-show');

          if (popupContentElem.hasAttribute('data-alignment')) {
            const distanceXLink = this.menuLinkElements[popupContentElem.getAttribute('data-alignment')].getBoundingClientRect().x;
            const distanceXContent = popupContentElem.getBoundingClientRect().x;
            popupContentElem.style.marginLeft = `${ distanceXLink - distanceXContent }px`;
          }
        }
      })

      this.isOpenPopup = true;
    }
  }

  // закрыть поп-ап
  closePopUp() {
    this.popupElem.classList.remove('mod-show');
    this.isOpenPopup = false;
  }

  // открыть бизнес поп-ап (со всей навигацией)
  openBusinessPopUp(isCloseMenu) {
    this.businessMainPageMenuHost.style.maxHeight = `${ this.businessMainPageMenuContent.offsetHeight }px`;
    this.businessMainPageMenuHost.style.overflow = 'initial';
    if (isCloseMenu) {
      this.businessMainPageMenu.classList.remove('mod-show');
    }
    this.changePaddingMainContent(true);
  }

  // закрыть бизнес поп-ап (со всей навигацией)
  closeBusinessPopUp() {
    this.businessMainPageMenuHost.style.maxHeight = 0;
    this.businessMainPageMenuHost.style.overflow = 'hidden';
    this.businessMainPageMenu.classList.add('mod-show');
    this.changePaddingMainContent(false)
  }

  changePaddingMainContent(isAdd) {
    if (this.contentMainPageBusinessElem) {
      if (isAdd) {
        setTimeout(() => {
          const headerHeight = this.hostElem.clientHeight;
          this.contentMainPageBusinessElem.style.marginTop = `calc(${ headerHeight }px - var(--header-height))`;
        }, 300) // todo костыль, потому что меню раскрывается через transition 300ms
      } else {
        this.contentMainPageBusinessElem.style.marginTop = `var(--header-height)`;
      }
    }
  }
}
