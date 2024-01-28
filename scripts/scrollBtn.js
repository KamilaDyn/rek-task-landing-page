'use-strict';

class ScrollManager {
  constructor() {
    this.scrollBtn = document.querySelector('#scrollBtn');
    this.navLinks = document.querySelectorAll('.nav__item');
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
    this.navLinks.forEach((link) => {
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
        .querySelector('#faq-anchor')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const scrollManager = new ScrollManager();
});
