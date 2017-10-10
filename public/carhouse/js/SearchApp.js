let Search = (function () {

    let options = {}

    let el = '#search'

    let searchBtn = '#search-btn'

    let searchClearBtn = '#search-clear-btn'

    let favoriteBtn = '#favorite-search-btn'

    let favoriteWrapper = '.favorite-wrapper'

    let markSelect = '#search-marks'
    let modelSelect = '#search-models'
    let fuelSelect = '#search-fuel'
    let driveSelect = '#search-drive'
    let locationSelect = '#search-location'
    let highlightSelect = '#search-highlight'
    let yearToSelect = '#search-to'
    let yearFromSelect = '#search-from'
    let docAddSelect = '#search-doc-add'
    let docRemSelect = '#search-doc-remove'


    function setSelectorsOptions() {

        $('.selectpicker').selectpicker({
            selectedTextFormat: 'count > 0',
            countSelectedText: 'Выбрано {0}',
            size: 5,
            selectAllText: 'Выделить все',
            deselectAllText: 'Убрать все'
        })

        $('.selectpicker').selectpicker('refresh');

    }

    function getModels() {

        let mark = $(markSelect).val()

        $.get({

            url: '/cars/models/' + mark

        }).done(function (response) {

            let models = response.models;

            if (models.length !== 0) {

                Search.setSelectOptions(modelSelect,models)

                $('.selectpicker').selectpicker('refresh');
            }
        });
    }

    function getDocs() {

        let data = {

            location: $(locationSelect).val(),
            mark: $(markSelect).val(),
            model: $(modelSelect).val()
        }

        $.ajax({

            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            method: 'POST',

            data: data,

            url: '/cars/docs'

        }).done(function (response) {

            let docType = response.docType;

            if (docType.length !== 0) {

                $(docAddSelect).selectpicker('val', '');
                $(docRemSelect).selectpicker('val', '');

                Search.setSelectOptions(docAddSelect,docType)
                Search.setSelectOptions(docRemSelect,docType)

                $('.selectpicker').selectpicker('refresh');
            }
        });
    }

    //EVENTS
    function initEvents() {

        onSearchCars()

        onToggleFavorite()

        onClickClearSearch()

        onClearFavorite()

        onDisableFavorite()

        //Change selectors

        onSearchQuerySubmit()

        onChangeMark()

        onChangeModel()

        onChangeLocation()
    }

    function onChangeMark() {

        $(el).on('change', markSelect, function (e) {
            e.preventDefault()

            let mark = $(markSelect).val();

            Search.clearSearch(['mark'])


            Search.setSearchOptions()

            getModels(mark);
        })
    }

    function onChangeModel() {

        $(el).on('change', modelSelect, function (e) {
            e.preventDefault()

            let mark = $(markSelect).val();

            Search.clearSearch(['mark','model'])

            Search.setSearchOptions()
        })
    }

    function onChangeLocation() {

        $(el).on('change', locationSelect, function (e) {
            e.preventDefault()

            getDocs()
        })
    }

    function onSearchQuerySubmit() {

        $('#search-query').submit(function (e) {
            e.preventDefault()

            var query = $('#search-query input').val()

            $('#search-query input').val('')

            $.ajax({

                method: 'GET',
                url: '/cars/search/' + query


            }).done(function (data) {

                Search.clearSearch()

                var request = {}

                if (data['found'] === true) {

                    if (data['col'] === 'lot') {

                        request['lot'] = query
                    }

                    if (data['col'] === 'vin') {

                        request['vin'] = query
                    }

                    if (data['col'] === 'year') {

                        request['yearTo'] = query
                        request['yearFrom'] = query
                    }

                    if (data['col'] === 'location') {

                        var locs = Search.getOptions()['location'].filter(function (item) {

                            return new RegExp('^' + query, "i").test(item);

                        });

                        if (locs.length === 0) Table.renderError()
                        else request['location'] = locs


                        console.log(request)
                    }

                    Table.getPage(1, request)

                } else if (data['found'] === false) {

                    Table.renderError()

                }
            })
        })
    }

    function onSearchCars() {

        $(searchBtn).click(function () {


            Table.getPage(1, Search.getSearchData())
        })
    }

    function onClearFavorite() {

        $(favoriteWrapper).on('click', '#favorite-clear-btn', function (e) {

            App.deleteCookie('favoriteCars')


            $(favoriteWrapper).html(
                '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')

            $(window).trigger('disableFavoriteBtn');

            Search.showFavorite = false

            Search.clearSearch()

            Table.getPage(1, Search.getSearchData())
        })

    }

    function onClickClearSearch() {

        $(searchClearBtn).click(function (e) {
            e.preventDefault()



            Search.setSelectOptions(yearToSelect,Search.getOptions()['years'])
            Search.setSelectOptions(yearFromSelect,Search.getOptions()['years'])

            Search.setSelectOptions(driveSelect,Search.getOptions()['drive'])

            Search.setSelectOptions(yearFromSelect,Search.getOptions()['years'])

            Search.setSelectOptions(fuelSelect,Search.getOptions()['fuel'])

            Search.setSelectOptions(locationSelect,Search.getOptions()['location'])

            console.log(Search.getOptions()['location'])

            Search.setSelectOptions(highlightSelect,Search.getOptions()['highlight'])

            Search.setSelectOptions(docAddSelect,Search.getOptions()['doc_type'])
            Search.setSelectOptions(docRemSelect,Search.getOptions()['doc_type'])

            Search.clearSearch()

            $('.selectpicker').selectpicker('refresh');


        })
    }

    function onToggleFavorite() {

        $(favoriteWrapper).on('click', '#favorite-search-btn', function (e) {

            var disFavoriteBtn = $('#favorite-search-btn').attr('disabled')

            if ('disabled' === disFavoriteBtn) {

                return false;
            }

            if (!Search.showFavorite) {

                Search.showFavorite = true

                $(favoriteWrapper).html(
                    '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite search-btn_half">Все</a>' +
                    '<a id="favorite-clear-btn" class="btn search-btn search-btn_favorite search-btn_half">Очистить</a>')
            } else {

                $(favoriteWrapper).html(
                    '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')
                Search.showFavorite = false
            }


            Search.clearSearch()

            console.log('Toggle favorite')

            Table.getPage(1, Search.getSearchData())
        })
    }

    function onDisableFavorite() {

        $(window).on('disableFavoriteBtn', function (e, data) {

            var favoriteCars = App.getCookie('favoriteCars')

            if (favoriteCars) {

                $(favoriteBtn).attr('disabled', false)
            } else {

                $(favoriteBtn).attr('disabled', true)
            }
        });


    }

    function initSelectOptions() {

        options['location'] = Search.getSelectOptions(locationSelect)
        options['years'] = Search.getSelectOptions(yearToSelect)
        options['drive'] = Search.getSelectOptions(driveSelect)
        options['fuel'] = Search.getSelectOptions(fuelSelect)
        options['highlight'] = Search.getSelectOptions(highlightSelect)
        options['doc_type'] = Search.getSelectOptions(docAddSelect)


      //  console.log(options)
    }

    return {

        showFavorite: false,

        getSelectOptions: function (select) {

            let options = []

            $(select + ' option').each(function () {
                options.push($(this).val())
            })

            return options

        },

        setSelectOptions: function (select, array) {

            let el = $(select);

            el.empty();

            $.each(array, function (key, value) {

                el.append($("<option></option>").text(value));
            });
        },

        getOptions: function () {

            return options
        },

        addLocation: function (location) {


            var options = []

            //Get options of select
            $("#search-location option").each(function () {
                options.push($(this).val())
            });

            //Found input locs in options
            var founded = options.filter(function (str) {

                return new RegExp('^' + location, "i").test(str);

            });


            var selected = $('#search-location').val()

            var newSelected = $('#search-location').val()

            //Add if not exist
            founded.forEach(function (item) {

                if (!App.itemExist(selected, item)) newSelected.push(item)
            })

            console.log('options: ', options)
            console.log('founded: ', founded)
            console.log('selected: ', selected)
            console.log('newSelected', newSelected)

            $('#search-location').val(newSelected)

            $('.selectpicker').selectpicker('refresh');

            getDocs()
        },

        setSearchOptions: function () {

            let mark = $(markSelect).val()
            let model = $(modelSelect).val()

            if (model) model = '/' + model

            $.get({

                url: '/cars/property/' + mark + model

            }).done(function (data) {

                Search.setSelectOptions(docAddSelect,data['doc_type'])
                Search.setSelectOptions(docRemSelect,data['doc_type'])

                Search.setSelectOptions(driveSelect,data['drive'])

                Search.setSelectOptions(fuelSelect,data['fuel'])

                Search.setSelectOptions(highlightSelect,data['highlights'])

                Search.setSelectOptions(locationSelect,data['location'])

                Search.setSelectOptions(yearToSelect,data['years'])
                Search.setSelectOptions(yearFromSelect,data['years'])

                $('.selectpicker').selectpicker('refresh');
            })
        },

        removeDoc: function (doc) {

            let selected = $(docRemSelect).val()

            let newSelected = $(docRemSelect).val()

            if (!App.itemExist(selected, doc)) newSelected.push(doc)


            console.log('selected: ', selected)
            console.log('newSelected', newSelected)

            $(docRemSelect).val(newSelected)

            $('.selectpicker').selectpicker('refresh');


        },

        getSearchData: function () {

            var searchData = {}

            searchData['docAdd'] = $('#search-doc-add').val()

            searchData['docRem'] = $('#search-doc-remove').val()

            searchData['mark'] = $('#search-marks').val()

            searchData['model'] = $('#search-models').val()

            searchData['yearTo'] = $('#search-to').val()

            searchData['yearFrom'] = $('#search-from').val()

            searchData['drive'] = $('#search-drive').val()

            searchData['fuel'] = $('#search-fuel').val()

            searchData['highlight'] = $('#search-highlight').val()

            searchData['location'] = $('#search-location').val()


            if (Search.showFavorite) {

                var favoriteCars = JSON.parse(App.getCookie('favoriteCars'))

                if (favoriteCars === undefined) favoriteCars = []
            }

            searchData['favoriteCars'] = favoriteCars

            return searchData
        },

        init: function () {

            initSelectOptions()

            setSelectorsOptions()

            initEvents()

            $(window).trigger('disableFavoriteBtn');

        },

        clearSearch: function (except = []) {

            if (!App.itemExist(except, 'mark')) $(markSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'model')) $(modelSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'fuel')) $(fuelSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'drive')) $(driveSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'location')) $(locationSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'highlight')) $(highlightSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'yearTo')) $(yearToSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'yearFrom')) $(yearFromSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'docAdd')) $(docAddSelect).selectpicker('val', '');
            if (!App.itemExist(except, 'docRem')) $(docRemSelect).selectpicker('val', '');
        },


    }


})()