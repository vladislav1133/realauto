import * as cookie from './helpers/cookie'
import * as date from './helpers/date'
import {MainSearch} from './MainSearch'

export let MainTable = (function () {

    let el = '#table'

    let remDocBtn = '.btn-rem-doc'
    let remLocBtn = '.btn-rem-loc'

    function initSlider() {
        $(".rslides").responsiveSlides({
            auto:false,
            nav:true,
            prevText: "<i class='fa fa-arrow-left'></i>",   // String: Text for the "previous" button
            nextText: "<i class='fa fa-arrow-right'></i>",
        });
    }
    // function onPaginate() {

    //     $(el).on('click', '.pagination a', function (e, data) {

    //         e.preventDefault();

    //         let page = $(this).attr('href').split('page=')[1];

    //         MainTable.getPage(page, MainSearch.getSearchData());

    //         $('html, body').animate({
    //             scrollTop: $(el).offset().top - 95
    //         }, 300)
    //     });
    // }

    function onAddFavoriteCar() {

        $(el).on('click', '.favorite__btn', function () {

            var lotId = $(this).data('lot')

            MainTable.addFavoriteCar(lotId)

            $(this).blur()

            $(window).trigger('disableFavoriteBtn');
        })
    }

    function onClickImage() {

        $(el).on('click', '.product__img', function (e) {

            let carId = $(this).data('car-id')

            $.ajax({
                method: 'GET',
                url: '/cars/images/'+ carId

            }).done(function(data) {
                console.log('DONE 200')
                console.log(data)

                let carGallery = $('#car-gallery')

                carGallery.empty()

                if(data.images.length !== 0) {

                    let html = '<ul class="rslides">'

                    $.each(data.images, function(index, value) {

                        html += `<li><img src="${value}" alt=""></li>`
                    });

                    html += '</ul>'

                    carGallery.html(html)

                    $(".rslides").responsiveSlides({
                        auto:false,
                        nav:true,
                        prevText: "<img src='carhouse/img/arrow_left.png'></img>",   // String: Text for the "previous" button
                        nextText: "<img src='carhouse/img/arrow_right.png'></img>",
                    });

                    $.magnificPopup.open({
                        items: {
                            src: '#car-gallery'
                        },

                    });


                }

            });

        })
    }

    function onClickRemoveDoc() {

        $(el).on('click', remDocBtn, function (e) {

            console.log('Table rem doc')
            console.log($(this).data('doc'))
            MainSearch.removeDoc($(this).data('doc'),true)
        })
    }

    function onClickRemoveLoc() {

        $(el).on('click', remLocBtn, function (e) {

            console.log('Table rem loc')
            console.log($(this).data('loc'))
            MainSearch.removeLoc($(this).data('loc'))
        })
    }

    function onChangePage() {

        $(window).on('changePage', function () {

            $('.sale_date').each(function () {
                if ($(this).text() === date.getFormated()) {

                    $(this).addClass('sale_date_today')
                }
            })
        })
    }

    return {

        init: function () {



            this.updateFavoriteCars()

            this.initEvents()

            $('#main-table .car-table').footable({});
            $(window).trigger('changePage')

            initSlider()

        },

        showGallery: function (el) { // get the class name in arguments here
        $.magnificPopup.open({
            items: {
                src: '#car-gallery',
            },

        });
    },

        render: function (data) {


            $('#hide-table').html(data['table']);


            $('#hide-table .car-table').footable();

            setTimeout(function () {
                var hideTable = $('#table #hide-table .table-container').get(0)

                if(data['carsCount'] === 0) MainTable.renderError()
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

        // getPage: function (page, data) {
        //
        //     console.log(data)
        //
        //     data['page'] = page
        //
        //     this.getData(data)
        // },

        getData: function (data) {



            $.ajax({

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                type: "POST",

                url: '/cars',

                data: data

            }).done(function (data) {


                if (data) {

                    MainTable.render(data)

                } else {

                    MainTable.render('<h3>К сожалению, по Вашему запросу авто не найдено</h3>')
                }

            });
        },

        updateFavoriteCars: function () {

            $(el + ' .favorite__btn').each(function (i) {

                $(this).attr('title','Добавить в избранное')
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
                        favoriteBtn.attr('title','Исключить из избранного')
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

            onClickImage()

            //onPaginate()

            onAddFavoriteCar()

            onClickRemoveDoc()

            onClickRemoveLoc()

            onChangePage()
        },

    }
})()