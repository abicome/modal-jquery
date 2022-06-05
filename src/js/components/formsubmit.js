import $ from "jquery";
$('form').submit(function (e) {
    e.preventDefault();
    var $form = $(this);

    // check if the input is valid using a 'valid' property
    if (!$form.valid) return false;

    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: $('#form').serialize(),
        success: function (response) {
            $('#answers').html(response);
        },
    });
});