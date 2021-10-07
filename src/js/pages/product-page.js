import common from '../common';
import initSlider from '../finctions/initSlider';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSlider(4);
  initSendRequestModal();
  initSelects();
});
