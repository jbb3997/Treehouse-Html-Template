

const toggleButton = document.querySelector('#main-nav__toggle');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const closeButton = document.querySelector('.close-button');

toggleButton.addEventListener('click', function() {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});

closeButton.addEventListener('click', function() {
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
});