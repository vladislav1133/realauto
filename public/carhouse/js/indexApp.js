let App = (function () {

    function initEvents() {

        onClickContactBtn()
        onChangePage()
        onSubmitContactForm()
    }

    function onClickContactBtn() {
        $('#contact-us-btn').magnificPopup({})
    }

    function setMainImageHeight() {

        let h = window.innerHeight;
        $('.main-header').css('height', h );

    }

    function onSubmitContactForm() {


        $('#contact-us-popup').submit(function (e) {
            e.preventDefault()

            let form = $(this).serializeArray()
            let data = {}

            for (let i = 0; i < form.length; i++){
                data[form[i]['name']] = form[i]['value'];
            }

            if(data.favoriteCars === 'on') {

                 let favoriteCars =  App.getCookie('favoriteCars')
                console.log('favs ' + favoriteCars)

                if(favoriteCars === undefined) {

                    data.favoriteCars = null
                } else {

                    data.favoriteCars =  JSON.parse(favoriteCars)
                }
            }


            $.ajax({
                type: 'POST',

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                url: '/contact-us',

                data: data

            }).done(function (data) {

                $('.btn-popup').magnificPopup('close');

                $('#contact-us-popup input').val('');
                $('#contact-us-popup input').val('');
                $('#contact-us-popup textarea').val('');
                $('#contact-us-popup textarea').val('');
                $('#contact-us-popup input:checkbox').prop( "checked", false );

                return false;
            });
        })
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

            setMainImageHeight()

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

            Array.prototype.max = function() {
                return Math.max.apply(null, this);
            };

            Array.prototype.min = function() {
                return Math.min.apply(null, this);
            };
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



