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