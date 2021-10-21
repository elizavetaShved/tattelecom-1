import common from '../common';
import validation from '../finctions/validation';
import phoneMask from '../finctions/masks/phoneMask';
import rubMask from '../finctions/masks/rubMask';
import payCardNumberMask from '../finctions/masks/payCardNumberMask';
import payCardDateMask from '../finctions/masks/payCardDateMask';
import payCardCodeMask from '../finctions/masks/payCardCodeMask';
import initMenuTabs from '../finctions/initMenuTabs';
import initTopUpAccount from '../finctions/initModals/initTopUpAccount';

document.addEventListener('DOMContentLoaded', () => {
  common();

  validation();
  initMenuTabs();

  phoneMask();
  rubMask();
  initTopUpAccount();
  payCardNumberMask();
  payCardDateMask();
  payCardCodeMask();
});
