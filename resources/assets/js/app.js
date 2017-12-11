import {AvailableSearch} from "./AvailableSearch";

require('./bootstrap');

import {CustomsCalculator} from "./CustomsCalculator";

import {MainTable} from './MainTable'
import {MainSearch} from './MainSearch'
import * as cookie from './helpers/cookie'
import {AvailableTable} from "./AvailableTable";

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

    function initMethods() {

        Array.prototype.max = function () {
            return Math.max.apply(null, this);
        };

        Array.prototype.min = function () {
            return Math.min.apply(null, this);
        };
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

                let favoriteCars = cookie.get('favoriteCars')

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

    function onChangePage() {

        $(window).on('changePage', function () {

            $('.sale_date').each(function () {
                if ($(this).text() === Index.getFormatedDate()) {

                    $(this).addClass('sale_date_today')
                }
            })
        })

    }

    function RemoveNotExistFavorite() {

        let data = {}

        data['favoriteCars'] = cookie.get('favoriteCars')

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

                    cookie.destroy('favoriteCars')
                    document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
                } else {

                    cookie.destroy('favoriteCars')
                }

            }

        })
    }


    return {

        init: function () {

            initSidebarScroll()
            initEvents()
            initMethods()
            RemoveNotExistFavorite()

            if(window.location.pathname==='/'  ) {
                console.log('on index page')
                MainSearch.init()
                MainTable.init()

            }

            if(window.location.pathname==='/availablecars'){
                AvailableSearch.init()
                AvailableTable.init()
            }


            if(window.location.pathname==='/rastamozhka') {
                CustomsCalculator.init()
            }

            //Custom gallery
            $('#custom-slider').bxSlider({
                pagerCustom: '#slider-pager',
                nextText: '<i class="fa fa-chevron-right"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                mode: 'fade',
                captions: true
            });


            $(window).trigger('changePage')

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












