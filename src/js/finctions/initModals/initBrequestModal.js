// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-callback-modal - на кнопки открывания модалки
// .js-close-callback-modal - на кнопку закрывания модалки

import { Modal } from '../../components/modal';

export default function initCallbackModal() {
    const btnsOpen = document.querySelectorAll('.js-open-send-request-modal-b');
    const btnsClose = document.querySelectorAll('.js-close-modal-b-request');
    const modalElem = document.querySelector('#modal-b-request');

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
