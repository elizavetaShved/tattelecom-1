import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import validation from '../finctions/validation';
import initSelects from '../finctions/initSelects';
import initPaginationPage from '../finctions/initPaginationPage';
import phoneMask from '../finctions/masks/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  validation(); // в модальном окне
  initSendRequestModal();
  initSelects();
  phoneMask();

  initPaginationPage();
});
