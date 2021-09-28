// добавить классы:
// gl__drop-menu-btn и js-drop-menu-btn - на кнопку открытия
// gl__drop-menu - на само меню
// gl__drop-menu-icon- на иконку стрелки

export default function initDropDownMenu() {
  const linksTitleElements = Array.from(document.querySelectorAll('.js-drop-menu-btn'));

  linksTitleElements.forEach(btn => {
    btn.onclick = () => {
      if (btn.className.includes('mod-open')) {
        btn.classList.remove('mod-open');
      } else {
        linksTitleElements.map(elem => elem.classList.remove('mod-open'));
        btn.classList.add('mod-open');
      }
    }
  })
}
