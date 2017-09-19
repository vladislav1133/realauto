$(document).ready(function () {

    $('#main-table .car-table').footable();

    updateFavoriteCars()

    //Second menu
    var bannerHeight = $('.main-header').height()
    var menuShow=true;

    window.onscroll = function() {

        if(menuShow){
            if($(window).scrollTop() >= bannerHeight){
                menuShow=false;
                $('#double-nav-container').animate({ //выбираем класс menu и метод animate
                    top: 0
                }, 300);
            }
        }

        if(!menuShow){
            if($(window).scrollTop() <= bannerHeight){
                menuShow=true;
                $('#double-nav-container').animate({ //выбираем класс menu и метод animate
                    top: -95
                }, 300);
            }
        }
    }

    //Custom gallery
    $('#custom-slider').bxSlider({
        pagerCustom: '#slider-pager',
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        mode: 'fade',
        captions: true
    });


    //MAGNIFIC POPUP

    $('#content').magnificPopup({

        delegate: '.btn-contact-us-popup' // child items selector, by clicking on it popup will open
    });

    console.log($('#table-body .favorite__btn'))


    $('#main-table').on('click','.favorite__btn',function () {

        console.log('we')

        var lotId = $(this).data('lot')

        addFavoriteCar(lotId)



        $(this).blur()

    })
});

$("#contact-us-popup").submit(function (e) {

    e.preventDefault();

    $.ajax({
        type: 'POST',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/contact-us',
        data: $(this).serialize()
    }).done(function () {
    });

    $('.btn-popup').magnificPopup('close');
    $('#name').val('');
    $('#tel').val('');
    return false;
});


function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function addFavoriteCar(lotId) {

    var favoriteCars = getCookie('favoriteCars')

    if(favoriteCars===undefined) {

        favoriteCars = [lotId]
    } else {

        favoriteCars = JSON.parse(favoriteCars)

        var id = favoriteCars.indexOf(lotId);

        if (id === -1) {
            favoriteCars.push(lotId);
        } else {
            favoriteCars.splice(id, 1);
        }
    }

    favoriteCars = JSON.stringify(favoriteCars)

    document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";

    updateFavoriteCars();
}

function updateFavoriteCars() {

    var favoriteCars = getCookie('favoriteCars')

    console.log(favoriteCars)

    $('.favorite__btn').each( function (i) {

            $(this).html('<i class="fa fa-bookmark-o"></i>')
    })


    if(favoriteCars === undefined) return false

    favoriteCars = JSON.parse(favoriteCars)

    $('.favorite__btn').each( function (i) {

        var favoriteBtn = $(this)

        var lotId = $(this).data('lot')

        favoriteCars.forEach(function(item, i) {

            if(lotId === item){

                favoriteBtn.html('<i class="fa fa-bookmark"></i>')

            }
        })
    })
}