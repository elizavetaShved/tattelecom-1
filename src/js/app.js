import polyfills from './finctions/polyfills';
import './finctions/lazyload';
import detectTouch from './finctions/detectTouch';

document.addEventListener('DOMContentLoaded', () => {
  polyfills();
  detectTouch();
});

window.addEventListener('load', function () {
  document.body.classList.add('loaded');
  setTimeout(() => document.body.classList.add('animatable'), 300)
})
