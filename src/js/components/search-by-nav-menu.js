export class SearchByNavMenu {

  constructor() {
    const hostElem = document.querySelector('#questions-host');

    const nav = hostElem.querySelector('.questions__nav');
    const navLinks = nav.querySelectorAll('.questions__tab-nav-btn');

    const contentContainer = hostElem.querySelector('.questions__tabs-content');
    const tabsContent = contentContainer.querySelectorAll('.questions-content');

    tabsContent[0].classList.add('active');
    navLinks[0].classList.add('active-tab');

    let subLinks = [];

    navLinks.forEach(link => {
      const linkContainer = link.closest('.questions__tab-nav');
      const subLnks = Array.from(linkContainer.querySelectorAll('.questions__tab-nav-content-unit-link'));
      subLinks = [...subLinks, ...subLnks];

      link.addEventListener('click', () => {
        const linkHash = link.href.split('#')[1];

        // Находим по id нужную секцию
        tabsContent.forEach((tabElem, index) => {
          const key = tabElem.id;
          if (key === linkHash) {
            tabElem.classList.add('active');
            navLinks[index].classList.add('active-tab');
          } else {
            tabElem.classList.remove('active');
            navLinks[index].classList.remove('active-tab');
          }
        })


        // for (let i = 0; i < tabsContent.length; i++) {
        //   const key = tabsContent[i].id;
        //
        //   if (key === linkHash) {
        //     tabsContent[i].classList.add('active');
        //     navLinks[i].classList.add('active-tab');
        //   } else {
        //     tabsContent[i].classList.remove('active');
        //     navLinks[i].classList.remove('active-tab');
        //   }
        // }
      });
    });

    subLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('opened');
      });
    });

    // Кнопка открытия меню (мобилка)
    const menuOpenBtn = nav.querySelector('.questions__nav-mobile-btn');
    menuOpenBtn.addEventListener('click', () => {
      nav.classList.toggle('opened');
    });
  }
}
