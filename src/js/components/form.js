import $ from "jquery";

$('.view_passw').on('click', function () {
    var x = $(this).siblings('.password-input');

    if (x.prop('type') === "password") {
        x.prop('type', 'text');

    } else {
        x.prop('type', 'password');
    }
});


$('.lform__check').on('click', function () {
    if ($('#check-company').is(':checked') ) {
        $('.lform__dop').show();
    } else {
        $('.lform__dop').hide();
    }
})

$('.btn-signup').on('click', function() {
    $('.form-login').hide();
    $('.form-sign').show();
})

