'use strict';

class LazyLoadObserver {
  constructor(selector, options = {}) {
    this.items = document.querySelectorAll(selector);
    this.options = options;
  }
  init() {
    this.bindEvents();
    this.setupEvents();
  }
  bindEvents() {
    this.revealElements = this.revealElements.bind(this);
  }
  setupEvents() {
    this.items.forEach((item) => {
      item.classList.add('item--hidden');
    });

    this.observer = new IntersectionObserver(this.revealElements, this.options);

    this.items.forEach((item) => {
      this.observer.observe(item);
    });
  }
  revealElements(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('item--hidden');
      observer.unobserve(entry.target);
    });
  }
}

export default LazyLoadObserver;
