import * as cookie from './helpers/cookie'
import * as select from './helpers/select'
import {AvailableTable} from "./AvailableTable";

export let AvailableSearch = (function () {

    let options = {};

    let el = '#search'

    let searchBtn = '#search-btn'

    let searchBtnTop = '#search-btn-top'

    let searchClearBtn = '#search-clear-btn'

    let selects = {

        'mark': '#search-marks',

        'model': '#search-models',

        'yearTo': '#search-to',
        'yearFrom': '#search-from',
    }

    //Just car options
    function initSearchOptions() {

        options['mark'] = select.getOptions(selects['mark'])
        options['mark'].shift()

        options['years'] = select.getOptions(selects['yearTo'])

    }

    function initEvents() {

        onSearchCars()

        onClickClearSearch()


        //Change selectors

        onChangeMark()

    }

    function getModels() {

        let mark = $(selects['mark']).val()

        $.get({

            url: 'api/available-cars/models/' + mark

        }).done(function (response) {


            let models = response.models;

            if (models.length !== 0) {
                select.setOptions(selects['model'], models)
                $('.selectpicker').selectpicker('refresh');
            }

            console.log('stop preloader')
            AvailableSearch.stopPreloader()
        });
    }

    //EVENTS
    function onChangeMark() {

        $(el).on('change', selects['mark'], function (e) {
            e.preventDefault()

            AvailableSearch.runPreloader()

            let mark = $(selects['mark']).val();

            AvailableSearch.clearSearchValue([selects['mark']])

            getModels(mark);
        })
    }

    function onSearchCars() {

        $(searchBtn).click(function () {

            AvailableTable.getPage(1, AvailableSearch.getSearchData())
        })

        $(searchBtnTop).click(function () {

            AvailableTable.getPage(1, AvailableSearch.getSearchData())
        })
    }


    function onClickClearSearch() {

        $(searchClearBtn).click(function (e) {
            e.preventDefault()

            AvailableSearch.setSearchDefaultOptions()

        })
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

            initEvents()


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

                return searchData
        },

        //Set type:car selects options
        setSearchDefaultOptions: function () {

            let options = AvailableSearch.getOptions()

            select.setOptions(selects['mark'], options['mark'])
            $(selects['mark']).prepend("<option value='all' selected='selected'>ВСЕ</option>");
            $(selects['mark']).selectpicker('val', 'all')


            select.setOptions(selects['model'], '')

            select.setOptions(selects['yearFrom'], options['years'])
            select.setOptions(selects['yearTo'], options['years'])

            $(selects['yearFrom']).selectpicker('val', options['years'][0])
            $(selects['yearTo']).selectpicker('val', options['years'][options['years'].length - 1])

            AvailableSearch.clearSearchValue([selects['mark'], selects['yearTo'], selects['yearFrom']])
        },

        clearSearchValue: function (exceptClear = []) {


            let selectsArray = Object.values(selects);

            selectsArray.forEach(function (item) {

               // if (!App.itemExist(exceptClear, item)) $(item).selectpicker('val', '')
                if (!exceptClear.includes(item)) $(item).selectpicker('val', '')
            })

            $('.selectpicker').selectpicker('refresh');
        },
    }

})()
