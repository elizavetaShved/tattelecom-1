import alignHeights from "../finctions/alignHeights";
import initSlider from "../finctions/initSlider";
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  initSlider(3);
  validation();
  phoneMask();
});

window.addEventListener('load', () => {
  alignHeights('#js-align-heights', '.b-promotion__title');
})