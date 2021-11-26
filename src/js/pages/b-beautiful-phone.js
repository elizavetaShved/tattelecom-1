import phoneMask from '../finctions/masks/phoneMask';
import initSelects from '../finctions/initSelects';
import initPaginationPage from '../finctions/initPaginationPage';

document.addEventListener('DOMContentLoaded', () => {
  phoneMask();
  initSelects();
  initPaginationPage();
});
