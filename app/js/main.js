var jt = jt || {};

$(document).ready(function() {
    jt.helpers.jsCheck();
    jt.nav.mobileMenu();
});

jt.nav = (function() {
    function mobileMenu() {
        document.querySelector('.nav__mobile-menu').addEventListener('click', function(e) {
            e.preventDefault();

            // can't iterate over queryselectorall results
            [].forEach.call(document.querySelectorAll('.nav'), function(el) {
                el.classList.toggle('nav--active');
            });
        });
    }

    return {
        mobileMenu: mobileMenu
    };
})();

jt.helpers = (function() {
    function jsCheck() {
        var bodyClass = document.querySelector('html').classList;
        bodyClass.remove('no-js');
        bodyClass.add('js');
    }

    return {
        jsCheck: jsCheck
    };
})();
