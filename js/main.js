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



/* =============================================================================== */


let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log('find', entry)
            entry.target.classList.add('active')
            // observer.unobserve(entry, target)
        }
    });
}

let observer = new IntersectionObserver(callback, options)

let targets = document.querySelectorAll('.top-content')
targets.forEach(target => {
    observer.observe(target)
})

let targets2 = document.querySelectorAll('.explore-text')
targets2.forEach(target => {
    observer.observe(target)
})

let targets3 = document.querySelectorAll('.reviews-ttile')
targets3.forEach(target => {
    observer.observe(target)
})

let targets4 = document.querySelectorAll('.blog-body')
targets4.forEach(target => {
    observer.observe(target)
})

let targets5 = document.querySelectorAll('.more-content')
targets5.forEach(target => {
    observer.observe(target)
})

let targets6 = document.querySelectorAll('.more-form')
targets6.forEach(target => {
    observer.observe(target)
})

let targets7 = document.querySelectorAll('.prioritise-item')
targets7.forEach(target => {
    observer.observe(target)
})

let targets8 = document.querySelectorAll('.reviews-item')
targets8.forEach(target => {
    observer.observe(target)
})








