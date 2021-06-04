const getBookShelf = require('./function/getBooks');
const postBooksShelf = require('./function/postBooks');
const getByIdBookShelf = require('./function/getByIdBooks');
const editBooksShelf = require('./function/editBooks');
const deleteBooksShelf = require('./function/deleteBooks');

module.exports = {
  postBooksShelf, getBookShelf, getByIdBookShelf, editBooksShelf, deleteBooksShelf,
};
