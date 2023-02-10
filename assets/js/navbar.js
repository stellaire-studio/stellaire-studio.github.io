const nav = document.querySelector('nav')
document.addEventListener('scroll', (e) => {
    window.scrollY > 100 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')
})