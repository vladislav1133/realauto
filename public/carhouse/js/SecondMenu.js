var SecondMenu = (function () {

    return {

        el: $('#double-nav-container'),

        elBannerHeight: $('.main-header').height(),

        show: true,

        init: function () {

            this.initEvents()
        },

        initEvents: function () {

            this.eventShowMenu()

        },

        eventShowMenu: function () {

            window.onscroll = function () {

                if (SecondMenu.show) {

                    if ($(window).scrollTop() >= SecondMenu.elBannerHeight) {

                        SecondMenu.show = false;

                        $(SecondMenu.el).animate({ //выбираем класс menu и метод animate
                            top: 0
                        }, 300);
                    }
                }

                if (!SecondMenu.show) {

                    if ($(window).scrollTop() <= SecondMenu.elBannerHeight) {

                        SecondMenu.show = true;

                        $(SecondMenu.el).animate({ //выбираем класс menu и метод animate
                            top: -SecondMenu.el.height()
                        }, 300);
                    }
                }
            }

        }
    }
})()