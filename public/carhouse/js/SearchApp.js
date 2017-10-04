var Search = (function () {

    var searchData = {}

    var el = $('#search')

    var searchBtn = $('#search-btn')

    var searchClearBtn = $('#search-clear-btn')

    var favoriteBtn = '#favorite-search-btn'

    var favoriteWrapper = '.favorite-wrapper'

    function getModels() {

        var mark = $('#search-marks').val();
        var drive = $('#search-drive').val();
        var fuel = $('#search-fuel').val();
        var docAdd = $('#search-doc-add').val();
        var docRem = $('#search-doc-remove').val();
        var location = $('#search-location').val();
        var highlight = $('#search-highlight').val();
        var yearTo = $('#search-to').val();
        var yearFrom = $('#search-from').val();

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

        Search.runPreloader()

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

            console.log('heelo from models')

            Search.setSearchData()
            Search.stopPreloader()
        });
    }

    function getMarks() {

        Search.runPreloader()

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

                var el = $("#search-marks");

                el.empty();

                $.each(marks, function (key, value) {

                    el.append($("<option></option>").text(value));
                });

                $('.selectpicker').selectpicker('refresh');
            }

            Search.setSearchData()
            Search.stopPreloader()
        });
    }


    function getDocs() {


        console.log('GET DOCS')

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

    return {

        defaultText: {

            any: $('#search-marks').val(),

            to: $('#search-to').val(),

            from: $('#search-from').val()
        },

        showFavorite: false,

        runPreloader: function () {

            $('#search-preloader').removeClass('fa fa-search')
            $('#search-preloader-img').css('display', 'inline')
        },

        stopPreloader: function () {

            $('#search-preloader').addClass('fa fa-search')
            $('#search-preloader-img').css('display', 'none')
        },

        setSearchData: function () {

            var searchAdd = $('#search-doc-add').val()

            var searchRem = $('#search-doc-remove').val()

            searchData['docs'] = removeFromArray(searchAdd, searchRem)

            searchData['mark'] = $('#search-marks').val()

            searchData['model'] = $('#search-models').val()

            searchData['yearTo'] = $('#search-to').val()

            searchData['yearFrom'] = $('#search-from').val()

            searchData['drive'] = $('#search-drive').val()

            searchData['fuel'] = $('#search-fuel').val()

            searchData['highlight'] = $('#search-highlight').val()

            searchData['location'] = $('#search-location').val()

        },

        getSearchData: function () {

            return searchData
        },

        init: function () {


            $('.selectpicker').selectpicker('refresh');

            this.initEvents()

            $(window).trigger('disableFavoriteBtn');

        },

        initEvents: function () {

            this.onSearchCars()

            this.onToggleFavorite()

            this.onClearSearch()

            this.onClearFavorite()

            this.onDisableFavorite()

            //Change selectors

            this.onChangeMark()

            this.onChangeLocation()

            this.onChangeDocType()

            this.onChangeHighLight()

            this.onChangeDrive()

            this.onChangeFuel()

            this.onChangeYears()

        },

        clearSearch: function () {

            $('.selectpicker').selectpicker('val', '');

            getDocs()

            getMarks()



            Search.setSearchData()
        },



        onChangeMark: function () {


            $(el).on('change', '#search-marks', function (e) {
                e.preventDefault()

                var mark = $('#search-marks').val();

                getModels(mark);
            })


        },

        onChangeLocation: function () {

            $(el).on('change', '#search-location', function (e) {

                e.preventDefault()

                getDocs()

                getMarks()
            })
        },

        onChangeDocType: function () {

            $(el).on('change', '#search-doc-add', function (e) {

                e.preventDefault()

                getMarks()
            })

            $(el).on('change', '#search-doc-remove', function (e) {

                e.preventDefault()

                getMarks()
            })
        },

        onChangeHighLight: function () {

            $(el).on('change', '#search-highlight', function (e) {

                e.preventDefault()

                getMarks()
            })
        },

        onChangeDrive: function () {

            $(el).on('change', '#search-drive', function (e) {

                e.preventDefault()

                getMarks()
            })
        },

        onChangeFuel: function () {

            $(el).on('change', '#search-fuel', function (e) {

                e.preventDefault()

                getMarks()
            })
        },

        onChangeYears: function () {

            $(el).on('change', '#search-to', function (e) {

                e.preventDefault()

                getMarks()
            })

            $(el).on('change', '#search-from', function (e) {

                e.preventDefault()

                getMarks()
            })
        },



        onSearchCars: function () {

            searchBtn.click(function () {

                console.log('search Table.getPage')

                console.log(Search.getSearchData())
                Table.getPage(1, Search.getSearchData())
            })
        },

        onClearFavorite: function () {

            $(favoriteWrapper).on('click', '#favorite-clear-btn', function (e) {

                App.deleteCookie('favoriteCars')


                $(favoriteWrapper).html(
                    '<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>')

                $(window).trigger('disableFavoriteBtn');

                Search.showFavorite = false

                Search.clearSearch()
                Table.getPage(1,Search.getSearchData())
            })

        },

        onClearSearch: function () {

            searchClearBtn.click(function () {

                Search.clearSearch()

            })
        },

        onToggleFavorite: function () {

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
        },

        onDisableFavorite: function () {

            $(window).on('disableFavoriteBtn', function (e, data) {


                var favoriteCars = App.getCookie('favoriteCars')

                if (favoriteCars) {

                    $(favoriteBtn).attr('disabled', false)
                } else {

                    $(favoriteBtn).attr('disabled', true)
                }

                console.log('Favorite BTN' + favoriteCars)
            });


        }

    }


})()