'use strict';

class FAQ {
  constructor() {
    this.expandBtns = document.querySelectorAll('.faq__btn');
    this.questions = document.querySelectorAll('.faq__question');

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.expandElements = this.expandElements.bind(this);
    this.expandBtns.forEach((btn) => {
      btn.addEventListener('click', this.handleBtnClick);
      btn.addEventListener('keypress', this.expandElements);
    });
  }

  handleBtnClick(event) {
    const clickedBtn = event.target;
    const getQuestion = clickedBtn.closest('.faq__question');
    this.questions.forEach((question) => {
      const arrows = question.querySelector('.faq__btn .arrow');
      const button = question.querySelector('.faq__btn');
      arrows.classList.remove('arrow--up');
      arrows.classList.remove('arrow--yellow');
      button.setAttribute('aria-label', 'open');

      if (question !== getQuestion) {
        question.classList.remove('active');
        button.setAttribute('aria-label', 'open');
        arrows.classList.add('arrow--white');
      }
    });

    getQuestion.classList.toggle('active');
    const hasActiveClass = getQuestion.classList.contains('active');
    const button = getQuestion.querySelector('.faq__btn');
    const arrow = getQuestion.querySelector('.arrow');
    if (hasActiveClass) {
      arrow.classList.add('arrow--yellow');
      arrow.classList.remove('arrow--white');
      arrow.classList.add('arrow--up');
      button.setAttribute('aria-label', 'close');
    } else {
      arrow.classList.remove('arrow--yellow');
      arrow.classList.add('arrow--white');
      button.setAttribute('aria-label', 'open');
    }
  }

  expandElements(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      this.handleBtnClick(e);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const faq = new FAQ();
});
