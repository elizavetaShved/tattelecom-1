import initSelects from '../finctions/initSelects';
import initPaginationPage from '../finctions/initPaginationPage';
import initFilterMobile from '../finctions/initFilterMobile';

document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  initPaginationPage();
  initFilterMobile();
});
