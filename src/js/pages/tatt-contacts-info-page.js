import initFilterMobile from '../finctions/initFilterMobile';
import { Map } from '../components/map';

document.addEventListener('DOMContentLoaded', () => {
  initFilterMobile();
  const hostElem = document.querySelector('#contacts-info-host');
  new Map(hostElem);
});

