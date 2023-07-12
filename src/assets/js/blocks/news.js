import { definesLanguage } from './global'; // хук для определения языка
import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта
import __NEWS_JSON from './json/news.json'; // подключение объекта со всеми статичными переводами для новостей
import 'jquery-rss'; // подключение плагина для подгрузки rss новостей

let rssUrl = isbeta();

function isbeta(name) {

    let url = name; // путь к файлу - если у вас другой - то его и указываете
    let pathname = location.pathname.split('/');
    for (let i = 0; i < pathname.length; i++) {
        if (pathname[i] == 'beta') url = '/beta' + name; // если мы на бете, то добавляем подддомен 'beta' к пути
    }
    return url;
}

(function getnewsrss() {
    let langData = definesLanguage(),
        baseDir = langData == __CONFIG_GLOBAL.defaultLanguage ? '' : '../';
    langData = (langData === 'zh') ? 'cn' : langData;
    var html = '';
    $.ajax({
        url: isbeta('/rssrequest.php'),
        method: 'GET',
        data: {
            lang: langData
        },
        type: 'json',
        success: function success(data) {

            var res = JSON.parse(data);
            var img
            for (var i = 0; i < res.length; i++) {
                // var author = res[i].author != '' ? textLang[langData].authors + ': ' + res[i].author : '',
                //     date = res[i].date != '' ? textLang[langData].date + ': ' + res[i].date : '';
                var author = res[i].author != '' ? res[i].author : '',
                    date = res[i].date != '' ? res[i].date : '';
                img = res[i].img_url != '' ? res[i].img_url : isbeta('/assets/images/news.png');


                html += '\
		<div class="news-item">\
			<a class="news-wrapper-inner" target="_blank" href="' + res[i].link + '" >\
                    <img class="news-item__img" src="' + img + '">\
                    <div class="news-item__content">\
                        <div class="news-item__text news-item__author">' + author + '</div>\
                        <div class="news-item__title" data-dot>' + res[i].title + '</div>\
                        <div class="news-item__text news-item__date">' + date + '</div>\
                    </div>\
			</a>\
		</div>\
		';
            }


            $('.news-slider').html(html);

            $('.news-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                // centerMode: true,
                // variableWidth: true,
                // touchThreshold: 10,
                dots: true,
                arrows: true,
                appendDots: '.news-pagination-wrapper-js',
                appendArrows: '.news-pagination-wrapper-js',
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
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1153,
                        settings: {
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 901,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 761,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: false,
                        }
                    }
                ]
            });

            $('[data-dot]').dotdotdot();
            $(window).resize(function() {
                $('[data-dot]').dotdotdot();
            });


        },
        error: function error() {
            console.log('error');
        }
    });

})();
