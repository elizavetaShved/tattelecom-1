import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';

export default function common() {
  polyfills();
  detectTouch();

  new Header();
}
