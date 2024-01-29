'use strict';

class LazyLoadObserver {
  constructor(selector, options = {}) {
    this.items = document.querySelectorAll(selector);
    this.revealElements = this.revealElements.bind(this);

    this.options = options;
    this.init();
  }

  revealElements(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('item--hidden');
      observer.unobserve(entry.target);
    });
  }

  init() {
    this.items.forEach((item) => {
      item.classList.add('item--hidden');
    });

    this.observer = new IntersectionObserver(this.revealElements, this.options);

    this.items.forEach((item) => {
      this.observer.observe(item);
    });
  }
}

(() => {
  'use strict';

  const lazyLoadObserver = new LazyLoadObserver('.lazy', {
    root: null,
    threshold: 0.15,
  });
})();
