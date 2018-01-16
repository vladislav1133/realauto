import * as cookie from './helpers/cookie'
import {AvailableSearch} from "./AvailableSearch";

export let AvailableTable = (function () {


    let el = '#table'

    let errNotFound = '<tbody id="table-body"><tr class="footable-empty"><td colspan="11">Автомобили не найдеы</td></tr></tbody>'

    // function onPaginate() {
    //
    //     $(el).on('click', '.pagination a', function (e, data) {
    //
    //         e.preventDefault();
    //
    //         let page = $(this).attr('href').split('page=')[1];
    //
    //         console.log('PAGE ' + page)
    //
    //         AvailableTable.getPage(page, AvailableSearch.getSearchData());
    //
    //         $('html, body').animate({
    //             scrollTop: $(el).offset().top - 95
    //         }, 300)
    //     });
    // }


    return {

        init: function () {

            console.log('Table init')

            $('#main-table .car-table').footable({});

            this.updateFavoriteCars()

            this.initEvents()

            $(".rslides").responsiveSlides({
                auto: false,
                nav: true,
                prevText: "<i class='fa fa-arrow-left'></i>",   // String: Text for the "previous" button
                nextText: "<i class='fa fa-arrow-right'></i>",
            });

        },

        render: function (data) {


            $('#hide-table').html(data['table']);


            $('#hide-table .car-table').footable();

            setTimeout(function () {
                var hideTable = $('#table #hide-table .table-container').get(0)

                if (data['carsCount'] === 0) AvailableTable.renderError()
                else {
                    $('#main-table').html(hideTable)
                }

                $('.total-cars').html(data['carsCount'])

            }, 1000);

            this.updateFavoriteCars()
            $(window).trigger('changePage')

        },

        renderError: function () {

            $('#main-table').html('<h2 style="text-align:center; color:#fff">По запросу автомобили не найдены</h2>')
        },

        getPage: function (page, data) {

            console.log(data)

            data['page'] = page

            this.getData(data)
        },

        getData: function (data) {


            $.ajax({

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                type: "POST",

                url: 'available-cars',

                data: data

            }).done(function (data) {


                if (data) {

                    AvailableTable.render(data)

                } else {

                    AvailableTable.render('<h3>К сожалению, по Вашему запросу авто не найдено</h3>')
                }


            });
        },

        updateFavoriteCars: function () {

            $(el + ' .favorite__btn').each(function (i) {

                $(this).attr('title', 'Добавить в избранное')
                $(this).html('<i class="fa fa-bookmark-o"></i>')
            })

            let favoriteCars = cookie.get('favoriteCars')

            if (favoriteCars === undefined) return false

            favoriteCars = JSON.parse(favoriteCars)

            $(el + ' .favorite__btn').each(function (i) {

                let favoriteBtn = $(this)

                let lotId = $(this).data('lot')

                favoriteCars.forEach(function (item, i) {

                    if (lotId === item) {

                        favoriteBtn.html('<i class="fa fa-bookmark"></i>')
                        favoriteBtn.attr('title', 'Исключить из избранного')
                    }
                })
            })
        },

        addFavoriteCar: function (lotId) {

            let favoriteCars = cookie.get('favoriteCars')

            if (favoriteCars === undefined) {

                favoriteCars = [lotId]
            } else {

                favoriteCars = JSON.parse(favoriteCars)

                let id = favoriteCars.indexOf(lotId);

                if (id === -1) {

                    favoriteCars.push(lotId);
                } else {

                    favoriteCars.splice(id, 1);
                }
            }


            if (favoriteCars.length > 0) {

                favoriteCars = JSON.stringify(favoriteCars)

                document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
            } else {

                cookie.destroy('favoriteCars')
            }


            this.updateFavoriteCars();
        },

        initEvents: function () {

            onPaginate()


        },

    }
})()