window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const accordionBodies = document.getElementsByClassName('accordion-collapse');
const buttons = document.getElementsByClassName('accordion-button');

function removeToggler() {
    for (let i = 0; i < buttons.length; i++) {
        delete buttons[i].dataset['bsToggle'];
        accordionBodies[i].classList.add('show');
    }
}

function addToggler(extra) {
    for (let i = 0; i < accordionBodies.length; i++) {
        buttons[i].classList.add('collapsed');
        accordionBodies[i].classList.remove('show');
        if (extra) buttons[i].setAttribute('data-bs-toggle', 'collapse');
    }
}

function myFunction() {
    if (window.matchMedia("(max-width: 992px)").matches) {

        addToggler();
    }
    if (window.matchMedia("(min-width: 991px)").matches) {
        removeToggler();
    }
}
myFunction()

window.addEventListener('resize', function () {

    if (window.innerWidth < 992) {
        addToggler(true);

    } else {
        removeToggler();
    }
});


document.getElementById("year").innerHTML = new Date().getFullYear();

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 50) {
        backToTop.classList.remove('d-none');

    } else {

        backToTop.classList.add('d-none');
    }

});
// scroll body to 0px on click
backToTop.click(function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

