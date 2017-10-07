var Table = (function () {

    var el = '#table'

    function onPaginate() {

        $(el).on('click', '.pagination a', function (e, data) {

            e.preventDefault();

            var page = $(this).attr('href').split('page=')[1];

            console.log('PAGE ' + page)

            var html = Table.getPage(page, Search.getSearchData());

            $('html, body').animate({
                scrollTop: $(el).offset().top - 95
            }, 300)
        });
    }

    function onAddFavoriteCar() {

        $(el).on('click', '.favorite__btn', function () {

            var lotId = $(this).data('lot')

            Table.addFavoriteCar(lotId)

            $(this).blur()

            $(window).trigger('disableFavoriteBtn');
        })
    }

    return {

        init: function () {

            $('#main-table .car-table').footable({});

            this.updateFavoriteCars()

            this.initEvents()


        },

        render: function (data) {


            $('#hide-table').html(data['table']);


            $('#hide-table .car-table').footable();

            setTimeout(function () {
                var hideTable = $('#table #hide-table .table-container').get(0)

                $('#main-table').html(hideTable)
                $('#total-cars').html(data['carsCount'])

            }, 1000);

            this.updateFavoriteCars()
        },

        getPage: function (page, data) {

            var favoriteCars = []

            if (Search.showFavorite) {

                favoriteCars = JSON.parse(App.getCookie('favoriteCars'))

                if (favoriteCars === undefined) favoriteCars = []
            }


            data['favoriteCars'] = favoriteCars
            data['page'] = page

            this.getData(data)
        },

        getData: function (data) {

            console.log('DATA')
            console.log(data)

            $.ajax({

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                type: "POST",

                url: '/cars',

                data: data

            }).done(function (data) {


                if (data) {

                    Table.render(data)

                } else {

                    Table.render('<h3>К сожалению, по Вашему запросу авто не найдено</h3>')
                }

            });
        },

        updateFavoriteCars: function () {

            $(el + ' .favorite__btn').each(function (i) {

                $(this).html('<i class="fa fa-bookmark-o"></i>')
            })

            var favoriteCars = App.getCookie('favoriteCars')

            if (favoriteCars === undefined) return false

            favoriteCars = JSON.parse(favoriteCars)

            $(el + ' .favorite__btn').each(function (i) {

                var favoriteBtn = $(this)

                var lotId = $(this).data('lot')

                favoriteCars.forEach(function (item, i) {

                    if (lotId === item) {

                        favoriteBtn.html('<i class="fa fa-bookmark"></i>')
                    }
                })
            })
        },

        addFavoriteCar: function (lotId) {

            var favoriteCars = App.getCookie('favoriteCars')

            if (favoriteCars === undefined) {

                favoriteCars = [lotId]
            } else {

                favoriteCars = JSON.parse(favoriteCars)

                var id = favoriteCars.indexOf(lotId);

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

                App.deleteCookie('favoriteCars')
            }


            this.updateFavoriteCars();
        },

        initEvents: function () {

            onPaginate()

            onAddFavoriteCar()

        },




    }
})()