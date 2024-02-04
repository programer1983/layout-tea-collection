const headerburger = document.querySelector('.header__burger')
const closeBurger = document.querySelector('.header-nav__closeicon')
const navlist = document.querySelector('.header-nav')
const html = document.querySelector('html')

headerburger.addEventListener('click', open)

function open() {
    navlist.classList.toggle('open-burger')
    html.classList.toggle('bacground-change')
}

closeBurger.addEventListener('click', close)

function close() {
    navlist.classList.remove('open-burger')
    html.classList.remove('bacground-change')
}