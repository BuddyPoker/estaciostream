/**
 * Navbar variables
*/ 

const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navBar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navElementArray = [navOpenBtn, navCloseBtn, overlay];

for(let i = 0; i < navElementArray.length; i++) {
  navElementArray[i].addEventListener('click', function() {
    navBar.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.classList.toggle('active')
  })
}

/** 
 * Header 
*/

const header = document.querySelector('[data-header]');
  window.addEventListener('scroll', function() {
    window.scrollY >= 10 ? header.classList.add('scroll') : header.classList.remove('scroll');
  })

/*
* Go top 
 */

const goTopBtn = document.querySelector('[data-go-top]');
  window.addEventListener('scroll', function() {
    window.scrollY >= 100 ? goTopBtn.classList.add('active') : goTopBtn.classList.remove('active');
  })