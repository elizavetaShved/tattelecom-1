import common from '../common';
import initFilterUislider from '../finctions/initFilterUislider';
import initPaginationPage from '../finctions/initPaginationPage';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initFilterUislider();
  initPaginationPage();
});
