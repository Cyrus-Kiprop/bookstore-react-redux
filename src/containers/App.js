import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BooksList from '../components/BooksList';
import BooksForm from '../components/BooksForm';

const App = ({ books }) => (
  <div className="app m-3">
    <BooksList books={books} />
    <hr />
    <BooksForm />
  </div>
);

App.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

App.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(App);
