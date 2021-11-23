import scrollByAnchor from '../finctions/scrollByAnchor';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header-host');
  if (header) {
    scrollByAnchor(header.clientHeight);
  }
});
