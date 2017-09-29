var Search = (function () {

    var el = $('#search')

    var searchBtn = $('#search-btn')

    var searchClearBtn = $('#search-clear-btn')

    var favoriteBtn = '#favorite-search-btn'

    var favoriteClearBtn = '#favorite-clear-btn'

    var favoriteWrapper  = '.favorite-wrapper'

    return {

        defaultText: {

            any: $('#search-marks').val(),

            to: $('#search-to').val(),

            from: $('#search-from').val()
        },

        showFavorite: false,

        init: function () {

            $('.selectpicker').selectpicker({
                selectedTextFormat: 'count > 2',
                countSelectedText: 'Выбрано {0}',
                size: 5,
                selectAllText: 'Выделить все',
                deselectAllText: 'Убрать все'
            })

            $('.selectpicker').selectpicker('refresh');

            this.initEvents()

            $(window).trigger('disableFavoriteBtn');

        },

        getModels: function (mark) {

            $.ajax({

                url: '/cars/models/' + mark

            }).done(function (response) {

                if (response.models.length !== 0) {

                    response.models.unshift(Search.defaultText.any);

                    var models = response.models;


                    var $el = $("#search-models");

                    $el.empty(); // remove old options

                    $.each(models, function (key, value) {

                        $el.append($("<option></option>").text(value));
                    });

                    $('.selectpicker').selectpicker('refresh');

                    var mark = $('#search-marks').val();
                    var model = $('#search-models').val();

                    Search.getYears(mark, model);
                }


            });
        },

        getYears: function (mark, model) {

            console.log('getY')
            if (typeof(mark) === 'undefined' || mark === this.defaultText.any) mark = 0;
            if (typeof(model) === 'undefined' || (model === this.defaultText.any)) model = 0;


            $.ajax({

                url: '/cars/years/' + mark + '/' + model

            }).done(function (response) {

                if (response.years.length !== 0) {

                    var years = response.years;

                    years.unshift(Search.defaultText.any);

                    var $el = $("#search-years");

                    $el.empty(); // remove old options


                    $.each(years, function (key, value) {

                        $el.append($("<option></option>").text(value));
                    });

                    $('.selectpicker').selectpicker('refresh');
                }
            });
        },

        initEvents: function () {

            this.eventGetModels()

            this.eventGetMarks()

            this.eventSearchCars()

            this.eventToggleFavorite()

            this.eventClearSearch()

            this.eventClearFavorite()

            this.eventDisableFavorite()
        },

        eventGetMarks: function(){

            el.on('change', '#search-models', function (e) {
                e.preventDefault();

                var mark = $('#search-marks').val();
                var model = $('#search-models').val();
                Search.getYears(mark, model);
            })
        },

        eventGetModels: function (){

            $(el).on('change', '#search-marks', function (e) {
                e.preventDefault();

                var mark = $('#search-marks').val();

                Search.getModels(mark);
            })
        },

        eventSearchCars: function () {

            searchBtn.click(function () {
                Table.getPage(1)
            })
        },

        eventClearFavorite: function(){

            $(favoriteWrapper).on('click', '#favorite-clear-btn', function (e) {

                App.deleteCookie('favoriteCars')



                $(favoriteWrapper).html(
                    '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')

                $(window).trigger('disableFavoriteBtn');

                Search.showFavorite = false

                Table.getPage(1)
            })

        },

        eventClearSearch: function () {

            searchClearBtn.click(function () {

                $('.selectpicker').selectpicker('val', '');

            })
        },

        eventToggleFavorite: function () {

            $(favoriteWrapper).on('click','#favorite-search-btn',function (e) {

                var disFavoriteBtn = $('#favorite-search-btn').attr('disabled')

                if('disabled' ===disFavoriteBtn){

                    return false;
                }

                if(!Search.showFavorite){

                    Search.showFavorite = true

                    $(favoriteWrapper).html(
                        '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite search-btn_half">Все</a>' +
                        '<a id="favorite-clear-btn" class="btn search-btn search-btn_favorite search-btn_half">Очистить</a>')
                } else {

                    $(favoriteWrapper).html(
                        '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')
                    Search.showFavorite = false
                }


                Table.getPage(1)
            })
        },

        eventDisableFavorite: function () {

            $(window).on('disableFavoriteBtn', function(e, data){


                var favoriteCars = App.getCookie('favoriteCars')

                if(favoriteCars){

                    $(favoriteBtn).attr('disabled',false)
                } else {

                    $(favoriteBtn).attr('disabled',true)
                }

                console.log('Favorite BTN'+favoriteCars)
            });




        }

    }
})()