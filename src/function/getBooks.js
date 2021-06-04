/* eslint-disable guard-for-in */
const books = require('../books');

const filterNameBookShelf = (name) => {
  const index = [];
  if (books.length > 0) {
    for (const item in books) {
      const regex = new RegExp(name, 'i');
      const resultName = books[item].name.match(regex);
      const resultPublisher = books[item].publisher.match(regex);
      if (resultName !== null || resultPublisher !== null) {
        index.push(item);
      }
    }

    return index.map((i) => ({
      id: books[i].id,
      name: books[i].name,
      publisher: books[i].publisher,
    }));
  }
  return 'data kosong';
};
const mapBooks = (dataBooks) => dataBooks.map((data) => ({
  id: data.id,
  name: data.name,
  publisher: data.publisher,
}));
const filterReadingTrue = () => {
  const dataBooks = books.prototype.filter((data) => {
    if (data.reading) {
      return data;
    }
  });
  return mapBooks(dataBooks);
};
const filterReadingFalse = () => {
  const dataBooks = books.filter((data) => {
    if (data.reading === false) {
      return data;
    }
  });
  return mapBooks(dataBooks);
};
const filterFinishTrue = () => {
  const dataBooks = books.filter((data) => {
    if (data.finished) {
      return data;
    }
  });
  return mapBooks(dataBooks);
};
const filterFinishFalse = () => {
  const dataBooks = books.filter((data) => {
    if (data.finished === false) {
      return data;
    }
  });
  return mapBooks(dataBooks);
};
const getBookShelf = (req, res) => {
  const { name, reading, finished } = req.query;
  if (name) {
    return res.response({
      status: 'success',
      data: {
        books: filterNameBookShelf(name),
      },
    }).code(200);
  }
  if (reading === '1') {
    return res.response({
      status: 'success',
      data: {
        books: filterReadingTrue(),
      },
    }).code(200);
  } if (reading === '0') {
    console.log(filterReadingFalse());
    return res.response({
      status: 'success',
      data: {
        books: filterReadingFalse(),
      },
    }).code(200);
  }
  if (finished === '1') {
    return res.response({
      status: 'success',
      data: {
        books: filterFinishTrue(),
      },
    }).code(200);
  } if (finished === '0') {
    return res.response({
      status: 'success',
      data: {
        books: filterFinishFalse(),
      },
    }).code(200);
  }

  return res.response({
    status: 'success',
    data: {
      books: mapBooks(books),
    },
  });
};

module.exports = getBookShelf;
