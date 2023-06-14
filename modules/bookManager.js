import Book from './book.js';
import deleteItem from './deleteItem.js';
import renderBooks from './renderBooks.js';
import setupEventListeners from './setupEventListeners.js';

export default class BookManager {
  constructor() {
    this.userData = JSON.parse(localStorage.getItem('formdata')) || [];
    this.count = this.userData.length;
  }

  addBook(title, author) {
    const formData = new Book(this.count + 1, title, author);
    this.userData.push(formData);
    localStorage.setItem('formdata', JSON.stringify(this.userData));
    this.count += 1;
    renderBooks(this.userData);
  }

  deleteItem(id) {
    this.userData = deleteItem(id, this.userData);
    renderBooks(this.userData);
  }

  fetchBooks() {
    renderBooks(this.userData);
  }

  setupEventListeners() {
    setupEventListeners(this);
  }
}