const {
  postBooksShelf, getBookShelf, getByIdBookShelf, editBooksShelf, deleteBooksShelf,
} = require('./handler');

const routes = [

  {
    method: 'POST',
    path: '/books',
    handler: postBooksShelf,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBookShelf,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getByIdBookShelf,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksShelf,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksShelf,
  },
];
module.exports = routes;
