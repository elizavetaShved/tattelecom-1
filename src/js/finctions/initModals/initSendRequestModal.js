// модалка "Тариф “Много интернета”"
// __классы для кнопок__
// .js-open-send-request-modal - на кнопки открывания модалки
// .js-close-send-request-modal - на кнопку закрывания модалки

// __Атрибуты для кнопки открытия
//  data-tariff-name="title" - заголовок
//  data-prise="250" - цена, необяз

import { Modal } from '../../components/modal';

export default function initSendRequestModal() {
  const btnsOpen = document.querySelectorAll('.js-open-send-request-modal');
  const btnsClose = document.querySelectorAll('.js-close-send-request-modal');
  const modalElem = document.querySelector('#modal-send-request-host');
  const dataTitleElem = modalElem.querySelector('.modal__title');
  const modalPriceWrapperElem = modalElem.querySelector('.send-request__price');
  const modalPriceElem = modalElem.querySelector('.connect-tariff__price .number');

  const modalProductWrapperElem = modalElem.querySelector('.send-request__product-wrapper');
  const modalProductImgElem = modalProductWrapperElem.querySelector('.send-request__product-img');
  const modalProductCaptionElem = modalProductWrapperElem.querySelector('.send-request__product-caption');
  const modalProductValueElem = modalProductWrapperElem.querySelector('.send-request__product-value');
  const modalProductPriceElem = modalProductWrapperElem.querySelector('.send-request__product-price');

  let modalComponent;

  btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent = new Modal(modalElem);
      modalComponent.onOpenModal();

      const dataTitle = btn.getAttribute('data-tariff-name');
      const dataPrise = btn.getAttribute('data-prise');

      const dataProductImg = btn.getAttribute('data-product-img');
      const dataProductCaption = btn.getAttribute('data-product-caption');
      const dataProductValue = btn.getAttribute('data-product-value');
      const dataProductPrice = btn.getAttribute('data-product-price');
      const dataPointIssue = btn.hasAttribute('data-point-issue');

      dataTitleElem.innerText = dataTitle;
      if (dataPrise) {
        modalPriceElem.innerText = dataPrise;
      } else {
        modalPriceWrapperElem.remove();
      }


      if (dataProductImg || dataProductCaption || dataProductValue || modalProductPrice) {
        modalProductWrapperElem.classList.add('mod-show');

        if (dataProductImg) {
          modalProductImgElem.setAttribute('src', dataProductImg);
        }

        if (dataProductCaption) {
          modalProductCaptionElem.innerText = dataProductCaption;
        }

        if (dataProductValue) {
          modalProductValueElem.innerText = dataProductValue;
        }

        if (dataProductPrice) {
          modalProductPriceElem.innerText = dataProductPrice;
        }
      }

      if (dataPointIssue) {

      }
    });
  })

  btnsClose.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent.onCloseModal();
    })
  })
}
