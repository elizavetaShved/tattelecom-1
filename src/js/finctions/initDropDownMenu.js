// добавить классы:
// gl__drop-menu-btn и js-drop-menu-btn - на кнопку открытия
// data-drop-menu-open - на кнопку открытия, если нужно, чтоб изначально меню было раскрыто
// js-drop-menu-leave-open - на кнопку открытия, если НЕ нужно автозакрывание неактивных
// gl__drop-menu-container и js-drop-menu-container - обернуть меню в этот класс (для max-height = 0)
// gl__drop-menu и js-drop-menu - на само меню
// gl__drop-menu-icon- на иконку стрелки

  export default function initDropDownMenu() {
  const linksTitleElements = Array.from(document.querySelectorAll('.js-drop-menu-btn'));
  const menuContainerElements = Array.from(document.querySelectorAll('.js-drop-menu-container'));
  const menuElements = Array.from(document.querySelectorAll('.js-drop-menu'));

  const onClose = (btnElem, menuContainerElem) => {
    btnElem.classList.remove('mod-open');
    menuContainerElem.classList.remove('mod-open');
    menuContainerElem.style.maxHeight = 0;
  }

  const onOpen = (btnElem, menuContainerElem, menuElem) => {
    btnElem.classList.add('mod-open');
    menuContainerElem.classList.add('mod-open');
    const heightContent = menuElem.clientHeight;
    menuContainerElem.style.maxHeight = `${ heightContent }px`;
  }

  linksTitleElements.forEach((btn, i) => {
    if (btn.hasAttribute('data-drop-menu-open')) {
      onOpen(btn, menuContainerElements[i], menuElements[i]);
    }

    btn.onclick = () => {
      if (btn.className.includes('mod-open')) {
        onClose(btn, menuContainerElements[i]);
      } else {
        if (!btn.className.includes('js-drop-menu-leave-open')) {
          linksTitleElements.map((elem, idx) => {
            onClose(elem, menuContainerElements[idx]);
          });
        }
        onOpen(btn, menuContainerElements[i], menuElements[i]);
      }
    }
  })
}
