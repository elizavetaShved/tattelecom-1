import initSlider from "../finctions/initSlider";
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import initDropDownMenu from "../finctions/initDropDownMenu";
import initSendRequestModal from '../finctions/initModals/initSendRequestModal';
import initAboutTariffModal from '../finctions/initModals/initAboutTariffModal';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  validation();
  phoneMask();
  initDropDownMenu();

  initSendRequestModal();
  initAboutTariffModal();
});
