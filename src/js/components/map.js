export class Map {
  hostElem;
  mapElem;
  marksList;
  myMap;

  constructor(hostElem) {
    this.initMap = this.initMap.bind(this);

    this.hostElem = hostElem;
    this.mapElem = this.hostElem.querySelector('.js-map');

    ymaps.ready(this.initMap)
  }

  initMap() {
    const center = JSON.parse(this.mapElem.getAttribute('data-center'));

    this.myMap = new ymaps.Map(this.mapElem, {
      center: center,
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    });

    this.myMap.behaviors.disable('scrollZoom');

    this.marks = JSON.parse(this.mapElem.getAttribute('data-mark-coords'));

    this.marks.forEach(mark => {
      this.addGeoMark(mark[0], mark[1], mark[2]);
    })
  }

  addGeoMark(x, y, name) {
    console.log(x, y, name)
    const myPlacemark = new ymaps.Placemark([x, y], {
      iconCaption: name
    }, {
      preset: 'islands#darkOrangeIcon'
    });
    this.myMap.geoObjects.add(myPlacemark);
  }
}
