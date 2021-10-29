import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  initSlider(3);
  initSlider(4);
  initSlider(5);
  validation();
  phoneMask();
});
