import alignHeights from "../finctions/alignHeights";
import initSlider from "../finctions/initSlider";

document.addEventListener('DOMContentLoaded', () => {
  initSlider(3);
});

window.addEventListener('load', () => {
  alignHeights('#js-align-heights', '.b-promotion__title');
})