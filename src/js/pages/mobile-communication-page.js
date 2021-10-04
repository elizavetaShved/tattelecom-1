import common from '../common';
import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/phoneMask';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSlider(4);
  initSlider(3);
  initSlider(2);
  initSendRequestModal();
  initAboutTariffModal();

  validation();
  phoneMask();
});
