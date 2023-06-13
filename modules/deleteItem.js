const deleteItem = (id, userData) => {
  const updatedUserData = userData.filter((book) => book.id !== id);
  localStorage.setItem('formdata', JSON.stringify(updatedUserData));
  return updatedUserData;
};

export default deleteItem;