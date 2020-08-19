import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id.slice(0, 5)}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      {' '}
      <button className="btn btn-danger btn-sm" type="button">remove book</button>
      {' '}
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
