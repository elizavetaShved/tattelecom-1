// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-callback-modal - на кнопки открывания модалки
// .js-close-callback-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initCallbackModal() {
    const btnsOpen = document.querySelectorAll('.js-open-b-roaming-modal');
    const btnsClose = document.querySelectorAll('.js-close-b-roaming-modal');
    const modalElem = document.querySelector('#b-roaming-modal');
    const modalElemHeading = modalElem.querySelector('.modal__title');

    let modalComponent;

    btnsOpen.forEach(btn => {
        const btnHeading = btn.dataset.heading;
        btn.onclick = (e) => {
            e.preventDefault();
            modalComponent = new Modal(modalElem);
            modalElemHeading.innerHTML = btnHeading;
            modalComponent.onOpenModal();
        };
    })

    btnsClose.forEach(btn => {
        btn.onclick = () => {
            modalComponent.onCloseModal();
        }
    })
}
