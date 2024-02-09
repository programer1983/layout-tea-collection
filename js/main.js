const headerburger = document.querySelector('.header__burger')
const closeBurger = document.querySelector('.header-nav__closeicon')
const navlist = document.querySelector('.header-nav')
const menuShadow = document.querySelector('.menu-close')

headerburger.addEventListener('click', open)

function open() {
    navlist.classList.toggle('open-burger')
    menuShadow.classList.toggle('menu-open')
}

closeBurger.addEventListener('click', close)

function close() {
    navlist.classList.remove('open-burger')
    menuShadow.classList.remove('menu-open')
}






