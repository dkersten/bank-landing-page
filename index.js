const mobileMenuIcon = document.querySelector ('.mobile-menu-icon');
const mobileMenuIconClose = document.querySelector ('.mobile-menu-icon-close');
const mobileMenu = document.querySelector ('.mobile-menu');

// function to open mobile menu
mobileMenuIcon.addEventListener ('click', () => {
  mobileMenu.classList.add ('opened');
  mobileMenu.classList.remove ('closed');

  mobileMenuIcon.classList.remove ('show');
  mobileMenuIcon.classList.add ('hide');

  mobileMenuIconClose.classList.add ('show');
  mobileMenuIconClose.classList.remove ('hide');
});

// function to close mobile menu
mobileMenuIconClose.addEventListener ('click', () => {
  mobileMenu.classList.add ('closed');
  mobileMenu.classList.remove ('opened');

  mobileMenuIcon.classList.remove ('hide');
  mobileMenuIcon.classList.add ('show');

  mobileMenuIconClose.classList.add ('hide');
  mobileMenuIconClose.classList.remove ('show');
});

// close menu when link is clicked
mobileMenu.addEventListener ('click', e => {
  console.log (e.target.tagName);
  if (e.target.tagName === 'LI') {
    mobileMenu.classList.add ('closed');
    mobileMenu.classList.remove ('opened');

    mobileMenuIcon.classList.remove ('hide');
    mobileMenuIcon.classList.add ('show');

    mobileMenuIconClose.classList.add ('hide');
    mobileMenuIconClose.classList.remove ('show');
  }
});

function myFunction (width) {
  if (width.matches) {
    // If media query matches
    console.log ('mobile');
    mobileMenuIcon.classList.remove ('hide');
    mobileMenuIcon.classList.add ('show');

    mobileMenuIconClose.classList.add ('hide');
    mobileMenuIconClose.classList.remove ('show');
  } else {
    console.log ('not mobile');
    mobileMenuIcon.classList.add ('hide');
    mobileMenuIcon.classList.remove ('show');

    mobileMenuIconClose.classList.add ('hide');
    mobileMenuIconClose.classList.remove ('show');

    mobileMenu.classList.add ('closed');
    mobileMenu.classList.remove ('opened');
  }
}

var width = window.matchMedia ('(max-width: 570px)');
myFunction (width); // Call listener function at run time
width.addEventListener ('change', () => {
  this.myFunction (width);
});
