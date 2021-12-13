
import initMenuTabs from '../finctions/initMenuTabs';
import { OfficesMap } from '../components/offices-map';

document.addEventListener('DOMContentLoaded', () => {
  ;
  initMenuTabs();
  const hostElem = document.querySelector('#sales-offices-map-host');
  new OfficesMap(hostElem);
});
