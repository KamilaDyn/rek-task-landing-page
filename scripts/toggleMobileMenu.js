'use-strict';

class HamburgerMenu {
  constructor() {
    this.hamburgerBtn = document.querySelector('#hamburgerBtn');
    this.menu = document.querySelector('#menu');
    this.body = document.querySelector('body');
    this.navList = document.querySelector('#navList');
    this.hamburgerBtn.addEventListener('click', this.toggleMenu.bind(this));
    this.navLinks = document.querySelectorAll('.nav__link');
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => this.closeMenu(e, link));
    });

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  toggleMenu() {
    this.hamburgerBtn.classList.toggle('active');
    this.menu.classList.toggle('active');
    this.body.classList.toggle('no-scroll');
  }
  closeMenu(e, link) {
    e.preventDefault();
    const closestLink = link.closest('#navList');
    const siblings = closestLink.querySelectorAll('.nav__link');
    siblings.forEach((el) => {
      if (el !== closestLink) el.classList.remove('nav__link--active');
    });

    link.classList.add('nav__link--active');
    this.toggleMenu();
    this.body.classList.remove('no-scroll');
  }
  handleResize() {
    const bodyWidth = this.body.getBoundingClientRect().width;
    if (bodyWidth > 992) {
      this.hamburgerBtn.classList.remove('active');
      this.menu.classList.remove('active');
      this.body.classList.remove('no-scroll');
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = new HamburgerMenu();
});
