import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id.slice(0, 5)}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      {' '}
      <button onClick={() => handleRemoveBook(book)} className="btn btn-danger btn-sm" type="button">remove book</button>
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
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
