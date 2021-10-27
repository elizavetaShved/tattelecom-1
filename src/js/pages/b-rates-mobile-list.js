import alignHeights from "../finctions/alignHeights";
import initSlider from "../finctions/initSlider";

document.addEventListener('DOMContentLoaded', () => {
  initSlider(3);
  initSlider(4);
});

window.addEventListener('load', () => {
  alignHeights('#js-align-tariffs-heights', '.b-tariffs-item__services-list');
})