import common from '../common';
import initSelects from '../finctions/initSelects';
import initPaginationPage from '../finctions/initPaginationPage';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSelects();
  initPaginationPage();
});
