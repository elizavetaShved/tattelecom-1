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
});
