import common from '../common';
import initSelects from '../finctions/initSelects';
import initMenuTabs from '../finctions/initMenuTabs';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSelects();
  initMenuTabs();
});
