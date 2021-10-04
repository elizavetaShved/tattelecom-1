import common from '../common';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import validation from '../finctions/validation';

document.addEventListener('DOMContentLoaded', () => {
  common();

  validation(); // в модальном окне
  initSendRequestModal();
});
