import $ from "jquery";
$(function() {
    $('.btn-popup').on('click', function() {
        
        let popupTarget = $(this).data('popup-link');
        let popup = document.querySelector('.'+ popupTarget);

        $(popup).toggleClass('is-show');
        
        $('.popup__close').on('click', function() {
            $(this).parents('.popup').removeClass('is-show');
            $(this).siblings('.form-login').show(2000);
            $(this).siblings('.form-sign').hide(2000);
        });
        
        $('.popup__bg').on('click', function() {
            $(this).parents('.popup').removeClass('is-show');
            $(this).parents('.popup').find('.form-login').show(2000);
            $(this).parents('.popup').find('.form-sign').hide(2000);
        })
    })
})