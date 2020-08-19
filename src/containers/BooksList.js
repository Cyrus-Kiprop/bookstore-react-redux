import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, filterCategory,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = event => {
    event.preventDefault();
    const { target } = event;
    const { value } = target;
    filterCategory(value);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">category</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {books.filter(book => (filter === 'All' || book.category === filter)).map(book => (
            <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
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
  filterCategory: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  filter: 'All',
};
const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterCategory: option => dispatch(changeFilter(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
