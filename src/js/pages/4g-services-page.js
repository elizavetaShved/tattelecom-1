import initFilterUislider from '../finctions/initFilterUislider';
import initPaginationPage from '../finctions/initPaginationPage';
import initFilterMobile from '../finctions/initFilterMobile';
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';

document.addEventListener('DOMContentLoaded', () => {
  initFilterUislider();
  initPaginationPage();
  initFilterMobile();

  initSendRequestModal();
});
