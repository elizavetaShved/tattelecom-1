import initSendRequestModal from './finctions/initModals/initSendRequestModal';
import phoneMask from './finctions/masks/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  initSendRequestModal(); // для модалки в хедере
  phoneMask(); // для модалки в хедере
});
