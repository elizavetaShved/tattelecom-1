import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSelects from '../finctions/initSelects';
import initCallbackModal from '../finctions/initModals/initCallbackModal';

document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  validation();
  phoneMask();

  initCallbackModal();
});
