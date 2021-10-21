import Inputmask from 'inputmask';

export default function payCardCodeMask() {
  const phoneInputs = Array.from(document.querySelectorAll('.js-pay-card-code-mask'));
  phoneInputs.forEach(input => {
    const instance = new Inputmask({ mask: '999' });
    instance.mask(input);
  });
}
