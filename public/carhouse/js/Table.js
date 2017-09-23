var Table = (function () {

    var el = '#table'

    return {

        init: function () {

            $('#main-table .car-table').footable();

            this.updateFavoriteCars()

            this.initEvents()


        },

        render: function (html) {


            $('#hide-table').html(html);

            console.log('table render')

            $('#hide-table .car-table').footable();

            setTimeout(function () {
                var hideTable = $('#table #hide-table .table-container').get(0)

                $('#main-table').html(hideTable)

            }, 1000);

            this.updateFavoriteCars()
        },

        getPage: function (page) {

            console.log('table getPage')

            var mark = $('#search-marks').val();
            var model = $('#search-models').val();
            var from = $('#search-from').val();
            var to = $('#search-to').val();
            var drive = $('#search-drive').val();

            if (mark === Search.defaultText.any || typeof(mark) === 'undefined') mark = 0;
            if (model === Search.defaultText.any || typeof(model) === 'undefined') model= 0;
            if (to === Search.defaultText.to || typeof(to) === 'undefined') to = 0;
            if (from === Search.defaultText.from || typeof(from) === 'undefined') from = 0;

            this.getData(page, mark, model, from, to, drive)
        },

        getData: function (page, mark, model, from, to, drive) {

            var favoriteCars = 0

            if(Search.showFavorite){

                favoriteCars = App.getCookie('favoriteCars')

                console.log(favoriteCars)

                if(favoriteCars === undefined) favoriteCars = 0
            }

            console.log(favoriteCars)
            console.log('mark '+mark)
            console.log('drive '+drive)
            var data = {
                'mark': mark,
                'model': model,
                'from': from,
                'to': to,
                'favoriteCars': favoriteCars,
                'page': page,
                'drive': drive,
            }

            $.ajax({

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                type: "POST",

                url: '/cars',

                data: data

            }).done(function (data) {

                if (data) {
                    console.log('table getData done')
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

            this.eventPaginate()

            this.eventAddFavoriteCar()


        },

        eventPaginate: function () {

            $(el).on('click', '.pagination a', function (e, data) {

                e.preventDefault();

                var page = $(this).attr('href').split('page=')[1];

                var html = Table.getPage(page);

                $('html, body').animate({
                    scrollTop: $(el).offset().top - 95
                }, 300)
            });
        },

        eventAddFavoriteCar: function () {

            $(el).on('click','.favorite__btn',function () {

                var lotId = $(this).data('lot')

                Table.addFavoriteCar(lotId)

                $(this).blur()

                $(window).trigger('disableFavoriteBtn');
            })
        },
    }
})()