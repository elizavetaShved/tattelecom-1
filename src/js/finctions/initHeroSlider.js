import { Navigation, Swiper, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default () => {
    let sliderHero = new Swiper(".js-swiper-custom", {
        pagination: {
			el: '.rates-preview__sldier-pagination',
            clickable: true,
			type: "bullets",
		},
    });
};