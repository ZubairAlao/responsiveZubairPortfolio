const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
//   console.log('click hamburger');

    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');    
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

    else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }  
});

// changing sections when one of the nav is clicked
const navLinks =  document.querySelectorAll('.nav-link');
const sections =  document.querySelectorAll('.sections');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
        const target = navLink.dataset.target;

        // deactivate all navs
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // activate clicked nav
        navLink.classList.add('active');

        // hide all sections in main-content
        sections.forEach(section => section.classList.remove('active'));

        // show target section
        document.getElementById(target).classList.add('active');
    });
});

// clicking on nav links to make it disappear

function hideMenuOnSmallScreen() {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
}
  
document.querySelectorAll('.header__menu a').forEach(menuLink => {
menuLink.addEventListener('click', hideMenuOnSmallScreen);
});

document.querySelector('.header__logo').addEventListener('click', hideMenuOnSmallScreen);
  