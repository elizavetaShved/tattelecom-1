import common from '../common';
import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/phoneMask';
import initSelects from '../finctions/initSelects';
import initConnectsTariffModal from '../finctions/initModals/initConnectsTariffModal';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSlider(4);
  initSlider(3);
  initSelects();
  initConnectsTariffModal();

  validation();
  phoneMask();
});
