import common from '../common';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';
import initFilterMobile from '../finctions/initFilterMobile';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSendRequestModal();
  initAboutTariffModal();
  initSendRequestModal();
  initFilterMobile();
});
