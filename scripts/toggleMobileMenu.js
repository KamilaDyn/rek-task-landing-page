'use-strict';

class HamburgerMenu {
  constructor() {
    this.hamburgerBtn = document.querySelector('#hamburgerBtn');
    this.menu = document.querySelector('#menu');
    this.body = document.querySelector('body');
    this.hamburgerBtn.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.hamburgerBtn.classList.toggle('active');
    this.menu.classList.toggle('active');
    this.body.classList.toggle('no-scroll');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = new HamburgerMenu();
});
