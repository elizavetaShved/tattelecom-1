import Choices from 'choices.js';

export default function initSelects() {
  const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));
  const customSelectsWithSearch = Array.from(document.querySelectorAll('.js-custom-select-search'));

  if (document.querySelectorAll('.js-custom-select')) {
    let slcts = []; 

    customSelects.forEach((select) => {
      let slct = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
      });

      slcts.push(slct);
    });

    function resetSelect() {
      slcts.forEach((el)=>{
        el.destroy();
        el.init();
      });
    };

    window.resetSelect = resetSelect;
    
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

function initSelect(elem) {
  new Choices(elem, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });
}

window.initSelect = initSelect;