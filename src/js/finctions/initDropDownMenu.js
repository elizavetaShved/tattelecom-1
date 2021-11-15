// добавить классы:
// .gl__drop-menu-btn.js-drop-menu-btn - на кнопку открытия
// .data-drop-menu-open - на кнопку открытия, если нужно, чтоб изначально меню было раскрыто
// .js-drop-menu-leave-open - на кнопку открытия, если НЕ нужно автозакрывание неактивных
// .gl__drop-menu-container.js-drop-menu-container - обернуть меню в этот класс (для max-height = 0)
// .gl__drop-menu.js-drop-menu - на само меню
// .gl__drop-menu-icon - на иконку стрелки
//  если меняющийся текст кнопки:
// .gl__drop-menu-btn-content.js-drop-menu-btn-content-hide.mod-show - текст кнопки, когда меню скрыто
// .gl__drop-menu-btn-content.js-drop-menu-btn-content-open - текст кнопки, когда меню открыто

  export default function initDropDownMenu() {
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
