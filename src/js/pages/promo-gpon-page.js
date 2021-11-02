import initSlider from '../finctions/initSlider';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import { Map } from '../components/map';

document.addEventListener('DOMContentLoaded', () => {
  const hostElem = document.querySelector('#gpon-map-host');

  initSlider();
  validation();
  phoneMask();

  new Map(hostElem);
});
