$(document).ready(function () {

    $(".btn-popup").magnificPopup();


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
    return false;
})