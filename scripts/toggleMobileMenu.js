'use strict';

class HamburgerMenu {
  constructor(hamburgerBtn, menu, body, navList, navLinks) {
    this.hamburgerBtn = hamburgerBtn;
    this.menu = menu;
    this.body = body;
    this.navList = navList;
    this.navLinks = navLinks;

    this.handleHamburgerClick = this.toggleMenu.bind(this);
    this.handleLinkClick = (e, link) => this.closeMenu(e, link);
    this.handleResize = this.handleResize.bind(this);

    this.hamburgerBtn.addEventListener('click', this.handleHamburgerClick);
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => this.handleLinkClick(e, link));
    });
    window.addEventListener('resize', this.handleResize);
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

export default HamburgerMenu;
