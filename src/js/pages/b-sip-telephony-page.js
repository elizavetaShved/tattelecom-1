import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSelects();
  validation();
  phoneMask();
});
