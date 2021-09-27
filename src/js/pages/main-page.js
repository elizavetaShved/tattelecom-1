import common from '../common';

document.addEventListener('DOMContentLoaded', () => {
  common();
});

window.addEventListener('load', function () {
  document.body.classList.add('loaded');
  setTimeout(() => document.body.classList.add('animatable'), 300)
})

