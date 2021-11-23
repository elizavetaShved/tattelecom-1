import initSlider from '../finctions/initSlider';
import initSelects from '../finctions/initSelects';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';
import initMenuTabs from '../finctions/initMenuTabs';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSelects();
  initAboutTariffModal();
  initMenuTabs();
});
