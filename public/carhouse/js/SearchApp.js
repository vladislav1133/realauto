var Search = (function () {

    var el = '#search'

    return {

        defaultText: {
            any: $('#search-marks').val(),
            to: $('#search-to').val(),
            from: $('#search-from').val()
        },

        init: function () {

            this.event()

            console.log(this.defaultText.any + ' ' + this.defaultText.to + ' ' + this.defaultText.from)

        },

        event: function () {

            //Get models of mark
            $(el).on('change', '#search-marks', function (e) {
                e.preventDefault();

                var mark = $('#search-marks').val();

                Search.getModels(mark);
            })

            //Get cars with selected mark and models
            $(el).on('change', '#search-models', function (e) {
                e.preventDefault();

                var mark = $('#search-marks').val();
                var model = $('#search-models').val();
                Search.getYears(mark, model);
            })

            //Search cars
            $(el).on('click','#search-auto', function (e) {
                Table.getPage(1)
            })
        },

        getModels: function (mark) {

            console.log('getM')
            $.ajax({

                url: '/car/models/' + mark

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

                url: '/car/years/' + mark + '/' + model

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

        searchCars: function () {

        }
    }
})()