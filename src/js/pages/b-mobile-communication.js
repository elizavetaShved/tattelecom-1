import initSlider from "../finctions/initSlider";
import phoneMask from '../finctions/masks/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  initSlider(3);
  phoneMask();
});
//
// window.addEventListener('load', () => {
//   alignHeights('#js-align-heights', '.b-promotion__title');
// })
