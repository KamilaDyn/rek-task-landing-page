import ListOpen from './faqList.js';
import HamburgerMenu from './toggleMobileMenu.js';
import Bookmarks from './bookmarks.js';
import LazyLoadObserver from './lazyLoad.js';
import ScrollManager from './scrollManager.js';
import JobOffers from './jobOffers.js';

import jobs from './data/jobs.js';
import employeeQuestion from './data/employeesQuestion.js';
import employerQuestion from './data/employerQuestion.js';

document.addEventListener('DOMContentLoaded', function () {
  const questionsContainer = document.querySelector('#faqQuestions'),
    hamburgerBtn = document.querySelector('#hamburgerBtn'),
    menu = document.querySelector('#menu'),
    navList = document.querySelector('#navList'),
    scrollBtn = document.querySelector('#scrollBtn'),
    body = document.querySelector('body'),
    offersList = document.querySelector('.offers__list'),
    bookmarksContainer = document.querySelector('.faq__bookmarks'),
    faqContent = document.querySelectorAll('.faq__content'),
    navLinks = document.querySelectorAll('.nav__link'),
    navItems = document.querySelectorAll('.nav__item'),
    bookmarks = document.querySelectorAll('.faq__bookmark-btn');

  const hamburgerMenu = new HamburgerMenu(
    hamburgerBtn,
    menu,
    body,
    navList,
    navLinks
  );
  const jobOffers = new JobOffers(offersList, jobs);
  const listOpen = new ListOpen(employerQuestion, questionsContainer);
  const bookmark = new Bookmarks(
    bookmarksContainer,
    bookmarks,
    faqContent,
    questionsContainer,
    employerQuestion,
    employeeQuestion
  );
  const lazyLoadObserver = new LazyLoadObserver('.lazy', {
    root: null,
    threshold: 0.15,
  });
  const scrollManager = new ScrollManager(scrollBtn, navItems);
});
