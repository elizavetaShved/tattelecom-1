import initSlider from '../finctions/initSlider';
import phoneMask from '../finctions/masks/phoneMask';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  phoneMask();

  initSendRequestModal();
});
