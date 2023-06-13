import { DateTime } from './luxon.js';

const renderBooks = (userData) => {
  const time = DateTime.now().toFormat('MMMM dd yyyy, hh:mma');
  const showTime = document.querySelector('.time');
  let placeholder = '';
  const timePlaceHolder = `<h3>${time}</h3>`;
  userData.forEach((book, index) => {
    const backgroundColor = index % 2 === 0 ? 'white' : '#d2d2d2';
    placeholder += `
        <div class="book-item" style="background-color: ${backgroundColor};">
          <div class="book">
            <h3>"${book.title}" by ${book.author}</h3>
          </div>
          <button class="remove-btn" data-id="${book.id}">Remove</button>
        </div>
      `;
  });
  const content = document.querySelector('.books');
  content.innerHTML = placeholder;
  showTime.innerHTML = timePlaceHolder;
};

export default renderBooks;