// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__
// .js-open-callback-modal - на кнопки открывания модалки
// .js-close-modal - на кнопку закрывания модалки
// #modal-callback-host - компонент модалки
// .js-modal-container - окно модалки
// .js-form-modal - форма в модалке
// .js-btn-submit - кнопка сабмита в форме додалки

import { Modal } from '../components/modal';

export default function initModal() {
  new Modal(
    '.js-open-callback-modal',
    '#modal-callback-host'
  );
}
