'use-strict';

class FAQ {
  constructor() {
    this.expandBtns = document.querySelectorAll('.faq__btn');
    this.questions = document.querySelectorAll('.faq__question');

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.expandBtns.forEach((btn) => {
      btn.addEventListener('click', this.handleBtnClick);
    });
  }

  handleBtnClick(event) {
    const clickedBtn = event.target;
    const getQuestion = clickedBtn.closest('.faq__question');
    this.questions.forEach((question) => {
      const arrows = question.querySelector('.faq__btn .arrow');
      arrows.classList.remove('arrow--up');
      arrows.classList.remove('arrow--yellow');
      if (question !== getQuestion) {
        question.classList.remove('active');
      }
    });

    getQuestion.classList.toggle('active');
    const hasActiveClass = getQuestion.classList.contains('active');
    const arrow = getQuestion.querySelector('.arrow');
    if (hasActiveClass) {
      arrow.classList.add('arrow--yellow');
      arrow.classList.remove('arrow--white');
      arrow.classList.add('arrow--up');
    } else {
      arrow.classList.remove('arrow--yellow');
    }
    arrow.classList.add('arrow--white');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const faq = new FAQ();
});
