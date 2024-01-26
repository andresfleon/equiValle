document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('#menu')
    const navMenu = document.querySelector('.nav__bar')
    const navClose = document.querySelectorAll('.nav__menu__item')

    menu.addEventListener('click', function () {
        navMenu.classList.toggle('nav--transalate')
    })



    navClose.forEach(function (e) {
        e.addEventListener('click', function () {
            /* window.alert('clickkkkkkkkkkkk 👌')*/
            navMenu.classList.toggle('nav--transalate')
        })
    })

})
