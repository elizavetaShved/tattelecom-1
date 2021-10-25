import common from '../common';
import scrollByAnchor from '../finctions/scrollByAnchor';
import { SearchByNavMenu } from '../components/search-by-nav-menu';
import { SearchByInput } from '../components/search-by-input';

document.addEventListener('DOMContentLoaded', () => {
  common();

  const header = document.querySelector('#header-host');
  if (header) {
    scrollByAnchor(header.clientHeight + 60);
  }

  new SearchByNavMenu();
  new SearchByInput();
});
