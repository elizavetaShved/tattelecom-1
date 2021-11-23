import initSlider from '../finctions/initSlider';
import { Map } from '../components/map';

document.addEventListener('DOMContentLoaded', () => {
  const hostElem = document.querySelector('#gpon-map-host');
  initSlider();
  new Map(hostElem);
});
