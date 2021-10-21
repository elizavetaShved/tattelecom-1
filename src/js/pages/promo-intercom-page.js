import common from '../common';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  common();

  validation();
  phoneMask();
});
