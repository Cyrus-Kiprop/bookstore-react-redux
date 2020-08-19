import React from 'react';

const BooksForm = () => {
  const categories = [
    'action',
    'biography',
    'history',
    'horror',
    'kids',
    'learning',
    'sci-fi',
  ];
  return (
    <form className="form-row">
      <div className="col">
        <input
          className="form-control"
          type="text"
          name="book"
          id="book-input"
          placeholder="new book"
        />
      </div>
      <div className="col">
        <select className="form-control">
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

export default BooksForm;
