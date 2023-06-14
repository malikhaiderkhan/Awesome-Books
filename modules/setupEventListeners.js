const setupEventListeners = (bookManager) => {
  const button = document.querySelector('button');
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    bookManager.addBook(bookTitle, bookAuthor);
  });

  const content = document.querySelector('.books');
  content.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const id = parseInt(e.target.dataset.id, 10);
      bookManager.deleteItem(id);
    }
  });
};

export default setupEventListeners;