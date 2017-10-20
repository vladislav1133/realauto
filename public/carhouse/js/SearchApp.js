let Search = (function () {

    let options = {}

    let el = '#search'

    let searchBtn = '#search-btn'

    let queryForm = '#search-query'

    let searchClearBtn = '#search-clear-btn'

    let favoriteBtn = '#favorite-search-btn'

    let favoriteWrapper = '.favorite-wrapper'

    let selects = {

        'mark':'#search-marks',

        'model':'#search-models',

        'yearTo':'#search-to',
        'yearFrom':'#search-from',

        'damage': '#search-damage',

        'locAdd': '#search-loc-add',
        'locRem': '#search-loc-rem',

        'drive':'#search-drive',

        'fuel':'#search-fuel',

        'location':'#search-location',

        'highlight':'#search-highlight',

        'docAdd':'#search-doc-add',
        'docRem':'#search-doc-rem'
    }

    let buyNowInput = '#search-buy-now'

    function initSearchOptions() {

        options['years'] = Search.getSelectOptions(selects['yearTo'])

        options['damage'] = Search.getSelectOptions(selects['damage'])

        options['drive'] = Search.getSelectOptions(selects['drive'])

        options['fuel'] = Search.getSelectOptions(selects['fuel'])

        options['location'] = Search.getSelectOptions(selects['locAdd'])

        options['highlight'] = Search.getSelectOptions(selects['highlight'])

        options['doc_type'] = Search.getSelectOptions(selects['docAdd'])


          console.log(options)
    }

    function initSelectSetting() {

        $('.selectpicker').selectpicker({
            selectedTextFormat: 'count > 0',
            countSelectedText: 'Выбрано {0}',
            size: 5,
            selectAllText: 'Выделить все',
            deselectAllText: 'Убрать все'
        })

        $('.selectpicker').selectpicker('refresh');

    }

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

    //EVENTS

    function onChangeMark() {

        $(el).on('change', selects['mark'], function (e) {
            e.preventDefault()

            let mark = $(selects['mark']).val();

            Search.clearSearch([selects['mark']])


            Search.setSearchCarOptions()

            getModels(mark);
        })
    }

    function onChangeModel() {

        $(el).on('change', selects['model'], function (e) {
            e.preventDefault()

            let mark = $(selects['mark']).val();

            Search.clearSearch([selects['mark'],selects['model']])

            Search.setSearchCarOptions()
        })
    }

    function onChangeLocation() {

        $(el).on('change', selects['locAdd'], function (e) {
            e.preventDefault()

            getDocs()
        })

        $(el).on('change', selects['locRem'], function (e) {
            e.preventDefault()

            getDocs()
        })
    }

    function onSearchQuerySubmit() {

        $('#search-query').submit(function (e) {
            e.preventDefault()

            let query = $(queryForm + ' input').val()

            $(queryForm + ' input').val('')

            $.ajax({

                method: 'GET',
                url: '/cars/search/' + query


            }).done(function (data) {

                Search.clearSearch()

                $('.selectpicker').selectpicker('refresh');

                let request = {}

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
                        else request['locAdd'] = locs


                        console.log(request)
                    }

                    Table.getPage(1, request)

                } else if (data['found'] === false) {

                    Table.renderError()

                }

                Search.setSearchDefaultOptions()
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

            Search.setSearchDefaultOptions()
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

    function getModels() {

        let mark = $(selects['mark']).val()

        $.get({

            url: '/cars/models/' + mark

        }).done(function (response) {

            let models = response.models;

            if (models.length !== 0) Search.setSelectOptions(selects['model'],models)

        });
    }

    function getDocs(updatePage = false) {

        let data = {

            mark: $(selects['mark']).val(),
            model: $(selects['model']).val(),
            locAdd: $(selects['locAdd']).val(),
            locRem: $(selects['locRem']).val(),
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



                $(selects['docAdd']).selectpicker('val', '');
                $(selects['docRem']).selectpicker('val', '');

                Search.setSelectOptions(selects['docAdd'],docType)
                Search.setSelectOptions(selects['docRem'],docType)

                $('.selectpicker').selectpicker('refresh');

                if(updatePage === true) Table.getPage(1,Search.getSearchData())
            }
        });
    }

    return {

        showFavorite: false,

        init: function () {

            initSearchOptions()

            initSelectSetting()

            initEvents()

            $(window).trigger('disableFavoriteBtn');

        },

        getSelects: function () {

            return selects
        },

        getOptions: function () {

            return options
        },
        getSearchData: function () {

            let searchData = {}

            searchData['mark'] = $(selects['mark']).val()

            searchData['model'] = $(selects['model']).val()

            searchData['yearTo'] = $(selects['yearTo']).val()

            searchData['yearFrom'] = $(selects['yearFrom']).val()

            searchData['damage'] = $(selects['damage']).val()

            searchData['drive'] = $(selects['drive']).val()

            searchData['fuel'] = $(selects['fuel']).val()

            searchData['highlight'] = $(selects['highlight']).val()

            searchData['locAdd'] = $(selects['locAdd']).val()
            searchData['locRem'] = $(selects['locRem']).val()

            searchData['docAdd'] = $(selects['docAdd']).val()

            searchData['docRem'] = $(selects['docRem']).val()



            if ($(buyNowInput).is(":checked")){
                searchData['buyNow'] = 1
            }

            if (Search.showFavorite) {

                let favoriteCars = JSON.parse(App.getCookie('favoriteCars'))

                if (favoriteCars === undefined) favoriteCars = []

                searchData['favoriteCars'] = favoriteCars
            }

            return searchData
        },

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

            $('.selectpicker').selectpicker('refresh');
        },

        removeDoc: function (doc,updatePage = false) {

            let selected = $(selects['docRem']).val()

            let newSelected = $(selects['docRem']).val()

            if (!App.itemExist(selected, doc)) newSelected.push(doc)

            $(selects['docRem']).val(newSelected)

            $('.selectpicker').selectpicker('refresh');

            if(updatePage === true) Table.getPage(1,Search.getSearchData())
        },

        removeLoc: function (loc) {

            let selected = $(selects['locRem']).val()

            let newSelected = $(selects['locRem']).val()

            if (!App.itemExist(selected, loc)) newSelected.push(loc)

            $(selects['locRem']).val(newSelected)

            $('.selectpicker').selectpicker('refresh');

            getDocs(true)
        },

        setSearchCarOptions: function () {

            let mark = $(selects['mark']).val()
            let model = $(selects['model']).val()

            if (model) model = '/' + model

            $.get({

                url: '/cars/property/' + mark + model

            }).done(function (data) {

                Search.setSelectOptions(selects['docAdd'],data['doc_type'])
                Search.setSelectOptions(selects['docRem'],data['doc_type'])

                Search.setSelectOptions(selects['damage'],data['damage'])

                Search.setSelectOptions(selects['drive'],data['drive'])

                Search.setSelectOptions(selects['fuel'],data['fuel'])

                Search.setSelectOptions(selects['highlight'],data['highlights'])

                Search.setSelectOptions(selects['locAdd'],data['location'])
                Search.setSelectOptions(selects['locRem'],data['location'])

                Search.setSelectOptions(selects['yearTo'],data['years'])
                Search.setSelectOptions(selects['yearFrom'],data['years'])

                $('.selectpicker').selectpicker('refresh');
            })
        },

        setSearchDefaultOptions: function () {

            let options = Search.getOptions()

            Search.setSelectOptions(selects['model'],'')

            Search.setSelectOptions(selects['yearTo'],options['years'])
            Search.setSelectOptions(selects['yearFrom'],options['years'])

            Search.setSelectOptions(selects['damage'],options['damage'])

            Search.setSelectOptions(selects['locAdd'],options['location'])
            Search.setSelectOptions(selects['locRem'],options['location'])

            Search.setSelectOptions(selects['drive'],options['drive'])

            Search.setSelectOptions(selects['fuel'],options['fuel'])

            Search.setSelectOptions(selects['highlight'],options['highlight'])

            Search.setSelectOptions(selects['docAdd'],options['doc_type'])
            Search.setSelectOptions(selects['docRem'],options['doc_type'])

            Search.clearSearch()

        },

        clearSearch: function (exceptClear = []) {

            let selects = Object.values(Search.getSelects());

            selects.forEach(function (item) {

                if (!App.itemExist(exceptClear, item)) $(item).selectpicker('val', '')
            })


            $(buyNowInput).prop( "checked", false );

            $('.selectpicker').selectpicker('refresh');
        },
    }

})()
