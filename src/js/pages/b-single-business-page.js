import initSlider from '../finctions/initSlider';
import phoneMask from '../finctions/masks/phoneMask';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  phoneMask();

  initSendRequestModal();
  initAboutTariffModal();
});
