/**
 * Navbar variables
*/ 

const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navBar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = () => {
  navBar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('active');
};

const navElementArray = [navOpenBtn, navCloseBtn, overlay];

navElementArray.forEach(elem => {
  elem.addEventListener('click', toggleNavbar);
});

/** 
 * Header 
*/

const header = document.querySelector("[data-header]");
const toggleHeaderActive = () => {
  window.scrollY >= 10 ? header.classList.add('active') : header.classList.remove('active');
};
window.addEventListener('scroll', toggleHeaderActive);

/*
* Go top 
 */

const goTopBtn = document.querySelector('[data-go-top]');
const toggleGoTopBtn = () => {
  window.scrollY >= 100 ? goTopBtn.classList.add('active') : goTopBtn.classList.remove('active');
};
window.addEventListener('scroll', toggleGoTopBtn);
