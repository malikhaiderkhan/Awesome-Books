import BookManager from './modules/bookManager.js';
import { add, list, contact } from './modules/actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookManager = new BookManager();

  const form = document.querySelector('.form-item');
  const mainContent = document.querySelector('.main-content');
  const contactContent = document.querySelector('.contact-cont');
  const addBtn = document.querySelector('.add');
  const listBtn = document.querySelector('.list');
  const contactBtn = document.querySelector('.contact');

  addBtn.addEventListener('click', () => add(bookManager, mainContent, contactContent, form));
  listBtn.addEventListener('click', () => list(form, mainContent, contactContent));
  contactBtn.addEventListener('click', () => contact(form, mainContent, contactContent));

  bookManager.setupEventListeners();
  bookManager.fetchBooks();
});