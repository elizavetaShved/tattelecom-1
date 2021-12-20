// import Choices from 'choices.js';

document.addEventListener('DOMContentLoaded', () => {
    const filterResetBtn = document.querySelector(".js-filter-reset");

    filterResetBtn.addEventListener("click", ()=>{
        let form = filterResetBtn.closest("form");
        let selects = form.querySelector(".js-custom-select");

        resetSelect(selects);
    });
});