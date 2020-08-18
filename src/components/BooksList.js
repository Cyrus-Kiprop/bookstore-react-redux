import React from 'react';

import PropTypes from 'prop-types';

import Book from './Book';

const BooksList = ({ books }) => (
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book book={book} key={book.id} />
      ))}
    </tbody>
  </table>
);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default BooksList;
