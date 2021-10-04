import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';
import initDropDownMenu from './finctions/initDropDownMenu';
import initModal from './finctions/initModal';

export default function common() {
  new Header();

  polyfills();
  detectTouch();
  initDropDownMenu() // для футера точно нужно
  initModal();
}
