import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';
import initMenuTabs from '../finctions/initMenuTabs';
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  initSlider(4);
  initSlider(3);
  initSlider(2);
  initSendRequestModal();
  initAboutTariffModal();
  initMenuTabs();
  initSelects();

  validation();
  phoneMask();
});
