$(document).ready(function () {
    $('ul.header__navigation_tabs').on('click', 'li:not(.header__navigation_tab-active)', function () {
        $(this)
            .addClass('header__navigation_tab-active').siblings().removeClass('header__navigation_tab-active')
        $('div.media').find('div.media__content')
            .removeClass('media__content-active', 2500).eq($(this).index())
            .addClass('media__content-active')

    })

    const menu = document.querySelector('.header__navigation_tabs')
    const hamburger = document.querySelector('.header__burger')
    const item = document.querySelectorAll('.header__navigation_tabs')
    console.log(menu);

    hamburger.addEventListener('click', () => {
        console.log(1);
        hamburger.classList.toggle('header__burger-active');
        menu.classList.toggle('header__navigation_tabs-active');
    });

    item.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__navigation_tabs-active');
        })

    })

})
window.addEventListener('load', function (e) {

    window.applicationCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            // Swap it in and reload the page to get the new hotness.
            window.applicationCache.swapCache();
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

}, false);