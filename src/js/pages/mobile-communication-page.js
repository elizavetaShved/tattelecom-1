import common from '../common';
import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/phoneMask';
import initConnectsTariffModal from '../finctions/initModals/initConnectsTariffModal';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSlider(4);
  initSlider(3);
  initSlider(2);
  initConnectsTariffModal();

  validation();
  phoneMask();
});
