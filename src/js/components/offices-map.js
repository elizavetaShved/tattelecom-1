export class OfficesMap {
  hostElem;
  mapElem;
  myMap;
  officesElems;

  officesArr = [];
  filteredOfficesArr = [];

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
        weekday: officeElem.querySelector('.js-weekday').innerText,
        saturday: officeElem.querySelector('.js-saturday').innerText,
        sunday: officeElem.querySelector('.js-sunday').innerText,
        isPartner: officeElem.hasAttribute('data-is-partner'),
        placemark: null
      }
      this.officesArr.push(newItem);
      this.filteredOfficesArr.push(newItem);

      this.addGeoMark(newItem);

      officeElem.onclick = () => {
        this.myMap.setCenter(newItem.coords, 16);
        if (this.inputSearch) {
          this.inputSearch.value = newItem.address + newItem.city;
          this.onInput();
        }
      }
    })

    if (this.inputSearch) {
      let timeout;
      this.inputSearch.oninput = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.onInput();
        }, 300)
      }
    }

    if (this.checkboxPartner) {
      this.checkboxPartner.onchange = () => {
        // очисить всю коллекцию меток
        this.myMap.geoObjects.removeAll();
        if (this.checkboxPartner.checked) {
          console.log(this.filteredOfficesArr)
          this.filteredOfficesArr.forEach(officeItem => {
            if (officeItem.isPartner) {
              officeItem.elem.classList.remove('mod-hide');
              this.filteredOfficesArr.push(officeItem);
            } else {
              officeItem.elem.classList.add('mod-hide');
            }
          })
        } else {
          // this.filteredOfficesArr = this.officesArr;
          this.filteredOfficesArr.forEach(officeItem => {
            officeItem.elem.classList.remove('mod-hide');
          })
        }
        // добавить в коллекцию меток только отфильтрованные метки
        this.filteredOfficesArr.forEach(newOfficeItem => {
          this.addGeoMark(newOfficeItem);
        })
      }
    }

    this.setZoom();
  }

  onInput() {
    const inputValue = this.inputSearch.value.toLowerCase();
    // очисить всю коллекцию меток
    this.myMap.geoObjects.removeAll();

    let arrayForIteration;
    if (this.checkboxPartner.checked) {
      arrayForIteration = this.filteredOfficesArr;
    } else {
      arrayForIteration = this.officesArr;
      this.filteredOfficesArr = [];
    }
    arrayForIteration.forEach(officeItem => {
      if (officeItem.address.toLowerCase().includes(inputValue) ||
        officeItem.city.toLowerCase().includes(inputValue) ||
        inputValue.includes(officeItem.address.toLowerCase()) ) {
        officeItem.elem.classList.remove('mod-hide');
        this.filteredOfficesArr.push(officeItem);
      } else {
        officeItem.elem.classList.add('mod-hide');
      }
    })

    // добавить в коллекцию меток только отфильтрованные метки
    this.filteredOfficesArr.forEach(newOfficeItem => {
      this.addGeoMark(newOfficeItem);
    })
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
      balloonContentBody: `
        <div class="body-wrapper">
          <div class="body-item">
            <div class="caption">пн.–пт.</div>
            <div class="value">${ newItem.weekday }</div>
          </div>
          <div class="body-item">
            <div class="caption">сб.</div>
            <div class="value">${ newItem.saturday }</div>
          </div>
          <div class="body-item">
            <div class="caption">вс.</div>
            <div class="value">${ newItem.sunday }</div>
          </div>
        </div>
      `,
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
