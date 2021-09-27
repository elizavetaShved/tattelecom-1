import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';

export default function common() {
  polyfills();
  detectTouch();
}
