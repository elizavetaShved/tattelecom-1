import Choices from 'choices.js';

export default function initSelects() {
  const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));
  const customSelectsWithSearch = Array.from(document.querySelectorAll('.js-custom-select-search'));

  if (document.querySelectorAll('.js-custom-select')) {
    customSelects.forEach((select) => {
      new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
      });
    });
  }

  if (document.querySelectorAll('.js-custom-select-search')) {
    customSelectsWithSearch.forEach((select) => {
      new Choices(select, {
        searchEnabled: true,
        itemSelectText: '',
        shouldSort: false,
      });
    });
  }
}
