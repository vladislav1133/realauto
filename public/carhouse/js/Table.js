var Table = (function () {

    var el = '#table'



    return {

        init: function () {

            $('#main-table .car-table').footable();

            this.updateFavoriteCars()

            this.event()


        },

        event: function () {

            //paginate
            $(el).on('click', '.pagination a', function (e, data) {

                e.preventDefault();

                var page = $(this).attr('href').split('page=')[1];

                var html = Table.getPage(page);

                Table.render(html)

                $('html, body').animate({
                    scrollTop: $(el).offset().top - 95
                }, 300)
            });

            //add favorite car
            $(el).on('click','.favorite__btn',function () {

                var lotId = $(this).data('lot')

                Table.addFavoriteCar(lotId)

                $(this).blur()

            })
        },

        render: function (html) {


            $('#hide-table').html(html);

            console.log('table render')

            $('#hide-table .car-table').footable();

            setTimeout(function () {
                var hideTable = $('#table #hide-table .table-container').get(0)
                var hidePaginate = $('#table #hide-table .table-pagination').get(0)
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

            if (mark === Search.defaultText.any || typeof(mark) === 'undefined') mark = 0;
            if (model === Search.defaultText.any || typeof(model) === 'undefined') model = 0;
            if (to === Search.defaultText.to || typeof(to) === 'undefined') to = 0;
            if (from === Search.defaultText.from || typeof(from) === 'undefined') from = 0;

            this.getData(page, mark, model, from, to)
        },

        getData: function (page, mark, model, from, to) {

            console.log('table getData')
            $.ajax({

                url: '/cars/' + mark + '/' + model + '/' + from + '/' + to + '?page=' + page

            }).done(function (data) {

                if (data) {

                    Table.render(data)
                }
                else {

                    Table.render('<h3>К сожалению, по Вашему запросу авто не найдено</h3>')
                }

            });
        },

        updateFavoriteCars: function () {

            var favoriteCars = this.getCookie('favoriteCars')

            $(el + ' .favorite__btn').each(function (i) {

                $(this).html('<i class="fa fa-bookmark-o"></i>')
            })

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

        getCookie: function (name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        addFavoriteCar: function (lotId) {

            var favoriteCars = this.getCookie('favoriteCars')

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

            favoriteCars = JSON.stringify(favoriteCars)

            document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";

            this.updateFavoriteCars();
        }
    }
})()