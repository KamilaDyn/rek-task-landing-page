import ListOpen from './faqList.js';
import HamburgerMenu from './toggleMobileMenu.js';
import Bookmarks from './bookmarks.js';
import LazyLoadObserver from './lazyLoad.js';
import ScrollManager from './scrollManager.js';
import JobOffers from './jobOffers.js';

import { fetchEmployers, fetchEmployees, fetchJobs } from './config.js';

document.addEventListener('DOMContentLoaded', async function () {
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

  const fetchEmployerData = await fetchEmployers();
  const fetchEmployeesData = await fetchEmployees();
  const fetchJobsData = await fetchJobs();

  const hamburgerMenu = new HamburgerMenu(
    hamburgerBtn,
    menu,
    body,
    navList,
    navLinks
  );
  const jobOffers = new JobOffers(offersList, fetchJobsData);
  const listOpen = new ListOpen(fetchEmployerData, questionsContainer);

  const bookmark = new Bookmarks(
    bookmarksContainer,
    bookmarks,
    faqContent,
    questionsContainer,
    fetchEmployerData,
    fetchEmployeesData
  );

  const lazyLoadObserver = new LazyLoadObserver('.lazy', {
    root: null,
    threshold: 0.15,
  });
  const scrollManager = new ScrollManager(scrollBtn, navItems);
  listOpen.init();
  bookmark.init();
  jobOffers.init();
  lazyLoadObserver.init();
  scrollManager.init();
  hamburgerMenu.init();
});
