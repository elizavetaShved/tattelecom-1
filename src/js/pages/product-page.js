import initSlider from '../finctions/initSlider';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initSelects from '../finctions/initSelects';
import initInstallmentsModal from '../finctions/initModals/initInstallmentsModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSendRequestModal();
  initInstallmentsModal();
  initSelects();
});
