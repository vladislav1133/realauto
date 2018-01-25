import * as cookie from './helpers/cookie'
import * as select from './helpers/select'
import {MainTable} from "./MainTable";

export let MainSearch = (function () {

    let options = {};

    let searchType = 'main'

    let el = '#search'

    let searchBtn = '#search-btn'

    let searchBtnTop = '#search-btn-top'

    let searchGlobal = '#global-search'

    let searchGlobalQuery = {}

    let searchClearBtn = '#search-clear-btn'

    let favoriteBtn = '#favorite-search-btn'

    let favoriteWrapper = '.favorite-wrapper'

    let selects = {

        'source': '#search-source',

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

    let buyNowInputTop = '#search-buy-now-top'
    let buyNowInputBottom = '#search-buy-now-bottom'

    //Just car options
    function initSearchOptions() {

        options['source'] = select.getOptions(selects['source'])


        options['type'] = select.getOptions(selects['type'])

        options['mark'] = select.getOptions(selects['mark'])
        options['mark'].shift()

        options['years'] = select.getOptions(selects['yearTo'])

        options['damage'] = select.getOptions(selects['damage'])

        options['drive'] = select.getOptions(selects['drive'])

        options['fuel'] = select.getOptions(selects['fuel'])

        options['location'] = select.getOptions(selects['locAdd'])

        options['highlight'] = select.getOptions(selects['highlight'])

        options['doc_type'] = select.getOptions(selects['docAdd'])
    }

    function initEvents() {

        //onSearchCars()

        // onToggleFavoriteBtn()

        onClickClearSearch()

        onClearFavorite()

        // onDisableFavorite()

        //Change selectors

        onSearchGlobal()

        onChangeSource()

        onChangeType()

        // onChangeMark()

        // onChangeModel()

        onChangeLocation()

        onClickGlobalAdvice()
    }

    function onClickGlobalAdvice() {
        let ga = "#global-advice"
        let gaPopup = ".global-search .popup"

        $(ga).click(function () {


            if ($(gaPopup).css('display') === 'none') {
                //  $(gaPopup).slideDown();
                $(gaPopup).css('display', 'block')
            } else {
                // $(gaPopup).slideUp();
                $(gaPopup).css('display', 'none')
            }
        })
    }

    function getMarks() {

        let type = $(selects['type']).val()

        $.get({

            url: '/cars/marks/' + type

        }).done(function (response) {

            let marks = response.marks;

            if (marks.length !== 0){
                select.setOptions(selects['mark'], marks)
                $('.selectpicker').selectpicker('refresh');
            }

        });
    }

    function getModels() {

        let mark = $(selects['mark']).val()
        let type = $(selects['type']).val()

        $.get({

            url: '/cars/models/' + type + '/' + mark

        }).done(function (response) {


            let models = response.models;

            if (models.length !== 0) {
                select.setOptions(selects['model'], models)
                $('.selectpicker').selectpicker('refresh');
            }

            MainSearch.stopPreloader()

        });
    }

    function getDocs(updatePage = false) {

        let data = {

            source: $(selects['source']).val(),
            type: $(selects['type']).val(),
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


                $(selects['docAdd']).selectpicker('val', '');
                $(selects['docRem']).selectpicker('val', '');

                select.setOptions(selects['docAdd'], docType)
                select.setOptions(selects['docRem'], docType)

                $('.selectpicker').selectpicker('refresh');

                if (updatePage === true) MainTable.getPage(1, MainSearch.getSearchData())

        });
    }

    //EVENTS

    function onChangeSource() {

        $(el).on('change', selects['source'], function (e) {
            e.preventDefault()

            MainSearch.runPreloader()

            $(selects['type']).selectpicker('val', options['type'][0])

            select.setOptions(selects['model'], '')

            MainSearch.clearSearchValue([selects['source'], selects['type']])

            MainSearch.setSearchCarOptions()

        })
    }


    function onChangeType() {

        $(el).on('change', selects['type'], function (e) {
            e.preventDefault()

            MainSearch.runPreloader()

            MainSearch.clearSearchValue([selects['source'], selects['type']])

            select.setOptions(selects['model'], '')

            MainSearch.setSearchCarOptions()


        })
    }

    // function onChangeMark() {

    //     $(el).on('change', selects['mark'], function (e) {
    //         e.preventDefault()

    //         MainSearch.runPreloader()

    //         let mark = $(selects['mark']).val();

    //         MainSearch.clearSearchValue([selects['source'], selects['type'], selects['mark']])

    //         MainSearch.setSearchCarOptions()

    //        // getModels(mark);
    //     })
    // }

    // function onChangeModel() {

    //     $(el).on('change', selects['model'], function (e) {
    //         e.preventDefault()

    //         MainSearch.runPreloader()

    //         let mark = $(selects['mark']).val();

    //         MainSearch.clearSearchValue([selects['source'], selects['type'], selects['mark'], selects['model']])

    //         MainSearch.setSearchCarOptions()
    //     })
    // }

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

            if (new RegExp('^[a-zA-Z]{2}$', "i").test(query)) {


                let founded = options['location'].filter(function (str) {

                    return new RegExp('^' + query, "i").test(str);

                });

                searchGlobalQuery['locAdd'] = founded

            }

            if (new RegExp('^[a-zA-Z0-9]{17}$', "i").test(query)) {

                searchGlobalQuery['vin'] = query;
            }

            if (new RegExp('^[0-9]{8}$', "i").test(query)) {

                searchGlobalQuery['lot'] = query;
            }

            if (new RegExp('^[0-9]{4}$', "i").test(query)) if (query >= options['years'].min() && query <= options['years'].max()) {

                searchGlobalQuery['yearTo'] = query;
                searchGlobalQuery['yearFrom'] = query;
            }

            console.log('global obj')
            console.log(searchGlobalQuery)

            searchType = 'global'

            MainTable.getPage(1, MainSearch.getSearchData())

        })
    }

    // function onSearchCars() {
    //
    //     $(searchBtn).click(function () {
    //
    //         searchType = 'main'
    //         MainTable.getPage(1, MainSearch.getSearchData())
    //     })
    //
    //     $(searchBtnTop).click(function () {
    //
    //         searchType = 'main'
    //
    //         MainTable.getPage(1, MainSearch.getSearchData())
    //     })
    // }

    function onClearFavorite() {

        $(favoriteWrapper).on('click', '#favorite-clear-btn', function (e) {

            cookie.destroy('favoriteCars')


            $(favoriteWrapper).html(
                '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')

            $(window).trigger('disableFavoriteBtn');

            MainSearch.showFavorite = false

            MainSearch.clearSearchValue()

            MainTable.getPage(1, MainSearch.getSearchData())
        })

    }

    function onClickClearSearch() {

        $(searchClearBtn).click(function (e) {
            e.preventDefault()

            MainSearch.setSearchDefaultOptions()

        })
    }


    // function onToggleFavoriteBtn() {

    //     $(favoriteWrapper).on('click', '#favorite-search-btn', function (e) {

    //         var disFavoriteBtn = $('#favorite-search-btn').attr('disabled')

    //         if ('disabled' === disFavoriteBtn) {

    //             return false;
    //         }


    //         if (!MainSearch.showFavorite) {

    //             MainSearch.showFavorite = true

    //             $(favoriteWrapper).html(
    //                 '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite search-btn_half">Все</a>' +
    //                 '<a id="favorite-clear-btn" class="btn search-btn search-btn_favorite search-btn_half">Очистить</a>')
    //         } else {

    //             $(favoriteWrapper).html(
    //                 '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')
    //             MainSearch.showFavorite = false
    //         }


    //         MainSearch.setSearchDefaultOptions()

    //         console.log('Toggle favorite')

    //         MainTable.getPage(1, MainSearch.getSearchData())
    //     })
    // }

    // function onDisableFavorite() {

    //     $(window).on('disableFavoriteBtn', function (e, data) {

    //         var favoriteCars = cookie.get('favoriteCars')

    //         if (favoriteCars) {

    //             $(favoriteBtn).attr('disabled', false)
    //         } else {

    //             $(favoriteBtn).attr('disabled', true)
    //         }
    //     });


    // }

    function initSelectSetting() {

        $('.selectpicker').selectpicker({
            selectedTextFormat: 'count > 0',
            countSelectedText: 'Выбрано {0}',
            size: 5
        })

        $('.selectpicker').selectpicker('refresh');
    }


    return {

        showFavorite: false,

        runPreloader: function () {
            $(searchBtnTop).html('<img class="search-block_preloader" src="/carhouse/img/search_preloader.svg">')
        },

        stopPreloader: function () {
            $(searchBtnTop).html('<i class="fa fa-search"></i>')
        },

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

        // getSearchData: function () {


        //     if (searchType === 'main') {

        //         let searchData = {}

        //         searchData['source'] =  $(selects['source']).val()

        //         searchData['type'] = $(selects['type']).val()

        //         searchData['mark'] = $(selects['mark']).val()

        //         searchData['model'] = $(selects['model']).val()

        //         searchData['yearTo'] = $(selects['yearTo']).val()

        //         searchData['yearFrom'] = $(selects['yearFrom']).val()

        //         searchData['damage'] = $(selects['damage']).val()

        //         searchData['drive'] = $(selects['drive']).val()

        //         searchData['fuel'] = $(selects['fuel']).val()

        //         searchData['highlight'] = $(selects['highlight']).val()

        //         searchData['locAdd'] = $(selects['locAdd']).val()
        //         searchData['locRem'] = $(selects['locRem']).val()

        //         searchData['docAdd'] = $(selects['docAdd']).val()

        //         searchData['docRem'] = $(selects['docRem']).val()


        //         if ($(buyNowInputTop).is(":checked") || $(buyNowInputBottom).is(":checked")) {

        //             searchData['buyNow'] = 1
        //         }

        //         if (MainSearch.showFavorite) {

        //             let favoriteCars = JSON.parse(cookie.get('favoriteCars'))

        //             if (favoriteCars === undefined) favoriteCars = []

        //             searchData['favoriteCars'] = favoriteCars
        //         }
        //         return searchData
        //     }

        //     if (searchType === 'global') {

        //         return searchGlobalQuery
        //     }
        // },

        removeDoc: function (doc, updatePage = false) {

            let selected = $(selects['docRem']).val()

            let newSelected = $(selects['docRem']).val()

            //if (!App.itemExist(selected, doc)) newSelected.push(doc)
            if (!selected.includes(doc)) newSelected.push(doc)

            $(selects['docRem']).val(newSelected)

            $('.selectpicker').selectpicker('refresh');

            if (updatePage === true) MainTable.getPage(1, MainSearch.getSearchData())
        },

        removeLoc: function (loc) {

            let selected = $(selects['locRem']).val()

            let newSelected = $(selects['locRem']).val()

           // if (!App.itemExist(selected, loc)) newSelected.push(loc)
            if (!selected.includes(loc)) newSelected.push(loc)

            $(selects['locRem']).val(newSelected)

            $('.selectpicker').selectpicker('refresh');

            getDocs(true)
        },

        setSearchCarOptions: function () {

            let source = $(selects['source']).val()
            let type = '/' + $(selects['type']).val()
            let mark = $(selects['mark']).val()
            let model = $(selects['model']).val()

            if (model) model = model.join(',');

            // console.log('перед get')
            // $.get({
            //
            //     url: '/cars/property/' + source + type,
            //
            //     data: {
            //         mark: mark,
            //         model: model
            //     }
            //
            // }).done(function (data) {
            //
            //     console.log('in done')
            //     console.log("data", data)
            //
            //     if (data.hasOwnProperty('marks')) {
            //         select.setOptions(selects['mark'], data.marks)
            //         $(selects['mark']).prepend("<option value='all' selected='selected'>ВСЕ</option>");
            //     }
            //
            //     if(data.hasOwnProperty('models')) {
            //         select.setOptions(selects['model'], data.models)
            //     }
            //
            //     select.setOptions(selects['yearTo'], data['years'])
            //     select.setOptions(selects['yearFrom'], data['years'])
            //
            //
            //     $(selects['yearFrom']).selectpicker('val', data['years'][0])
            //     $(selects['yearTo']).selectpicker('val', data['years'][data['years'].length - 1])
            //
            //
            //     select.setOptions(selects['damage'], data['damage'])
            //
            //     select.setOptions(selects['highlight'], data['highlights'])
            //
            //     select.setOptions(selects['drive'], data['drive'])
            //     select.setOptions(selects['fuel'], data['fuel'])
            //
            //     select.setOptions(selects['locAdd'], data['location'])
            //     select.setOptions(selects['locRem'], data['location'])
            //
            //     select.setOptions(selects['docAdd'], data['doc_type'])
            //     select.setOptions(selects['docRem'], data['doc_type'])
            //
            //
            //     $('.selectpicker').selectpicker('refresh');
            //
            //     MainSearch.stopPreloader()
            // })
            MainSearch.stopPreloader()
        },

        //Set type:car selects options
        setSearchDefaultOptions: function () {

            let options = MainSearch.getOptions()

            $(selects['source']).selectpicker('val', options['source'][0])

            $(selects['type']).selectpicker('val', options['type'][0])

            select.setOptions(selects['mark'], options['mark'])
            $(selects['mark']).prepend("<option value='all' selected='selected'>ВСЕ</option>");
            $(selects['mark']).selectpicker('val', 'all')


            select.setOptions(selects['model'], '')

            select.setOptions(selects['yearFrom'], options['years'])
            select.setOptions(selects['yearTo'], options['years'])

            $(selects['yearFrom']).selectpicker('val', options['years'][0])
            $(selects['yearTo']).selectpicker('val', options['years'][options['years'].length - 1])

            select.setOptions(selects['damage'], options['damage'])

            select.setOptions(selects['locAdd'], options['location'])
            select.setOptions(selects['locRem'], options['location'])

            select.setOptions(selects['drive'], options['drive'])

            select.setOptions(selects['fuel'], options['fuel'])

            select.setOptions(selects['highlight'], options['highlight'])

            select.setOptions(selects['docAdd'], options['doc_type'])
            select.setOptions(selects['docRem'], options['doc_type'])

            MainSearch.clearSearchValue([selects['source'], selects['type'],selects['mark'], selects['yearTo'], selects['yearFrom']],true)
        },

        clearSearchValue: function (exceptClear = [],buyItNow = false) {


            let selectsArray = Object.values(selects);

            selectsArray.forEach(function (item) {

               // if (!App.itemExist(exceptClear, item)) $(item).selectpicker('val', '')
                if (!exceptClear.includes(item)) $(item).selectpicker('val', '')
            })


            if(buyItNow){
                $(buyNowInputTop).prop("checked", false);
                $(buyNowInputBottom).prop("checked", false);
            }

            $('.selectpicker').selectpicker('refresh');
        },
    }

})()
