import { Uislider } from '../components/uislider';

export default function initFilterUislider() {
  const uisliderElems = document.querySelectorAll('.js-filter-uislider');
  const inputFromElems = document.querySelectorAll('.js-filter-input-from');
  const inputToElems = document.querySelectorAll('.js-filter-input-to');

  uisliderElems.forEach((sliderElem, i) => {
    const minValue = +inputFromElems[i].getAttribute('data-from');
    const maxValue = +inputToElems[i].getAttribute('data-to');

    const differenceValues = maxValue - minValue;
    let step;

    switch (true) {
      case differenceValues > 1000:
        step = 10;
        break;

      case differenceValues > 10:
        step = 1
        break;

      default:
        step = 0.1
    }

    new Uislider(sliderElem, {
      prefixHostId: 0,
      start: [minValue, maxValue],
      connect: true,
      range: {
        min: minValue,
        max: maxValue
      },
      step: step,
      animationDuration: 2000
    },
      inputFromElems[i],
      inputToElems[i]
    )
  })
}
