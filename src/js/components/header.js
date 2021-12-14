import { checkExistParent } from '../finctions/checkExistParent';
import getDeviceType from '../finctions/getDeviceType';
import setMaxHeightElem from '../finctions/setMaxHeightElem';

export class Header {
  hostElem;
  bodyElem;
  popupElem;
  menuWrapperElem;
  popupContentElements;
  isBusinessMainPageHeader;
  isTattelekomMain;
  menuLinkElements;
  menuLoactionElement;
  menuLoactionClose;

  businessMainPageMenu;

  contentMainPageBusinessElem;

  isOpenPopup = false;

  sideBarElem;
  sideBarContentElem;
  isOpenSideBar = false;

  linkActive;

  constructor() {
    this.checkClickBySideBar = this.checkClickBySideBar.bind(this);
    this.hostElem = document.getElementById('header-host');

    if (!this.hostElem) return;
    this.bodyElem = document.querySelector('body');
    this.popupElem = this.hostElem.querySelector('.js-header-popup-container');
    const popupWrapperElem = this.hostElem.querySelector('.js-header-popup-wrapper');
    this.menuWrapperElem = document.querySelector('.js-header-menu-wrapper');
    const bottomBlockElem = this.hostElem.querySelector('.header__bottom-block-content');
    this.menuLinkElements = this.hostElem.querySelectorAll('.header__bottom-menu-link');
    this.menuLoactionElement = this.hostElem.querySelectorAll('.js-show-location-popup');
    this.menuLoactionClose = this.hostElem.querySelector('.location-popup-content__close-btn');
    this.popupContentElements = Array.from(this.hostElem.querySelectorAll('.js-header-popup'));

    const btnOpenSearch = this.hostElem.querySelector('.js-open-search-btn');
    const btnCloseSearch = this.hostElem.querySelector('.js-close-search-btn');
    const hideWhenSearchElems = Array.from(this.hostElem.querySelectorAll('.js-hide-when-search'));
    const showWhenSearchElems = Array.from(this.hostElem.querySelectorAll('.js-show-when-search'));
    const inputSearch = this.hostElem.querySelector('.js-input-search');

    const btnOpenSideBar = this.hostElem.querySelector('.js-open-side-bar');
    const btnCloseSideBar = document.querySelector('.js-close-side-bar');
    this.sideBarElem = document.querySelector('#side-bar-host');
    this.sideBarContentElem = document.querySelector('#side-bar-content');

    this.contentMainPageBusinessElem = document.querySelector('#b-main-page-host');

    if (this.menuWrapperElem) {
      const captionMenuElems = this.menuWrapperElem.querySelectorAll('.header__b-menu-item-caption');
      setMaxHeightElem(captionMenuElems);
    }

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

    if (btnOpenSideBar) {
      btnOpenSideBar.onclick = () => {
        this.onOpenSideBar();
      }
    }

    if (btnCloseSideBar) {
      btnCloseSideBar.onclick = () => {
        this.onCloseSideBar();
      }
    }

    // наведение на ссылку в меню нижнего блока
    this.menuLinkElements.forEach(link => {
      if (getDeviceType() === 'isDesk') {
        link.onmouseover = () => {
          this.openPopUp(link);
        }
      } else if (getDeviceType() === 'isMobile') {
        link.onclick = event => {
          if (this.linkActive === link) {
            // костыль, чтобы отменить preventDefault()
            link.onclick = () => console.log();
          } else {
            event.preventDefault();
            this.openPopUp(link, true);
          }

          this.linkActive = link;
        };
      }
    })

    
    // клик по выбору города
    this.menuLoactionElement.forEach(link => {
      if (getDeviceType() === 'isDesk') {
        link.onclick = event => {
          event.preventDefault();
          this.openPopUp(link);
          this.popupElem.classList.add("mod-location");
        }
      } else if (getDeviceType() === 'isMobile') {
        link.onclick = event => {
          if (this.linkActive === link) {
            // костыль, чтобы отменить preventDefault()
            link.onclick = () => console.log();
          } else {
            event.preventDefault();
            this.openPopUp(link, true);
          }

          this.linkActive = link;
        };
      }
    })
    // клик по закрытию города
    this.menuLoactionClose.onclick = event => {
      this.closePopUp();
    };


    // уход с поп-ап
    document.addEventListener('mousemove', e => {
      let isMovePopup = false;
      this.popupContentElements.forEach(popup => {
        if (checkExistParent(e.target, popup)) {
          isMovePopup = true;
        }
      })
      if (this.isOpenPopup && !isMovePopup && !checkExistParent(e.target, popupWrapperElem) && !checkExistParent(e.target, bottomBlockElem) && !checkExistParent(e.target, this.hostElem.querySelector('.js-show-location-popup'))) {
        this.closePopUp();
        if (this.isBusinessMainPageHeader) {
          if (window.pageYOffset > 0) {
            this.closeBusinessPopUp();
          }
        }
      }
    })

    this.isBusinessMainPageHeader = !!document.querySelector('.js-business-main');

    // если это страница бизнеса (главная), то по скроллу добавялем основное меню
    if (this.isBusinessMainPageHeader) {
      this.businessMainPageMenu = this.hostElem.querySelector('.js-b-menu-header');

      this.checkScroll();

      document.addEventListener('scroll', () => {
        this.checkScroll();
      });

      window.addEventListener('resize', () => this.changePaddingMainContent(true));
    }

    this.changePaddingMainContent(true);
  }

