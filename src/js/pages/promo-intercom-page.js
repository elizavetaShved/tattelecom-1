import common from '../common';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';

document.addEventListener('DOMContentLoaded', () => {
  common();

  validation();
  phoneMask();
  initSendRequestModal();
});
