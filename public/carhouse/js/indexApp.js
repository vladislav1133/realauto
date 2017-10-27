let App = (function () {

    function initEvents() {

        onClickContactBtn()
        onChangePage()
        onSubmitContactForm()
    }

    function initSidebarScroll(){

        if($(window).width() > 992){
            var a = document.querySelector('.side-bar'), b = null, P = 0;
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);
            function Ascroll() {
              if (b == null) {
                var Sa = getComputedStyle(a, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                  }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                  b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
              }
              var Ra = a.getBoundingClientRect(),
                  R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.content').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
              if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                  b.className = 'stop';
                  b.style.top = - R +'px';
                } else {
                  b.className = 'sticky';
                  b.style.top = P + 'px';
                }
              } else {
                b.className = '';
                b.style.top = '';
              }
              window.addEventListener('resize', function() {
                a.children[0].style.width = getComputedStyle(a, '').width
              }, false);
            }
        }

    }

    function onClickContactBtn() {
        $('#contact-us-btn').magnificPopup({})
    }


    function onSubmitContactForm() {


        $('#contact-us-popup').submit(function (e) {
            e.preventDefault()

            let form = $(this).serializeArray()
            let data = {}

            for (let i = 0; i < form.length; i++) {
                data[form[i]['name']] = form[i]['value'];
            }


            if ($('#contact-us-popup #append-favorite').prop('checked')) {

                let favoriteCars = App.getCookie('favoriteCars')

                if (favoriteCars !== undefined) data.favoriteCars = JSON.parse(favoriteCars)

            }


            $.ajax({
                type: 'POST',

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                url: '/contact-us',

                data: data

            }).done(function (data) {

                console.log('return favs')
                console.log(data)
                $('.btn-popup').magnificPopup('close');

                $('#contact-us-popup input').val('');
                $('#contact-us-popup input').val('');
                $('#contact-us-popup textarea').val('');
                $('#contact-us-popup textarea').val('');
                $('#contact-us-popup input:checkbox').prop("checked", false);

                return false;
            });
        })
    }

    function RemoveNotExistFavorite() {


        let data = {}

        data['favoriteCars'] = App.getCookie('favoriteCars')

        $.post({

            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            url: '/cars/favorite/remove',

            data: data

        }).done(function (data) {

            if (data.success) {

                console.log('wtf?')
                console.log(data)

                if (data.favoriteCars.length > 0) {
                    let favoriteCars = JSON.stringify(data.favoriteCars)

                    App.deleteCookie('favoriteCars')
                    document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
                } else {

                    App.deleteCookie('favoriteCars')
                }

                console.log('rem not exist done')

                console.log(data.favoriteCars)


            }

        })
    }

    function onChangePage() {

        $(window).on('changePage', function () {

            $('.sale_date').each(function () {
                if ($(this).text() === App.getFormatedDate()) {

                    $(this).addClass('sale_date_today')
                }
            })
        })

    }

    function initSelectSetting() {

        $('.selectpicker').selectpicker({
            selectedTextFormat: 'count > 0',
            countSelectedText: 'Выбрано {0}',
            size: 5
        })

        $('.selectpicker').selectpicker('refresh');
    }

    return {


        init: function () {

            initSidebarScroll()
            initSelectSetting()
            initEvents()
            RemoveNotExistFavorite()

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



            $(window).trigger('changePage')

            Array.prototype.max = function () {
                return Math.max.apply(null, this);
            };

            Array.prototype.min = function () {
                return Math.min.apply(null, this);
            };


        },



        itemExist: function (arr, item) {

            return arr.some(function (el) {

                return el === item;
            });
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

            let mm = today.getMonth() + 1;
            let yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            let response = dd + '/' + mm + '/' + yyyy

            return response
        }
    }
})()


$(document).ready(function () {

    App.init()



   // if ($('#main-aside').hasClass('main-aside') && ($(window).width() > 768)) {
     //   $('.index-header').height($(window).innerHeight())
   // }
})



