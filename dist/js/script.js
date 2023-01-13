// Hamburger line
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Fixed
const navbar = document.getElementsByTagName('header')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (this.window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color')
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent')
    }
});