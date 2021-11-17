import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initMenuTabs from '../finctions/initMenuTabs';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initMenuTabs();
  validation();
  phoneMask();
});