  // открыть поп-ап
  openPopUp(link) {
    this.isTattelekomMain = !!document.querySelector('.js-tattelekom-pages');

    // если не разделы таттелком то выполняем
    if (this.isTattelekomMain === false) {
      this.popupElem.classList.add('mod-show');
      this.popupContentElements.forEach(popupContentElem => {
        if ((popupContentElem.getAttribute('data-hover-value') === link.getAttribute('data-hover-value'))
          && !popupContentElem.className.includes('mod-show')) {
          this.popupContentElements.map(elem => {
            elem.classList.remove('mod-show');
            elem.style.marginLeft = 0;
          });
          popupContentElem.classList.add('mod-show');

          // дать высоту заголовкам
          const captionsElems = popupContentElem.querySelectorAll('.header__b-popup-caption-list');
          setMaxHeightElem(captionsElems);

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

  // проверка достаточно ли проскролена старница, чтобы показать меню
  checkScroll() {
    if (window.innerWidth >= 1024) {
      if (window.pageYOffset > (this.menuWrapperElem.clientHeight)) {
        this.closeBusinessPopUp();
      } else {
        this.hideMainMenuBusiness();
        this.closePopUp();
      }
    }
  }

  // закрыть поп-ап
  closePopUp() {
    this.popupElem.classList.remove('mod-show');
    setTimeout(() => {
      this.popupElem.classList.remove("mod-location");
    }, 400);
    this.isOpenPopup = false;
  }

  // Скрыть меню бизнеса
  hideMainMenuBusiness() {
    this.businessMainPageMenu.classList.remove('mod-show');
  }

  // // закрыть бизнес поп-ап (со всей навигацией)
  closeBusinessPopUp() {
    this.businessMainPageMenu.classList.add('mod-show');
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

  onOpenSideBar() {
    this.sideBarElem.classList.add('mod-show');
    this.bodyElem.classList.add('mod-no-scroll');
    document.addEventListener('click', this.checkClickBySideBar);
  }

  onCloseSideBar() {
    this.sideBarElem.classList.remove('mod-show');
    this.isOpenSideBar = false;
    this.bodyElem.classList.remove('mod-no-scroll');
    document.removeEventListener('click', this.checkClickBySideBar);
  }

  checkClickBySideBar(event) {
    if (this.isOpenSideBar && !checkExistParent(event.target, this.sideBarContentElem)) {
      this.onCloseSideBar();
    } else {
      this.isOpenSideBar = true;
    }
  }
}
