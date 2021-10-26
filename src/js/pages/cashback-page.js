import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import validation from '../finctions/validation';

document.addEventListener('DOMContentLoaded', () => {
  validation(); // в модальном окне
  initSendRequestModal();
});
