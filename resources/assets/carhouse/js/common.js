$(document).ready(function () {

    $(".btn-contact-us-popup").magnificPopup();
    $(".btn-about-popup").magnificPopup();
})

$("#contact-us").submit(function (e) {

    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: '/contact-us',
        data: $(this).serialize()
    }).done(function () {
    });

    $('.btn-popup').magnificPopup('close');
    $('#email').val('');
    $('#tel').val('');
    return false;
})