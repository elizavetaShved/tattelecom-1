/**
 * Плавный сколл для якорных ссылок
 * @param {Number} topIndent отступ сверху
 */
export default function scrollByAnchor(topIndent = 0) {
    $("a[href^='#']").click(function() {
        const _href = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(_href).offset().top - topIndent + 'px' });
        return false;
    });
}
