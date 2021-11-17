import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  validation();
  phoneMask();

  initSendRequestModal();
});
