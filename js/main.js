/* show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close')

/* menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hiddden */
if(navclose){
    navclose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/* remove menu mobile */
const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navlink.forEach( n => n.addEventListener('click', linkAction))

/*==================== add blur header ==============*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*===============Show scroll up =========================*/

const  scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is hiher than 350 viewport height, add the...//
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* scroll sections active link */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('Id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
    }else{
        sectionClass.classList.remove('active-link')
     }
        
    })
}
window.addEventListener('scroll', scrollActive)

/*=======================scroll reveal======================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, // Animation repeat
})

sr.reveal('.home__data, .about__img, .about__data, .visit__data')

sr.reveal('.home__image, .footer__img', {rotate: {z: -15} })
sr.reveal('.fresh__pizza, .about__pizza, ', {rotate: {z: 15} })
sr.reveal('.home__footer', { scale: 1, origin: 'bottom'})

sr.reveal('.new__card img', {rotate: {z: -30}, distance: 0 })

sr.reveal('.pizza__card img', { interval: 100, rotate: {z: 15}, distance: 0,})

sr.reveal('.footer__container', { scale: 1 })