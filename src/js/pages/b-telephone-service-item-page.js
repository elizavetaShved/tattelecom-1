import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSlider from '../finctions/initSlider';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  validation();
  phoneMask();
});
