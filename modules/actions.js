export const add = (bookManager, mainContent, contactContent, form) => {
  mainContent.classList.add('hide');
  contactContent.classList.remove('show');
  form.classList.add('show');
};

export const list = (form, mainContent, contactContent) => {
  form.classList.remove('show');
  mainContent.classList.remove('hide');
  contactContent.classList.remove('show');
};

export const contact = (form, mainContent, contactContent) => {
  form.classList.remove('show');
  mainContent.classList.add('hide');
  contactContent.classList.add('show');
};