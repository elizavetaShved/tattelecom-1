import Inputmask from 'inputmask';

export default function payCardDateMask() {
  const phoneInputs = Array.from(document.querySelectorAll('.js-pay-card-date-mask'));
  phoneInputs.forEach(input => {
    const instance = new Inputmask({ mask: '99/99' });
    instance.mask(input);
  });
}
