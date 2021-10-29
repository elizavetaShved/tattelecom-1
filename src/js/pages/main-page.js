import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSelects from '../finctions/initSelects';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';
import initMenuTabs from '../finctions/initMenuTabs';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSelects();
  initSendRequestModal();
  initAboutTariffModal();
  initMenuTabs();

  validation();
  phoneMask();
});
