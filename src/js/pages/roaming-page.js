import common from '../common';
import initSelects from '../finctions/initSelects';
import initMenuTabs from '../finctions/initMenuTabs';
import initDropDownMenu from '../finctions/initDropDownMenu';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSelects();
  initMenuTabs();
  initDropDownMenu();
});
