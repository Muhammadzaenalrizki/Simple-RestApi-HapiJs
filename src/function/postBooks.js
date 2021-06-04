const { nanoid } = require('nanoid');
const books = require('../books');

const postBooksShelf = (req, res) => {
  if (!Object.prototype.hasOwnProperty.call(req.payload, 'name')) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',

    }).code(400);

    return response;
  }
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.payload;
  if (readPage > pageCount) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',

    }).code(400);

    return response;
  }
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished: readPage === pageCount,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);
  const isSuccess = books.filter((book) => book.id === id).length > 0;
  if (isSuccess) {
    const response = res.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    }).code(201);

    return response;
  }

  const response = res.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  }).code(500);
  return response;
};

module.exports = postBooksShelf;
