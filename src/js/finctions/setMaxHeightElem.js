export default function setMaxHeightElem(elementsArr) {
  const setHeight = () => {
    let maxHeight = 0;
    elementsArr.forEach(elem => {
      maxHeight = elem.clientHeight > maxHeight ? elem.clientHeight : maxHeight;
    })

    elementsArr.forEach(elem => {
      elem.style.height = `${ maxHeight }px`;
    })
  }

  setHeight();

  window.addEventListener('resize', setHeight);
}
