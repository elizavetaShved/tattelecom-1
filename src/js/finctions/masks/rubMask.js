import Inputmask from 'inputmask';

export default function rubMask() {
  const phoneInputs = Array.from(document.querySelectorAll('.js-rub-mask'));
  phoneInputs.forEach(input => {
    const instance = new Inputmask({ mask: '[9][9][9][9][9][9][9][9][9] ₽' });
    instance.mask(input);
  });
}
