var App = (function () {

    return {

        itemExist: function(arr,item) {

            return arr.some(function(el) {

                return el === item;
            });
        },

        init: function () {

            SecondMenu.init()
            Search.init()
            Table.init()

            this.initEvents()
        },

        initEvents: function () {

            this.eventContactPopup()

        },

        eventContactPopup: function () {
            $('#contact-up-btn').magnificPopup({})
        },

        getCookie: function (name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        deleteCookie: function (name) {

            this.setCookie(name, "", {
                expires: -1
            })

        },

        setCookie: function(name,value,options){
            options = options || {};

            var expires = options.expires;

            if (typeof expires == "number" && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires * 1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) {
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;

            for (var propName in options) {
                updatedCookie += "; " + propName;
                var propValue = options[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        },
    }
})()


$(document).ready(function () {

    App.init()

})



