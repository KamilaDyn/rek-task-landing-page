'use strict';

class ScrollManager {
  constructor(scrollBtn, navItems) {
    this.scrollBtn = scrollBtn;
    this.navItems = navItems;
    this.initialize();
  }

  scroll(event) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

  initialize() {
    this.setupNavLinks();
    this.setupScrollButton();
  }

  setupNavLinks() {
    this.navItems.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('nav__link')) {
          this.scroll(e);
        }
      });
    });
  }

  setupScrollButton() {
    this.scrollBtn.addEventListener('click', () => {
      document
        .querySelector('#offers-anchor')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }
}

export default ScrollManager;
