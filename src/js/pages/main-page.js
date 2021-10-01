import common from '../common';
import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/phoneMask';
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSlider(4);
  initSlider(3);
  initSelects();

  validation();
  phoneMask();
});
