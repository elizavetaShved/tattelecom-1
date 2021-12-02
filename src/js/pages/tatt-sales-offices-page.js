import initSelects from '../finctions/initSelects';
import initMenuTabs from '../finctions/initMenuTabs';
import { OfficesMap } from '../components/offices-map';

document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  initMenuTabs();
  const hostElem = document.querySelector('#sales-offices-map-host');
  new OfficesMap(hostElem);
});
