import common from '../common';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initSelects from '../finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  common();

  initSelects();
  validation();
  phoneMask();
});
