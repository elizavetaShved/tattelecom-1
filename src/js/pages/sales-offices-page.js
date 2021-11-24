import { OfficesMap } from '../components/offices-map';

document.addEventListener('DOMContentLoaded', () => {
  const hostElem = document.querySelector('#sales-offices-map-host');
  new OfficesMap(hostElem);
});
