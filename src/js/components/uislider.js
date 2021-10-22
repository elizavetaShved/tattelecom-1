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

    this.slider.on('update', (valuesTo) => {
      inputFromElem.value = +valuesTo[0];
      inputToElem.value = +valuesTo[1];
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
