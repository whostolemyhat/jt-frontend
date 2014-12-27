var app = app || {};

$(document).ready(function() {
    console.log('Yes I know the images are massive and not sprited yet :P');
    app.helpers.jsCheck();
    app.nav.mobileMenu();
});

app.nav = (function() {
    function mobileMenu() {
        $('.nav__mobile-menu').click(function(e) {
            e.preventDefault();

            $('.nav').toggleClass('nav--active');
        });
    }

    return {
        mobileMenu: mobileMenu
    };
})();

app.helpers = (function() {
    function jsCheck() {
        $('html').removeClass('no-js').addClass('js');
    }

    return {
        jsCheck: jsCheck
    };
})();