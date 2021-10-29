import initSlider from "../finctions/initSlider";
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initDropDownMenu from "../finctions/initDropDownMenu";

document.addEventListener('DOMContentLoaded', () => {
  initSlider(3);
  initSlider(4);
  validation();
  phoneMask();
  initDropDownMenu();
});