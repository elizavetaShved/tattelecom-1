import polyfills from './finctions/polyfills';
import detectTouch from './finctions/detectTouch';
import { Header } from './components/header';
import initDropDownMenu from './finctions/initDropDownMenu';
import initCallbackModal from './finctions/initModals/initCallbackModal';
import initSlider from './finctions/initSlider';
import initSendRequestModal from './finctions/initModals/initSendRequestModal';
import initInstallmentsModal from './finctions/initModals/initInstallmentsModal';
import initSelects from './finctions/initSelects';

document.addEventListener('DOMContentLoaded', () => {
  new Header();

  polyfills();
  detectTouch();
  initDropDownMenu() // для футера точно нужно
  initCallbackModal();
});
// export default function common() {
//
// }
