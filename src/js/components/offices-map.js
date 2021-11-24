export class OfficesMap {
  hostElem;
  mapElem;
  myMap;
  officesElems;

  officesDataArr = [];

  inputSearch;
  checkboxPartner;

  constructor(hostElem) {
    this.initMap = this.initMap.bind(this);

    this.hostElem = hostElem;
    this.mapElem = this.hostElem.querySelector('.js-map');
    this.officesElems = this.hostElem.querySelectorAll('.js-offices-item');
    this.inputSearch = this.hostElem.querySelector('.js-input-search');
    this.checkboxPartner = this.hostElem.querySelector('.js-checkbox');

    ymaps.ready(this.initMap);
  }

  initMap() {
    const center = JSON.parse(this.mapElem.getAttribute('data-center'));

    this.myMap = new ymaps.Map(this.mapElem, {
      center: center,
      controls: [],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    });

    this.officesElems.forEach(officeElem => {
      const newItem = {
        elem: officeElem,
        coords: JSON.parse(officeElem.getAttribute('data-coord')),
        address: officeElem.querySelector('.js-address').innerText,
        city: officeElem.querySelector('.js-city').innerText,
        isPartner: officeElem.hasAttribute('data-is-partner'),
        placemark: null
      }
      this.officesDataArr.push(newItem);

      this.addGeoMark(newItem);

      officeElem.onclick = () => {
        this.myMap.setCenter(newItem.coords, 16);
        if (this.inputSearch) {
          this.inputSearch.value = newItem.address + newItem.city
        }
      }
    })

    if (this.inputSearch) {
      let timeout;
      this.inputSearch.oninput = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const inputValue = this.inputSearch.value.toLowerCase();
          const newOfficesDataArr = [];
          // очисить всю коллекцию меток
          this.myMap.geoObjects.removeAll();
          this.officesDataArr.forEach(officeItem => {
            if (officeItem.address.toLowerCase().includes(inputValue) ||
              officeItem.city.toLowerCase().includes(inputValue)) {
              officeItem.elem.classList.remove('mod-hide');
              newOfficesDataArr.push(officeItem);
            } else {
              officeItem.elem.classList.add('mod-hide');
            }
          })

          // добавить в коллекцию меток только отфильтрованные метки
          newOfficesDataArr.forEach(newOfficeItem => {
            this.addGeoMark(newOfficeItem);
          })
        }, 300)
      }
    }

    if (this.checkboxPartner) {
      this.checkboxPartner.onchange = () => {
        let newOfficesDataArr = [];
        // очисить всю коллекцию меток
        this.myMap.geoObjects.removeAll();
        if (this.checkboxPartner.checked) {
          this.officesDataArr.forEach(officeItem => {
            if (officeItem.isPartner) {
              officeItem.elem.classList.remove('mod-hide');
              newOfficesDataArr.push(officeItem);
            } else {
              officeItem.elem.classList.add('mod-hide');
            }
          })
        } else {
          newOfficesDataArr = this.officesDataArr;
          this.officesDataArr.forEach(officeItem => {
            officeItem.elem.classList.remove('mod-hide');
          })
        }
        // добавить в коллекцию меток только отфильтрованные метки
        newOfficesDataArr.forEach(newOfficeItem => {
          this.addGeoMark(newOfficeItem);
        })
      }
    }

    this.setZoom();
  }

  setZoom() {
    this.myMap.controls.add('zoomControl', {
      position: {
        right: 50,
        top: 90
      }
    })

    this.myMap.behaviors.disable('scrollZoom');
  }

  addGeoMark(newItem) {
    const myPlacemark = new ymaps.Placemark([newItem.coords[0], newItem.coords[1]], {
      balloonContentHeader: `
        <div class="header-wrapper">
          <div class="address">${ newItem.address }</div>
          <div class="city">${ newItem.city }</div>
        </div>
      `,
      // balloonContentBody: "",
      hintContent: newItem.address
    }, {
      iconLayout: 'default#image',
      iconImageHref: this.mapElem.getAttribute('data-pin'),
      iconImageSize: [24, 24],
      iconImageOffset: [0, 0],
      hideIconOnBalloonOpen: false
    });
    newItem.placemark = myPlacemark
    this.myMap.geoObjects.add(myPlacemark);
  }
}
