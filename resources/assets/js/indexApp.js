import {Table} from './Table'
import {Search} from './SearchApp'
//import {CustomsCalculator} from './CustomsCalculator'



export let App = (function () {

    function initEvents() {

        onClickContactBtn()
        onChangePage()
        onSubmitContactForm()
    }

    function initSidebarScroll() {

        //$(".side-bar").pin({
        //    containerSelector: ".main-content_inner"
        //})

        if ($(window).width() > 993) {

            $(".side-bar").sticky({
                bottomSpacing: 70
            });

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

                data: data,

                success: function(){
                    alert('Ваше сообщение доставлено, наш менеджер свяжется с Вами в ближайшее время в течении рабочего дня.');
                }

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

                if (data.favoriteCars.length > 0) {
                    let favoriteCars = JSON.stringify(data.favoriteCars)

                    App.deleteCookie('favoriteCars')
                    document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
                } else {

                    App.deleteCookie('favoriteCars')
                }

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

            //SecondMenu.init()
           // Search.init()
            Table.init()
            //CustomsCalculator.init()


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

