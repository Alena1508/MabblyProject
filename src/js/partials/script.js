$(document).ready(function () {


    // placeholder
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });


    // mobile menu
    $('.js-menuOpen').click(function() {
        $('.menu').animate({
            right: '0px'
        }, 200);

        $('body').animate({
            right: '285px'
        }, 200);
    });

    $('.js-closeMenu').click(function() {
        $('.menu').animate({
            right: '-285px'
        }, 200);

        $('body').animate({
            right: '0px'
        }, 200);
    });

    // scroll function
    $(".js-scroll").on("click", function (e) {
        e.preventDefault();
        var block = $(this).data("block")
            , offset = $(block).offset().top;
        $("html, body").animate({
            scrollTop: offset
        }, 400)
    })
});