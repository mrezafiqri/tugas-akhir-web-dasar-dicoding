// Scroll Shadow Navbar
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos < currentScrollPos) {
        document.querySelector('.navbar-container').style.boxShadow = '0px 2px 5px 0px rgba(0,0,0,0.3)';
    } else if (prevScrollPos == 0) {
        document.querySelector('.navbar-container').style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0.3)';
    }
})


// Hamburger Menu Toggle
const navbarNav = document.querySelector('.nav-list')
const hamburger = document.querySelector('#hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navbarNav.classList.toggle('active')
})

// Kalo di klik di luar, Hamburger Close
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
        hamburger.classList.remove('hamburger-active');
    }
})