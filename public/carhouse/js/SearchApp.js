let Search = (function () {

    let options = {}

    let searchType = 'main'

    let el = '#search'

    let searchBtn = '#search-btn'

    let searchGlobal = '#search-query'

    let searchGlobalQuery = {}

    let searchClearBtn = '#search-clear-btn'

    let favoriteBtn = '#favorite-search-btn'

    let favoriteWrapper = '.favorite-wrapper'

    let selects = {

        'type': '#search-type',

        'mark': '#search-marks',

        'model': '#search-models',

        'yearTo': '#search-to',
        'yearFrom': '#search-from',

        'damage': '#search-damage',

        'locAdd': '#search-loc-add',
        'locRem': '#search-loc-rem',

        'drive': '#search-drive',

        'fuel': '#search-fuel',

        'location': '#search-location',

        'highlight': '#search-highlight',

        'docAdd': '#search-doc-add',
        'docRem': '#search-doc-rem'
    }

    let buyNowInput = '#search-buy-now'

    //Just car options
    function initSearchOptions() {

        options['mark'] = Search.getSelectOptions(selects['mark'])

        options['years'] = Search.getSelectOptions(selects['yearTo'])

        options['damage'] = Search.getSelectOptions(selects['damage'])

        options['drive'] = Search.getSelectOptions(selects['drive'])

        options['fuel'] = Search.getSelectOptions(selects['fuel'])

        options['location'] = Search.getSelectOptions(selects['locAdd'])

        options['highlight'] = Search.getSelectOptions(selects['highlight'])

        options['doc_type'] = Search.getSelectOptions(selects['docAdd'])
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

        onChangeType()

        onSearchCars()

        onToggleFavorite()

        onClickClearSearch()

        onClearFavorite()

        onDisableFavorite()

        //Change selectors

        onSearchGlobal()

        onChangeMark()

        onChangeModel()

        onChangeLocation()
    }



    function getMarks() {

        let type = $(selects['type']).val()

        $.get({

            url: '/cars/marks/' + type

        }).done(function (response) {

            let marks = response.marks;

            if (marks.length !== 0) Search.setSelectOptions(selects['mark'],marks)

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

    //EVENTS

    function onChangeType() {

        $(el).on('change', selects['type'], function (e) {
            e.preventDefault()

           // let mark = $(selects['mark']).val();

            //
            // getMarks()
            //
            // Search.setSearchDefaultOptions([selects['type']])
            //
            ////////////////////////////////////////////

           // let mark = $(selects['mark']).val();

            Search.clearSearchValue([selects['type']])

            Search.setSearchCarOptions()

           // getModels(mark);

        })
    }

    function onChangeMark() {

        $(el).on('change', selects['mark'], function (e) {
            e.preventDefault()

            let mark = $(selects['mark']).val();

            Search.clearSearchValue([selects['type'],selects['mark']])

            Search.setSearchCarOptions()

            getModels(mark);
        })
    }

    function onChangeModel() {

        $(el).on('change', selects['model'], function (e) {
            e.preventDefault()

            let mark = $(selects['mark']).val();

            Search.clearSearchValue([selects['type'],selects['mark'],selects['model']])

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

    function onSearchGlobal() {

        $(searchGlobal).submit(function (e) {
            e.preventDefault()

            searchGlobalQuery = {}

            let query = $(searchGlobal + ' input').val()

            $(searchGlobal + ' input').val('')

            if(new RegExp('^[a-zA-Z]{2}$', "i").test(query)) {


                let founded = options['location'].filter(function (str) {

                    return new RegExp('^'+query,"i").test(str);

                });

                searchGlobalQuery['locAdd'] = founded

            }

            if(new RegExp('^[a-zA-Z0-9]{17}$', "i").test(query))  {

                searchGlobalQuery['vin'] = query;
            }

            if(new RegExp('^[0-9]{8}$', "i").test(query))  {

                searchGlobalQuery['lot'] = query;
            }

            if(new RegExp('^[0-9]{4}$', "i").test(query)) if(query>=options['years'].min() && query<=options['years'].max()) {

                searchGlobalQuery['yearTo'] = query;
                searchGlobalQuery['yearFrom'] = query;
            }

            console.log('global obj')
            console.log(searchGlobalQuery)

            searchType = 'global'

            Table.getPage(1, Search.getSearchData())

        })
    }

    function onSearchCars() {

        $(searchBtn).click(function () {

            searchType = 'main'
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

            Search.clearSearchValue()

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


            Search.setSearchDefaultOptions()

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


            if(searchType === 'main') {

                let searchData = {}

                searchData['type'] = $(selects['type']).val()

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
            }

            if(searchType === 'global') {

                return searchGlobalQuery
            }

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

            let type = $(selects['type']).val()
            let mark = $(selects['mark']).val()
            let model = $(selects['model']).val()

            if (mark) mark = '/' + mark
            if (model) model = '/' + model

            $.get({

                url: '/cars/property/' + type + mark + model

            }).done(function (data) {


                if(data.marks){
                    Search.setSelectOptions(selects['mark'],data['marks'])
                }

                Search.setSelectOptions(selects['yearTo'],data['years'])
                Search.setSelectOptions(selects['yearFrom'],data['years'])

                Search.setSelectOptions(selects['damage'],data['damage'])

                Search.setSelectOptions(selects['highlight'],data['highlights'])

                Search.setSelectOptions(selects['drive'],data['drive'])
                Search.setSelectOptions(selects['fuel'],data['fuel'])

                Search.setSelectOptions(selects['locAdd'],data['location'])
                Search.setSelectOptions(selects['locRem'],data['location'])

                Search.setSelectOptions(selects['docAdd'],data['doc_type'])
                Search.setSelectOptions(selects['docRem'],data['doc_type'])

                console.log('setSelectsOptions')
                console.log(data);

                $('.selectpicker').selectpicker('refresh');
            })
        },

        //Set type:car selects options
        setSearchDefaultOptions: function () {

            let options = Search.getOptions()

            console.log($(selects['type']).selectpicker('val'))
            $(selects['type']).selectpicker('val', 'car')

            Search.setSelectOptions(selects['mark'],options['mark'])

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

            Search.clearSearchValue([selects['type']])
        },

        clearSearchValue: function (exceptClear = []) {



            let selectsArray = Object.values(selects);

            selectsArray.forEach(function (item) {

                if (!App.itemExist(exceptClear, item)) $(item).selectpicker('val', '')
            })


            $(buyNowInput).prop( "checked", false );

            $('.selectpicker').selectpicker('refresh');
        },
    }

})()
