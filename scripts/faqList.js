class FaqList {
  constructor(questionsData, questionsContainer) {
    this.questionsData = questionsData;
    this.questionsContainer = questionsContainer;
    this.expandElements = this.expandElements.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);

    this.init();
  }
  createColumn(element) {
    const column = document.createElement('li');
    column.classList.add('faq__item', 'lazy');
    const columnContent = `
            <div  class="faq__question">
              <header class="faq__question-header"><h4>${element.question}</h4></header>
              <div class="text faq__description ">
                ${element.description}
              </div>
              <div class="faq__btn" role="button" aria-label="open" tabindex="0">
                <div class="arrow arrow--white"></div>
              </div>
            </div>
          `;
    column.innerHTML = columnContent;
    return column;
  }

  createList(data, questionType) {
    const faqContent = document.createElement('div');
    faqContent.classList.add(
      'faq__content',
      `faq__content--${questionType}`,
      'faq__content--active'
    );

    const columnContent = document.createElement('div');
    columnContent.classList.add('faq__columns');

    const columList = document.createElement('ul');
    columList.classList.add(
      'faq__list',
      'faq__column',
      `faq__column--1`,
      'lazy'
    );

    const columList2 = document.createElement('ul');
    columList2.classList.add(
      'faq__list',
      'faq__column',
      'faq__column--2',
      'lazy'
    );

    columnContent.appendChild(columList);
    columnContent.appendChild(columList2);

    faqContent.appendChild(columnContent);

    const midpoint = Math.ceil(data.length / 2);

    data.forEach((element) => {
      const listItem = this.createColumn(element);
      columList.appendChild(listItem);
    });

    this.questionsContainer.appendChild(faqContent);
    this.expandButtons = faqContent.querySelectorAll('.faq__btn');
  }

  init() {
    this.createList(this.questionsData, 1);
    this.faqContent = this.questionsContainer.querySelector('.faq__content');
    this.expandButtons = this.faqContent.querySelectorAll('.faq__btn');
    this.questions = document.querySelectorAll('.faq__question');

    this.expandButtons.forEach((btn) => {
      btn.addEventListener('click', (e) =>
        this.handleBtnClick(e, this.questions)
      );
      btn.addEventListener('keypress', (e) =>
        this.expandElements(e, this.questions)
      );
    });
  }

  handleBtnClick(e, questions) {
    const clickedBtn = e.target;
    const getQuestion = clickedBtn.closest('.faq__question');
    questions.forEach((question) => {
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

  expandElements(e, questions) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      this.handleBtnClick(e, questions);
    }
  }
}

export default FaqList;
