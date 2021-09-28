import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';
import { Footer } from './components/footer';

export default function common() {
  polyfills();
  detectTouch();

  new Header();
  new Footer();
}
