import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initDropDownMenu from "../finctions/initDropDownMenu";

document.addEventListener('DOMContentLoaded', () => {
  validation();
  phoneMask();
  initDropDownMenu();
});