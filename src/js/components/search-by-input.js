export class SearchByInput {

  constructor() {
    const hostElem = document.querySelector('#questions-host');
    const inputSearch = hostElem.querySelector('.js-input-search');
    const searchItemElems = hostElem.querySelectorAll('.js-input-search-item');

    let timeout;

    inputSearch.oninput = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        searchItemElems.forEach(searchItemElem => {
          if (searchItemElem.innerText.toLowerCase().includes(inputSearch.value.toLowerCase())) {
            searchItemElem.classList.add('mod-select');
          } else {
            searchItemElem.classList.remove('mod-select');
          }
        })

        if (inputSearch.value == "") {
          searchItemElems.forEach(searchItemElem => {
            searchItemElem.classList.remove('mod-select');
          })
        }
      }, 500)
    }
  }
}
