const books = require('../books');

const getByIdBookShelf = (req, res) => {
  const { id } = req.params;
  const book = books.filter((data) => data.id === id)[0];
  if (book !== undefined) {
    return res.response({
      status: 'success',
      data: {
        book,
      },
    }).code(200);
  }
  return res.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};
module.exports = getByIdBookShelf;
