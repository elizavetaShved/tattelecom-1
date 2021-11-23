import phoneMask from '../finctions/masks/phoneMask';
import initSlider from '../finctions/initSlider';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSendRequestModal();
  phoneMask();
});
