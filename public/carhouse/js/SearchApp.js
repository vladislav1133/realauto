var Search = (function () {

    var searchData = {}

    var el = '#search'

    var searchBtn = '#search-btn'

    var searchClearBtn = '#search-clear-btn'

    var favoriteBtn = '#favorite-search-btn'

    var favoriteWrapper = '.favorite-wrapper'


    var markSelect = '#search-marks'
    var modelSelect = '#search-models'
    var fuelSelect = '#search-fuel'
    var driveSelect = '#search-drive'
    var locationSelect = '#search-location'
    var highlightSelect = '#search-location'
    var yearToSelect = '#search-to'
    var yearFromSelect = '#search-from'
    var docAddSelect = '#search-doc-add'
    var docRemSelect = '#search-doc-remove'


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

        var mark = $(markSelect).val();
        var drive = $(driveSelect).val();
        var fuel = $(fuelSelect).val();
        var docAdd = $(docAddSelect).val();
        var docRem = $(docRemSelect).val();
        var location = $(locationSelect).val();
        var highlight = $(highlightSelect).val();
        var yearTo = $(yearToSelect).val();
        var yearFrom = $(yearFromSelect).val();

        var data = {

            mark: mark,
            drive: drive,
            fuel: fuel,
            docAdd: docAdd,
            docRem: docRem,
            location: location,
            highlight: highlight,
            yearTo: yearTo,
            yearFrom: yearFrom
        };


        $.ajax({

            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            method: 'POST',

            data: data,

            url: '/cars/models'

        }).done(function (response) {


            if (response.models.length !== 0) {

                var models = response.models;

                var el = $("#search-models");

                el.empty();

                $.each(models, function (key, value) {

                    el.append($("<option></option>").text(value));
                });

                $('.selectpicker').selectpicker('refresh');

            }
        });
    }

    function getMarks() {


        var drive = $('#search-drive').val();
        var fuel = $('#search-fuel').val();
        var docAdd = $('#search-doc-add').val();
        var docRem = $('#search-doc-remove').val();
        var location = $('#search-location').val();
        var highlight = $('#search-highlight').val();
        var yearTo = $('#search-to').val();
        var yearFrom = $('#search-from').val();

        var data = {

            drive: drive,
            fuel: fuel,
            docAdd: docAdd,
            docRem: docRem,
            location: location,
            highlight: highlight,
            yearTo: yearTo,
            yearFrom: yearFrom
        };

        $.ajax({

            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            method: 'POST',

            data: data,

            url: '/cars/marks'

        }).done(function (response) {

            if (response.marks.length !== 0) {

                var marks = response.marks;

                var elMark = $("#search-marks");
                var elModel = $("#search-models");

                elMark.empty();
                elModel.empty();

                $.each(marks, function (key, value) {

                    elMark.append($("<option></option>").text(value));
                });

                $('.selectpicker').selectpicker('refresh');

                Search.setSearchData()
            }
        });
    }

    function getDocs() {


        var location = $('#search-location').val();


        var data = {

            location: location
        };

        $.ajax({

            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            method: 'POST',

            data: data,

            url: '/cars/locations'

        }).done(function (response) {

            if (response.docType.length !== 0) {

                var docType = response.docType;

                var docAdd = $("#search-doc-add");
                var docRem = $("#search-doc-remove");

                docAdd.empty();
                docRem.empty();

                $.each(docType, function (key, value) {

                    docAdd.append($("<option></option>").text(value));
                    docRem.append($("<option></option>").text(value));
                });

                getMarks()

                $('.selectpicker').selectpicker('refresh');
            }
        });
    }

    function removeFromArray(array, remove) {

        array = array.filter(function (el) {
            return remove.indexOf(el) < 0;
        });

        return array
    }



    //EVENTS

    function initEvents() {

        onSearchCars()

        onToggleFavorite()

        onClearSearch()

        onClearFavorite()

        onDisableFavorite()

        //Change selectors

        onSearchQuerySubmit()

        onChangeMark()

        onChangeModel()

        onChangeLocation()

        onChangeDocType()

        onChangeHighLight()

        onChangeDrive()

        onChangeFuel()

        onChangeYears()

    }



    function onChangeMark() {



        $(el).on('change', '#search-marks', function (e) {
            e.preventDefault()

            Search.setSearchData()

            var mark = $('#search-marks').val();

            getModels(mark);
        })


    }

    function onChangeModel() {

        $(el).on('change', '#search-models', function (e) {
            e.preventDefault()

            Search.setSearchData()
        })
    }

    function onChangeYears() {

        $(el).on('change', '#search-to', function (e) {

            e.preventDefault()

            getMarks()
        })

        $(el).on('change', '#search-from', function (e) {

            e.preventDefault()

            getMarks()
        })
    }

    function onChangeDrive() {

        $(el).on('change', '#search-drive', function (e) {

            e.preventDefault()

            getMarks()
        })
    }

    function onChangeFuel() {

        $(el).on('change', '#search-fuel', function (e) {

            e.preventDefault()

            getMarks()
        })
    }

    function onChangeHighLight() {

        $(el).on('change', '#search-highlight', function (e) {

            e.preventDefault()

            getMarks()
        })
    }

    function onChangeLocation() {

        $(el).on('change', '#search-location', function (e) {

            e.preventDefault()

            getDocs()
        })
    }

    function onChangeDocType() {

        $(el).on('change', '#search-doc-add', function (e) {

            e.preventDefault()

            getMarks()
        })

        $(el).on('change', '#search-doc-remove', function (e) {

            e.preventDefault()

            getMarks()
        })
    }

    function onSearchQuerySubmit() {

        $('#search-query').submit(function (e) {
            e.preventDefault()

            var query  = $('#search-query input').val()

            $('#search-query input').val('')

            $.ajax({

                url: '/cars/search/' + query


            }).done(function (data) {

              if(data['found'] === true){

                  if(data['col'] === 'lot'){

                      data['lot']=query

                      Table.getPage(1,data)
                  }

                  if(data['col'] === 'vin'){

                      data['vin']=query

                      Table.getPage(1,data)
                  }

                  if(data['col'] === 'year'){

                      Search.setYear(query)

                      Table.getPage(1,Search.getSearchData())
                  }

                  if(data['col'] === 'location'){

                      Search.addLocation(query)

                      //var val = $('#search-doc-add').val()


                  }

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
            Table.getPage(1,Search.getSearchData())
        })

    }

    function onClearSearch() {

        $(searchClearBtn).click(function () {

            Search.clearSearch()

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

        addLocation: function (location) {


            var options = []

            //get options of select
            $("#search-location option").each(function() {
                options.push($(this).val())
            });

            var founded = options.filter(function (str) {

                return new RegExp('^'+location,"i").test(str);

                });

            var selected = $('#search-location').val()
            var newSelected = $('#search-location').val()

            founded.forEach(function (item) {

                if(!App.itemExist(selected,item)) newSelected.push(item)
            })


            $('#search-location').val(newSelected)

            $('.selectpicker').selectpicker('refresh');
        },

        setYear: function (year) {

            searchData['yearTo'] = year

            searchData['yearFrom'] = year

            $(yearToSelect).val(year)
            $(yearFromSelect).val(year)

            $('.selectpicker').selectpicker('refresh');
        },

        setSearchData: function () {

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

            console.log(Search.getSearchData())

    },

        getSearchData: function () {

            return searchData
        },

        init: function () {

            setSelectorsOptions()

            initEvents()

            $(window).trigger('disableFavoriteBtn');

        },

        clearSearch: function () {

            $('.selectpicker').selectpicker('val', '');

            getDocs()

            getMarks()



            Search.setSearchData()
        },
    }


})()