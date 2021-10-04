import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';
import initDropDownMenu from './finctions/initDropDownMenu';
import initCallbackModal from './finctions/initModals/initCallbackModal';

export default function common() {
  new Header();

  polyfills();
  detectTouch();
  initDropDownMenu() // для футера точно нужно
  initCallbackModal();
}
