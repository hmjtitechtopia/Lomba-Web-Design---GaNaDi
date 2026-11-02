/=============== SHOW MENU ===============/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show Menu 
if (navToggle && navMenu) {
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

// Hide Menu 
if (navClose && navMenu) {
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   if (navMenu) navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== PAGE TRANSITION ===============*/
const pageTransition = document.querySelector('.page-transition')

document.querySelectorAll('.page-transition-link').forEach(link => {
   link.addEventListener('click', event => {
      const destination = link.getAttribute('href')

      if (!destination || destination.startsWith('#') || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !pageTransition) {
         return
      }

      event.preventDefault()
      pageTransition.classList.add('is-active')
      window.setTimeout(() => {
         window.location.href = destination
      }, 450)
   })
})

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    if (!header) return

    window.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== GSAP ANIMATION ===============*/
if (window.gsap) {
  gsap.defaults({ opacity: 0, ease: 'power4.out', duration: 1.4 })

  const tl = gsap.timeline()
  const animateFrom = (selector, vars, position) => {
    if (document.querySelector(selector)) tl.from(selector, vars, position)
  }

  animateFrom('.home__logo', {scale: 5}, '.5')
  animateFrom('.home__name', {y: 100}, '.75')
  animateFrom('.home__swiper', {y: 300, rotateZ: -25, rotateX: 40}, '1.25')
  animateFrom('.home__title span', {y: 100, display: 'block'}, '1.5')
  animateFrom('.home__data > *', {y: 20, stagger: .15}, '1.75')
  animateFrom('.home__previews img', {x: 100}, '1.75')
  animateFrom('.home__sizes', {x: 100}, '2')
  animateFrom('.home__buttons, .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet', {y: 100, stagger: .15}, '2.25')

  if (document.querySelector('.home__sneaker img')) {
    gsap.to('.home__sneaker img', {y: '+=50', rotateZ: 3, duration: 2, repeat: -1, opacity: 1, yoyo: true, ease: 'sine.inOut'})
  }
}

/*=============== BUTTON MOUSE MOVE ===============*/
const btn = document.querySelector('.home__button-bag')

if (btn && window.gsap) {
 btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect()

    gsap.to(btn, {
        x: (e.clientX - rect.left - rect.width / 2) * .3,
        y: (e.clientY - rect.top - rect.height / 2) * .3,
        duration: .3,
        opacity: 1,
    })
  })

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, opacity: 1 })
  })
}