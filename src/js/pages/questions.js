import scrollByAnchor from '../finctions/scrollByAnchor';
import { SearchByNavMenu } from '../components/search-by-nav-menu';
import { SearchByInput } from '../components/search-by-input';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#layout-header-host');
  if (header) {
    scrollByAnchor(header.clientHeight + 60);
  }

  new SearchByNavMenu();
  new SearchByInput();
});
