import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initMenuTabs from '../finctions/initMenuTabs';
import initDropDownMenu from '../finctions/initDropDownMenu';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initMenuTabs();
  initDropDownMenu();
  validation();
  phoneMask();
});
