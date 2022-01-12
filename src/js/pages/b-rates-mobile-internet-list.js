import initSlider from "../finctions/initSlider";
import phoneMask from '../finctions/masks/phoneMask';
import initBServicesModal from '../finctions/initModals/initBServicesModal';
import initBrequestModal from '../finctions/initModals/initBrequestModal';


document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  phoneMask();

  initBServicesModal();
  initBrequestModal();
});
