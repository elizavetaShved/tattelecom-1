// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-callback-modal - на кнопки открывания модалки
// .js-close-callback-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initCallbackModal() {
    const btnsOpen = document.querySelectorAll('.js-open-services-modal-b');
    const btnsClose = document.querySelectorAll('.js-close-b-request-services-modal');
    const modalElem = document.querySelector('#b-request-services-modal');

    let modalComponent;

    btnsOpen.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            modalComponent = new Modal(modalElem);
            modalComponent.onOpenModal();
        };
    })

    btnsClose.forEach(btn => {
        btn.onclick = () => {
            modalComponent.onCloseModal();
        }
    })
}
