import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import initSlider from './finctions/initSlider';

export default function common() {
  polyfills();
  detectTouch();

  initSlider(4);
}
