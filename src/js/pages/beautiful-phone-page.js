import common from '../common';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import validation from '../finctions/validation';
import initSelects from '../finctions/initSelects';
import initPaginationPage from '../finctions/initPaginationPage';

document.addEventListener('DOMContentLoaded', () => {
  common();

  validation(); // в модальном окне
  initSendRequestModal();
  initSelects();

  initPaginationPage();
});
