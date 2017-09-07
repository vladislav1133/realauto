$(document).ready(function () {


    //MAGNIFIC POPUP
    $('#content').magnificPopup({
        delegate: '.btn-contact-us-popup' // child items selector, by clicking on it popup will open
    });
    $(".btn-about-popup").magnificPopup();

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