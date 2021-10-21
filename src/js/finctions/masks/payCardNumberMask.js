import Inputmask from 'inputmask';

export default function payCardNumberMask() {
  const phoneInputs = Array.from(document.querySelectorAll('.js-pay-card-number-mask'));
  phoneInputs.forEach(input => {
    const instance = new Inputmask({ mask: '9999 9999 9999 9999' });
    instance.mask(input);
  });
}
