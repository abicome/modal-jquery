import $ from "jquery";
import 'jquery-validation'
$(function () {
    $("form[name='login']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
        highlight: function (element, errorClass, validClass) {
            $(element).closest('.lform__inp').addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.lform__inp').addClass(validClass).removeClass(errorClass);
        },
        submitHandler: function (form) {
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $('form[name="login"]'),
                cache: false,
                processData: false,
                success: function (data) {
                    $("#message").html(data);
                }
            });
            return false;
        }
    });
    $("form[name='signup']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
        highlight: function (element, errorClass, validClass) {
            $(element).closest('.lform__inp').addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.lform__inp').addClass(validClass).removeClass(errorClass);
        },
        submitHandler: function (form) {
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $('form[name="signup"]'),
                cache: false,
                processData: false,
                success: function (data) {
                    $("#message").html(data);
                }
            });
            return false;
        }
    });
});