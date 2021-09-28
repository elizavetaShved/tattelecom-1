export class Footer {

  constructor() {
    const hostElem = document.getElementById('footer-host');
    if (!hostElem) return;

    const linksTitleElements = Array.from(hostElem.querySelectorAll('.footer__link-title'));

    linksTitleElements.forEach(btn => {
      if (window.innerWidth < 768) {
        btn.onclick = () => {
          if (btn.className.includes('mod-open')) {
            btn.classList.remove('mod-open');
          } else {
            linksTitleElements.map(elem => elem.classList.remove('mod-open'));
            btn.classList.add('mod-open');
          }
        }
      }
    })
  }
}
