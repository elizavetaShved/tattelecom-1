import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';
import initDropDownMenu from './finctions/initDropDownMenu';

export default function common() {
  polyfills();
  detectTouch();
  initDropDownMenu() // для футера точно нужно

  new Header();
  // new Footer();
}
