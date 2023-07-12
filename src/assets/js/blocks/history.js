(function addedHistory() {
    if( $('div').is('.js-history-list') ) {
        $('.js-history-list').slick({
            arrows: false,
            dots: true,
            fade: true,
            appendDots: '.history-pagination-wrapper',
        })
    }
})()
