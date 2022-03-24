export class OfficesMap {
  hostElem;
  mapElem;
  myMap;
  officesElems;

  officesArr = [];
  filteredForInputArr = [];
  filteredForPartnerArr = [];

  inputSearch;
  checkboxPartner;
  notFound;
  mapListElem;

  constructor(hostElem) {
    this.initMap = this.initMap.bind(this);

    this.hostElem = hostElem;
    this.mapElem = this.hostElem.querySelector('.js-map');
    this.officesElems = this.hostElem.querySelectorAll('.js-offices-item');
    this.inputSearch = this.hostElem.querySelector('.js-input-search');
    this.inputSearchWrapper = this.hostElem.querySelector(".sales-offices-map__input-search-wrapper");
    this.checkboxPartner = this.hostElem.querySelector('.js-checkbox');
    this.notFound = this.hostElem.querySelector('.js-not-found');
    this.mapListElem = this.hostElem.querySelector('.js-map-list');
    this.inputReset = this.inputSearchWrapper.querySelector(".sales-offices-map__form-reset");

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
        days: [],
        placemark: null
      };

      officeElem.querySelectorAll(".sales-offices-map__item-work-time").forEach(item=>{
        let obj = {
          day: item.querySelector(".js-day").innerText,
          weekday: item.querySelector(".js-time").innerText
        };

        newItem.days.push(obj);
      });

      this.officesArr.push(newItem);
      this.filteredForInputArr.push(newItem);

      this.showNotFound(!this.filteredForInputArr.length);

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

        this.filteredForPartnerArr = [];
        if (this.checkboxPartner.checked) {
          this.filteredForInputArr.forEach(officeItem => {
            if (officeItem.isPartner) {
              this.filteredForPartnerArr.push(officeItem);
            }
          })
          this.officesArr.forEach(officeItem => {
            if (!officeItem.isPartner) {
              officeItem.elem.classList.add('mod-hide-no-partner');
            }
          })
          this.showNotFound(!this.filteredForPartnerArr.length);
        } else {
          this.officesArr.forEach(officeItem => {
            officeItem.elem.classList.remove('mod-hide-no-partner');
          })

          this.showNotFound(!this.filteredForInputArr.length);
        }

        // добавить в коллекцию меток только отфильтрованные метки
        this.filteredForPartnerArr.forEach(newOfficeItem => {
          this.addGeoMark(newOfficeItem);
        })
      }
    }


    this.inputReset.onclick = () => {
      this.onResetInput();
    }

    this.setZoom();
  }

  onResetInput() {
    const inputValue = this.inputSearch.value.toLowerCase();
    // очисить всю коллекцию меток
    this.myMap.geoObjects.removeAll();

    let arrayForIteration;
    if (this.checkboxPartner.checked) {
      arrayForIteration = this.filteredForPartnerArr;
    } else {
      arrayForIteration = this.officesArr;
    }
    this.filteredForInputArr = [];

    this.filteredForInputArr = this.officesArr;
    this.filteredForInputArr.map(item => item.elem.classList.remove('mod-hide'));
    this.inputSearchWrapper.querySelector(".sales-offices-map__input-search-icon").classList.remove("is-hidden");
    this.inputSearchWrapper.querySelector(".sales-offices-map__form-reset").classList.remove("is-active");
    
    this.showNotFound(!this.filteredForInputArr.length);

    // добавить в коллекцию меток только отфильтрованные метки
    this.filteredForInputArr.forEach(newOfficeItem => {
      this.addGeoMark(newOfficeItem);
    })

    this.inputSearch.value = "";
  }

  onInput() {
    const inputValue = this.inputSearch.value.toLowerCase();
    // очисить всю коллекцию меток
    this.myMap.geoObjects.removeAll();

    let arrayForIteration;
    if (this.checkboxPartner.checked) {
      arrayForIteration = this.filteredForPartnerArr;
    } else {
      arrayForIteration = this.officesArr;
    }
    this.filteredForInputArr = [];

    if (inputValue) {
      this.inputSearchWrapper.querySelector(".sales-offices-map__input-search-icon").classList.add("is-hidden");
      this.inputSearchWrapper.querySelector(".sales-offices-map__form-reset").classList.add("is-active");

      arrayForIteration.forEach(officeItem => {
        if (officeItem.address.toLowerCase().includes(inputValue) ||
          officeItem.city.toLowerCase().includes(inputValue) ||
          inputValue.includes(officeItem.address.toLowerCase())) {
          officeItem.elem.classList.remove('mod-hide');
          this.filteredForInputArr.push(officeItem);
        } else {
          officeItem.elem.classList.add('mod-hide');
        }
      });
    } else {
      this.filteredForInputArr = this.officesArr;
      this.filteredForInputArr.map(item => item.elem.classList.remove('mod-hide'));
      this.inputSearchWrapper.querySelector(".sales-offices-map__input-search-icon").classList.remove("is-hidden");
      this.inputSearchWrapper.querySelector(".sales-offices-map__form-reset").classList.remove("is-active");
    }

    this.showNotFound(!this.filteredForInputArr.length);

    // добавить в коллекцию меток только отфильтрованные метки
    this.filteredForInputArr.forEach(newOfficeItem => {
      this.addGeoMark(newOfficeItem);
    })


  }

  setZoom() {
    this.myMap.controls.add('zoomControl', {
      position: {
        right: window.innerWidth > 768 ? 50 : 10,
        top: window.innerWidth > 768 ? 90 : 130
      }
    })

    this.myMap.behaviors.disable('scrollZoom');
  }

  showNotFound(isShow) {
    if (isShow) {
      this.notFound.classList.add('mod-show');
      this.mapListElem.classList.add('mod-no-items');
    } else {
      this.notFound.classList.remove('mod-show');
      this.mapListElem.classList.remove('mod-no-items');
    }
  }

  addGeoMark(newItem) {
    let body = "";
    
    for (let i = 0; i<newItem.days.length; i++) {
      let daysLayout = `
        <div class="body-item">
          <div class="caption">${newItem.days[i].day}</div>
          <div class="value">${newItem.days[i].weekday}</div>
        </div>
      `
      body+=daysLayout;
    }

    const myPlacemark = new ymaps.Placemark([newItem.coords[0], newItem.coords[1]], {
      balloonContentHeader: `
        <div class="header-wrapper">
          <div class="address">${ newItem.address }</div>
          <div class="city">${ newItem.city }</div>
        </div>
      `,
      balloonContentBody: `<div class="body-wrapper">${body}</div>`,
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
