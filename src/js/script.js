$(document).ready(function () {
    $('ul.header__navigation_tabs').on('click', 'li:not(.header__navigation_tab-active)', function () {
        $(this)
            .addClass('header__navigation_tab-active').siblings().removeClass('header__navigation_tab-active')
        $('div.media').find('div.media__content')
            .removeClass('media__content-active', 2500).eq($(this).index())
            .addClass('media__content-active')

    })
})