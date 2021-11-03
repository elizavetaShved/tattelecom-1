import scrollByAnchor from '../finctions/scrollByAnchor';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header-host');
  if (header) {
    scrollByAnchor(header.clientHeight);
  }
  initSendRequestModal();
});
