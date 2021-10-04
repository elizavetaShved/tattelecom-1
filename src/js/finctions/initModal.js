// модалка "Оставьте свой номер, мы перезвоним Вам в течение 15 минут."
// __классы для кнопок__

import { Modal } from '../components/modal';

export default function initModal() {
  new Modal(
    '.js-open-callback-modal',
    '.js-close-callback-modal',
    '#modal-callback-host'
  );
}
