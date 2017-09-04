$(document).ready(function () {


    //MAGNIFIC POPUP
    $('#content').magnificPopup({
        delegate: '.btn-contact-us-popup' // child items selector, by clicking on it popup will open
    });
    $(".btn-about-popup").magnificPopup();
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
    $('#email').val('');
    $('#tel').val('');
    return false;
});