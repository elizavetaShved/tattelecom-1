import initSlider from '../finctions/initSlider';
import phoneMask from '../finctions/masks/phoneMask';
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSelects();
  phoneMask();
});
