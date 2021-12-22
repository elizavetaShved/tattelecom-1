document.addEventListener('DOMContentLoaded', () => {

  // для открытия модалки "Спасибо" в Случае успешной отправки формы
  // modalElemId - необяз.параметр (н-р, 'modal-callback-host').
  // Если submit происходил из другой модалки и в случае успешной отправки ее нужно закрыть перед открытие "Спасибо"
  function openThanksModal(modalElemId) {
    const modalThanksContainerElem = document.querySelector('#modal-thanks-container');
    const modalThanksElem = document.querySelector('#modal-thanks');
    const modalThanksCloseBtn = document.querySelector('#close-thanks-modal');


    const bodyElem = document.querySelector('body');

    let isOpenModal = false;
    let isOpenThanksModal = false;

    const modalElem = document.querySelector(modalElemId);
    if (modalElem) {
      const modalContainerElem = modalElem.querySelector('.js-modal-container');
      const modalContentElem = modalElem.querySelector('.js-modal-content');

      const checkClickByModal = (event) => {
        if (isOpenModal && !checkExistParent(event.target, modalContainerElem)) {
          onCloseModal();
        } else {
          isOpenModal = true;
        }
      }

      const setHeightModalContainer = () => {
        if (modalContentElem) {
          modalContainerElem.style.height = `${ modalContentElem.scrollHeight }px`;
        }
      }

      const onCloseModal = () => {
        modalElem.classList.remove('mod-show');
        isOpenModal = false;
        document.removeEventListener('click', checkClickByModal);
        window.removeEventListener('resize', setHeightModalContainer);
        bodyElem.classList.remove('mod-no-scroll');
      }

      onCloseModal();
    } 

    const checkClickByModalThanks = (event) => {
      if (isOpenThanksModal && !checkExistParent(event.target, modalThanksContainerElem)) {
        onCloseModalThanks();
      } else {
        isOpenThanksModal = true;
      }
    }

    const onCloseModalThanks = () => {
      modalThanksElem.classList.remove('mod-show');
      isOpenThanksModal = false;
      document.removeEventListener('click', checkClickByModalThanks);
    }

    modalThanksElem.classList.add('mod-show'); 
    document.addEventListener('click', checkClickByModalThanks);

    modalThanksCloseBtn.onclick = () => {
      onCloseModalThanks();
    }
  }

  window.openThanksModal = openThanksModal;

  function openModal(modalElemId) {
    const bodyElem = document.querySelector('body');

    let isOpenModal = false;

    const modalElem = document.querySelector(modalElemId);
    const modalContainerElem = modalElem.querySelector('.js-modal-container');
    const modalContentElem = modalElem.querySelector('.js-modal-content');
    const btnClose = modalElem.querySelector('.modal__btn-close');

    const checkClickByModal = (event) => {
      if (isOpenModal && !checkExistParent(event.target, modalContainerElem)) {
        onCloseModal();
      } else {
        isOpenModal = true;
      }
    }

    const setHeightModalContainer = () => {
      if (modalContentElem) {
        modalContainerElem.style.height = `${ modalContentElem.scrollHeight }px`;
      }
    }

    const onOpenModal = () => {
      modalElem.classList.add('mod-show');
      setHeightModalContainer();
      bodyElem.classList.add('mod-no-scroll');
  
      window.addEventListener('resize', setHeightModalContainer);
    }
    onOpenModal();

    const onCloseModal = () => {
      modalElem.classList.remove('mod-show');
      isOpenModal = false;
      document.removeEventListener('click', checkClickByModal);
      window.removeEventListener('resize', setHeightModalContainer);
      bodyElem.classList.remove('mod-no-scroll');
    }


    btnClose.onclick = () => {
      onCloseModal();
    }
  }

  window.openModal = openModal;

  function initRequestModal(modalElemId) {
    const btnsOpen = document.querySelectorAll('.js-open-send-request-modal');

    btnsOpen.forEach((btn)=>{
      btn.addEventListener("click", ()=>{
        window.openModal(modalElemId)
      })
    })
  }

  window.initRequestModal = initRequestModal;

  // вспомогательная функция проекта (нельзя было экспортить её)
  function checkExistParent(child, parent) {
    let targetElement = child;

    do {
      if (targetElement === parent) {
        return true;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);

    return false;
  }

  // страница технические работы
  const yearSelect = document.querySelector("select[name=year-select]");
  const monthSelect = document.querySelector("select[name=mouth-select]");

  if (yearSelect) {    
    yearSelect.addEventListener("change", (e) => {
      let self = e.target;
      let value = e.target.options[e.target.selectedIndex].value;
      let form = self.closest("form");
  
      form.submit();
    });
  }

  if (monthSelect) {
    monthSelect.addEventListener("change", (e) => {
      let self = e.target;
      let value = e.target.options[e.target.selectedIndex].value;
      let form = self.closest("form");
  
      form.submit();
    });
  }

  // табы инициализация
  function initDropDownMenu() {
    const linksTitleElements = Array.from(document.querySelectorAll('.js-drop-menu-btn'));
    const menuContainerElements = Array.from(document.querySelectorAll('.js-drop-menu-container'));
    const menuElements = Array.from(document.querySelectorAll('.js-drop-menu'));
  
    const onClose = (btnElem, menuContainerElem, contentBtnHide, contentBtnOpen) => {
      btnElem.classList.remove('mod-open');
      menuContainerElem.classList.remove('mod-open');
      menuContainerElem.style.maxHeight = 0;
  
      if (contentBtnHide && contentBtnOpen) {
        contentBtnHide.classList.add('mod-show');
        contentBtnOpen.classList.remove('mod-show');
      }
    }
  
    const onOpen = (btnElem, menuContainerElem, menuElem, contentBtnHide, contentBtnOpen) => {
      btnElem.classList.add('mod-open');
      menuContainerElem.classList.add('mod-open');
      const heightContent = menuElem.clientHeight;
      menuContainerElem.style.maxHeight = `${ heightContent }px`;
  
      if (contentBtnHide && contentBtnOpen) {
        contentBtnHide.classList.remove('mod-show');
        contentBtnOpen.classList.add('mod-show');
      }
    }
  
    linksTitleElements.forEach((btn, i) => {
      if (btn.hasAttribute('data-drop-menu-open')) {
        onOpen(btn, menuContainerElements[i], menuElements[i]);
      }
  
      const contentBtnHide = btn.querySelector('.js-drop-menu-btn-content-hide');
      const contentBtnOpen = btn.querySelector('.js-drop-menu-btn-content-open');
  
      btn.onclick = () => {
        if (btn.className.includes('mod-open')) {
          onClose(btn, menuContainerElements[i], contentBtnHide, contentBtnOpen);
        } else {
          if (!btn.className.includes('js-drop-menu-leave-open')) {
            linksTitleElements.map((elem, idx) => {
              onClose(elem, menuContainerElements[idx], contentBtnHide, contentBtnOpen);
            });
          }
          onOpen(btn, menuContainerElements[i], menuElements[i], contentBtnHide, contentBtnOpen);
        }
      }
    })
  }

  window.initDropDownMenu = initDropDownMenu;
});
