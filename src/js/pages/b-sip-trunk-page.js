import initSelects from '../finctions/initSelects';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initMenuTabs from '../finctions/initMenuTabs';

document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  initMenuTabs();
  validation();
  phoneMask();
});
