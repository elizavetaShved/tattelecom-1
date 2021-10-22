import common from '../common';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', () => {
    common();

    initQuestionsTabs();
});

function initQuestionsTabs() {
    const container = document.querySelector('#questionsPage');
    if (!container) return;

    const nav = container.querySelector('.questions__tabs-header');
    const navLinks = nav.querySelectorAll('.questions__tab-nav-btn');

    const contentContainer = container.querySelector('.questions__tabs-content');
    const tabsContent = contentContainer.querySelectorAll('.questions-content');

    tabsContent[0].classList.add('active');
    navLinks[0].classList.add('active-tab');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const linkHash = link.dataset.hash;

            // Находим по id нужную секцию
            for (let i = 0; i < tabsContent.length; i++) {
                const key = tabsContent[i].id;

                if (key === linkHash) {
                    tabsContent[i].classList.add('active');
                    navLinks[i].classList.add('active-tab');
                } else {
                    tabsContent[i].classList.remove('active');
                    navLinks[i].classList.remove('active-tab');
                }
            }
        });

        // const linkContainer = link.closest('.questions__tab-nav');
        // const subLinks = linkContainer.querySelectorAll('.questions__tab-nav-content-unit-link');

        // subLinks.forEach(subLink => {
        //     subLink.addEventListener('click', () => {
        //         let hash = subLink.href.split('#')[1];
        //         hash = '#' + hash;
        //         console.log(hash);
        //         gsap.to(window, { duration: 1, scrollTo: hash });
        //     });
        // });
    });
}
