import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const categories = [
    'action',
    'biography',
    'history',
    'horror',
    'kids',
    'learning',
    'sci-fi',
  ];

  const [state, setState] = useState({
    title: '',
    category: categories[0],
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { title, category } = state;
    if (title) {
      createBook({ id: (uuid()), title, category });
      setState({
        title: '',
        category: categories[0],
      });
    }
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <div className="col">
        <input
          className="form-control"
          type="text"
          id="book-input"
          placeholder="new book"
          onChange={handleChange}
          value={state.title}
          name="title"
        />
      </div>
      <div className="col">
        <select className="form-control" onChange={handleChange} value={state.category} name="category">
          <option value="" disabled>
            category
          </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="col">
        <button className="btn btn-primary mb-2" type="submit">
          create new book
        </button>
      </div>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
