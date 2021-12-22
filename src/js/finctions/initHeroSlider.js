import { Navigation, Swiper, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

export default () => {
    const autoplayValue = document.querySelector(".js-swiper-custom").getAttribute('data-swiper-autoplay')
    let sliderHero = new Swiper(".js-swiper-custom", {
        speed: 400,
        autoplay: {
            delay: +autoplayValue,
        },
        pagination: {
			el: '.rates-preview__sldier-pagination',
            clickable: true,
			type: "bullets",
		},
    });
};