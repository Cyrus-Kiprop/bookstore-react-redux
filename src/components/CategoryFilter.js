import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {

  const categories = ['action', 'biography', 'history', 'horror', 'kids', 'learning', 'sci-fi'];

  return (
    <div className="filter-container form-group w-25 px-5 float-right">
      <p>filter by category: </p>
      <select
        className="select form-control"
        name="category"
        onChange={handleFilterChange}
      >
        <option value="all" className="option">all</option>
        {categories.map(category => (
          <option key={category} value={category} className="option">{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
