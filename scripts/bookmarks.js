import FaqList from './faqList.js';

class Bookmarks {
  constructor(
    bookmarksContainer,
    bookmarks,
    faqContentContainer,
    questionsContainer,
    employerQuestion,
    employeeQuestion
  ) {
    this.bookmarksContainer = bookmarksContainer;
    this.bookmarks = bookmarks;
    this.faqContentContainer = faqContentContainer;
    this.questionsContainer = questionsContainer;
    this.employeeQuestion = employeeQuestion;
    this.employerQuestion = employerQuestion;

    this.init();
  }

  init() {
    this.bookmarksContainer.addEventListener('click', (e) => {
      this.handleBookmarkClick(e);
    });
  }

  handleBookmarkClick(e) {
    const closestBookmark = e.target.closest('.faq__bookmark-btn');
    if (!closestBookmark) return;

    const activeBookmark = closestBookmark.dataset.bookmark;

    this.bookmarks.forEach((bookmark) => {
      bookmark.classList.remove('faq__bookmark-btn--active');
    });

    closestBookmark.classList.add('faq__bookmark-btn--active');

    this.faqContentContainer.forEach((content) => {
      content.classList.remove('faq__content--active');
    });

    this.questionsContainer.innerHTML = '';
    if (activeBookmark === '1') {
      this.faqInstance = new FaqList(
        this.employerQuestion,
        this.questionsContainer
      );
    }

    if (activeBookmark === '2') {
      this.faqInstance = new FaqList(
        this.employeeQuestion,
        this.questionsContainer
      );
    }
  }
}

export default Bookmarks;
