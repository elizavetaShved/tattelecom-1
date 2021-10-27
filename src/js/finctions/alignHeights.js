/**
 * Назначает всем элементам одинаковую высоту, равную максимальной одного из элементов
 * Короче, выравнивает высоту элементов
 * Следует применять после события 'load', т.к. необходимо загрузить стили
 * @param {String} parentSelector - селектор общего контейнера
 * @param {String} elementSelector - селектор элементов, которые нужно выровнять
 */
 function alignHeights(parentSelector, elementSelector) {
  const container = document.querySelector(parentSelector);
  if (!container) return;

  const elements = container.querySelectorAll(elementSelector);

  if (elements.length === 0) return;

  const setMaxHeight = () => {
    let height = 0;

    //Определяем максимальную высоту блока
    for(let i = 0; i < elements.length; i++ ){
      // Обнуляем height, иначе при ресайзе будет баг
      elements[i].style.height = 'auto';

      let currentHeight = elements[i].clientHeight;
      if(currentHeight > height) {
        height = currentHeight;
      }
    }
    //Задаем максимальную высоту блока всем элементам
    for( let i = 0; i < elements.length; i++ ){
      elements[i].style.height = height + 'px';
    }
  }

  setMaxHeight();

  window.addEventListener('resize', setMaxHeight);
}

export default alignHeights;