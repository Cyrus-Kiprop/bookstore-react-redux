import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook, filter}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <>
      {books
        .filter((book) => filter === 'All' || book.category === filter)
        .map((book) => (
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
        ))}
    </>
  );
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

BooksList.defaultProps = {
  filter: 'All',
};
const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
