var Search = (function () {

    var el = $('#search')

    var searchBtn = $('#search-auto-btn')

    var favoriteBtn = $('#favorite-search-btn')

    var searchClearBtn = $('#search-clear-btn')

    return {

        defaultText: {
            any: $('#search-marks').val(),
            to: $('#search-to').val(),
            from: $('#search-from').val()
        },

        showFavorite: false,

        init: function () {

            this.initEvents()

            console.log(this.defaultText.any + ' ' + this.defaultText.to + ' ' + this.defaultText.from)

        },

        initEvents: function () {

            this.eventGetModels()

            this.eventGetMarks()

            this.eventSearchCars()

            this.eventToggleFavorite()

            this.eventClearSearch()
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

        eventClearSearch: function () {

            searchClearBtn.click(function () {

                var mark = $('#search-marks').val(Search.defaultText.any);
                var model = $('#search-models').val(Search.defaultText.any);
                var from = $('#search-from').val(Search.defaultText.from);
                var to = $('#search-to').val(Search.defaultText.to);

            })
        },

        eventToggleFavorite: function () {

            favoriteBtn.click(function (e) {

                if(!Search.showFavorite){

                    Search.showFavorite = true
                    favoriteBtn.text('Все')
                } else {

                    favoriteBtn.text('Избранные')
                    Search.showFavorite = false
                }


                Table.getPage(1)
            })
        },

        getModels: function (mark) {

            console.log('getM')
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

    }
})()