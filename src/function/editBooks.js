const books = require('../books');

const editBooksShelf = (req, res) => {
  const { id } = req.params;
  if (!Object.prototype.hasOwnProperty.call(req.payload, 'name')) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);

    return response;
  }
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.payload;
  if (readPage > pageCount) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',

    }).code(400);

    return response;
  }
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((data) => data.id === id);
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
      finished: readPage === pageCount,
    };
    const response = res.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
      book: books[index],
    });
    response.code(200);
    return response;
  }
  const response = res.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
module.exports = editBooksShelf;
