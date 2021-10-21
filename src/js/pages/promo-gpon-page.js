import common from '../common';
import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import { Map } from '../components/map';

document.addEventListener('DOMContentLoaded', () => {
  const hostElem = document.querySelector('#gpon-map-host');

  common();

  initSlider(4);
  validation();
  phoneMask();

  new Map(hostElem);
});
