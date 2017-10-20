let App = (function () {

    function initEvents() {

        eventContactPopup()
        onChangePage()
    }

    function eventContactPopup() {
        $('#contact-up-btn').magnificPopup({})
    }

    function onChangePage () {

        $(window).on('changePage', function () {

            $('.sale_date').each(function () {
                if($(this).text() === App.getFormatedDate()) {
                    $(this).addClass('sale_date_today')
                }
            })
        })

    }

    return {

        itemExist: function (arr, item) {

            return arr.some(function (el) {

                return el === item;
            });
        },

        init: function () {

            SecondMenu.init()
            Search.init()
            Table.init()
            CustomsCalculator.init()

            //Custom gallery
            $('#custom-slider').bxSlider({
                pagerCustom: '#slider-pager',
                nextText: '<i class="fa fa-chevron-right"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                mode: 'fade',
                captions: true
            });


            if($('#main-aside').hasClass('main-aside')){
                let sidebar = new StickySidebar('.main-aside', {
                    topSpacing: 105,
                    containerSelector: '#main-content .container',

                });
            }

            initEvents()

            $(window).trigger('changePage')
        },

        getCookie: function (name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        deleteCookie: function (name) {

            this.setCookie(name, "", {
                expires: -1
            })

        },

        setCookie: function (name, value, options) {
            options = options || {};

            var expires = options.expires;

            if (typeof expires == "number" && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires * 1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) {
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;

            for (var propName in options) {
                updatedCookie += "; " + propName;
                var propValue = options[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        },

        removeFromArray: function (array, remove) {

            array = array.filter(function (el) {
                return remove.indexOf(el) < 0;
            });

            return array
        },

        getFormatedDate: function () {

            let today = new Date();
            let dd = today.getDate();

            let mm = today.getMonth()+1;
            let yyyy = today.getFullYear();

            if(dd<10)
            {
                dd='0'+dd;
            }

            if(mm<10)
            {
                mm='0'+mm;
            }

            let response = dd+ '/' + mm + '/' + yyyy

            return response
        }
    }
})()


$(document).ready(function () {

    App.init()

})



