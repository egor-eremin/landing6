(function initMainSlider() {
    if( $('div').is('.js-main-slider') ) {
        $('.js-main-slider').slick({
            arrows: true,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            appendDots: '.main-pagination-wrapper-js',
            appendArrows: '.main-pagination-wrapper-js',
            asNavFor: '.js-bg-main',
            pauseOnHover: false,
            pauseOnFocus: false,
            prevArrow: '<button type="button" class="slick-prev slick-main-arrow slick-prev-main">' +
                '<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M8.51709 0.548443C8.66319 0.533143 8.81347 0.557805 8.95146 0.625005C9.22586 0.758605 9.3999 1.03816 9.3999 1.34376V4.59844H19.7999C20.6839 4.59844 21.3999 5.31444 21.3999 6.19844V7.79844C21.3999 8.68244 20.6839 9.39844 19.7999 9.39844H9.3999V12.6563C9.3999 12.9627 9.22586 13.2414 8.95146 13.375C8.83946 13.4302 8.7191 13.4563 8.5999 13.4563C8.4247 13.4563 8.25091 13.4003 8.10771 13.2891L0.851465 7.63125C0.657064 7.47925 0.543652 7.24877 0.543652 7.00157C0.543652 6.75437 0.657064 6.52152 0.851465 6.37032L8.10771 0.712505C8.22851 0.618505 8.37099 0.563743 8.51709 0.548443Z" fill="white"/>\n' +
                '</svg>' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-main-arrow slick-next-main">' +
                '<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M13.4829 0.548443C13.3368 0.533143 13.1865 0.557805 13.0485 0.625005C12.7741 0.758605 12.6001 1.03816 12.6001 1.34376V4.59844H2.2001C1.3161 4.59844 0.600098 5.31444 0.600098 6.19844V7.79844C0.600098 8.68244 1.3161 9.39844 2.2001 9.39844H12.6001V12.6563C12.6001 12.9627 12.7741 13.2414 13.0485 13.375C13.1605 13.4302 13.2809 13.4563 13.4001 13.4563C13.5753 13.4563 13.7491 13.4003 13.8923 13.2891L21.1485 7.63125C21.3429 7.47925 21.4563 7.24877 21.4563 7.00157C21.4563 6.75437 21.3429 6.52152 21.1485 6.37032L13.8923 0.712505C13.7715 0.618505 13.629 0.563743 13.4829 0.548443Z" fill="white"/>\n' +
                '</svg>' +
                '</button>',
        });
        $('.js-bg-main').slick({
            fade: true,
            asNavFor: '.js-main-slider',
            arrows: false,
            dots: false
        });
    }
})();
(function initAccountsSlider() {
    if( $('div').is('.js-accounts-list') ) {
        $('.js-accounts-list').slick({
            arrows: false,
            dots: false,
            fade: true,
            initialSlide: 1,
            appendDots: '.dots-wrapper_accounts',
            appendArrows: '.accounts-pagination-wrapper-js',
            asNavFor: '.js-accounts-tab-list, .js-accounts-decor-list',
            prevArrow: '<button type="button" class="slick-prev slick-main-arrow slick-prev-main">' +
                '<svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M0.646446 4.35355C0.451187 4.15829 0.451187 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53554 0.464466C4.7308 0.659728 4.7308 0.976311 4.53554 1.17157L1.70711 4L4.53554 6.82843C4.7308 7.02369 4.7308 7.34027 4.53554 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM71 4.5H1V3.5H71V4.5Z" fill="#642A67"/>\n' +
                '</svg>' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-main-arrow slick-next-main">' +
                '<svg width="71" height="8" viewBox="0 0 71 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z" fill="#642A67"/>\n' +
                '</svg>' +
                '</button>',

        });

        $('.js-accounts-tab-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            initialSlide: 1,
            asNavFor: '.js-accounts-list, .js-accounts-decor-list',
            focusOnSelect: true
        });
        $('.js-accounts-decor-list').slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            slidesToScroll: 1,
            initialSlide: 1,
            fade: true,
            asNavFor: '.js-accounts-list, .js-accounts-tab-list',
        });
    }
})();
