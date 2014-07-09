var app = app || {};

$(document).ready(function() {
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