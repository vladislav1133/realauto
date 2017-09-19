var App = (function () {

    var someArray = [];

    return {
        init: function () {

            Search.init()
            Table.init()

            this.event()
        },

        event: function () {

            $('#contact-up-btn').magnificPopup({})
        }
}
})()


$(document).ready(function () {
    App.init()
})



