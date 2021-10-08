import common from '../common';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSendRequestModal();
  initAboutTariffModal();
});
