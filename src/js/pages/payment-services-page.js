import rubMask from '../finctions/masks/rubMask';
import payCardNumberMask from '../finctions/masks/payCardNumberMask';
import payCardDateMask from '../finctions/masks/payCardDateMask';
import payCardCodeMask from '../finctions/masks/payCardCodeMask';
import initMenuTabs from '../finctions/initMenuTabs';
import initTopUpAccountModal from '../finctions/initModals/initTopUpAccountModal';


document.addEventListener('DOMContentLoaded', () => {
  initMenuTabs();
  rubMask();
  initTopUpAccountModal();
  payCardNumberMask();
  payCardDateMask();
  payCardCodeMask();
});
