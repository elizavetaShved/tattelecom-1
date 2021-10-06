import noUiSlider from 'nouislider';

export class Uislider {
  slider;
  updateFrom;
  updateTo;

  constructor(elem, initOptions, inputFromElem, inputToElem) {
    this.slider = noUiSlider.create(elem, initOptions);

    this.slider.on('set', () => {
      const sliderValue = this.slider.get();
      this.updateFrom = sliderValue[0];
      this.updateTo = sliderValue[1];
    });

    this.slider.on('update', (valuesTo, handle, unencoded) => {

      if (handle === 0) {
        inputFromElem.value = unencoded[handle];
      } else if (handle === 1) {
        inputToElem.value = unencoded[handle];
      }
    });

    inputFromElem.onchange = () => {
      this.updateFrom = inputFromElem.value;
      this.slider.set([this.updateFrom, this.updateTo]);
    }

    inputToElem.onchange = () => {
      this.updateTo = inputToElem.value;
      this.slider.set([this.updateFrom, this.updateTo]);
    }
  }
}
