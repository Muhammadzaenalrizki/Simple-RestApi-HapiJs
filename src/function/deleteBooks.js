const books = require('../books');

const deleteBooksShelf = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((data) => data.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    return res.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
  }
  return res.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }).code(404);
};

module.exports = deleteBooksShelf;
