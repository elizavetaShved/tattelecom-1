import initSelects from '../finctions/initSelects';
import phoneMask from '../finctions/masks/phoneMask';
import initMenuTabs from '../finctions/initMenuTabs';

document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  initMenuTabs();
  phoneMask();
});
