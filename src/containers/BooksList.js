import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Book from '../components/Book';

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

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

BooksList.defaultProps = {
  books: [],
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BooksList);
