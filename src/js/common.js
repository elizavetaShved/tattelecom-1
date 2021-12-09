import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';
import initDropDownMenu from './finctions/initDropDownMenu';
import initCallbackModal from './finctions/initModals/initCallbackModal';
import validation from './finctions/validation';
import initSelects from './finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  new Header();

  polyfills();
  detectTouch();
  initDropDownMenu() // для футера точно нужно
  initCallbackModal();
  validation();
  initSelects();
});
