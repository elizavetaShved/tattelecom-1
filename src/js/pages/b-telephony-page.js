import initSlider from '../finctions/initSlider';
import phoneMask from '../finctions/masks/phoneMask';
import initBServicesModal from '../finctions/initModals/initBServicesModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  phoneMask();

  initBServicesModal();
});
