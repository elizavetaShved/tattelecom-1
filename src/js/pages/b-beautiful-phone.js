import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initDropDownMenu from "../finctions/initDropDownMenu";
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  validation();
  phoneMask();
});