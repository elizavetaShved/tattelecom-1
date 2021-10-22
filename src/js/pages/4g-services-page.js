import common from '../common';
import initFilterUislider from '../finctions/initFilterUislider';
import initPaginationPage from '../finctions/initPaginationPage';
import initFilterMobile from '../finctions/initFilterMobile';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initFilterUislider();
  initPaginationPage();
  initFilterMobile();
});
