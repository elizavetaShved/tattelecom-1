// js-menu-tabs-container - на контейнер
// js-menu-tab-content, data-menu-<mobile> и gl__menu-tab-content - на подменяемый контент

export default function initMenuTabs() {
  const menuTabsContainerElems = document.querySelectorAll('.js-menu-tabs-container');

  menuTabsContainerElems.forEach(menuTabsContainer => {
    const menuTabs = menuTabsContainer.querySelectorAll('.js-menu-tab');
    const contentElems = menuTabsContainer.querySelectorAll('.js-menu-tab-content');

    menuTabs.forEach((tab, index) => {
      if (tab.hasAttribute('checked')) {
        contentElems[index].classList.add('mod-show');
      }

      tab.onclick = () => {
        contentElems.forEach(contentElem => {
          if (contentElem.hasAttribute(`data-menu-${ tab.value }`)) {
            contentElem.classList.add('mod-show');
          } else {
            contentElem.classList.remove('mod-show');
          }
        })
      }
    })
  })
}