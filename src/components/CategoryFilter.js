import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {

  const categories = ['action', 'biography', 'history', 'horror', 'kids', 'learning', 'sci-fi'];

  return (
    <div className="filter-container">
      <p>Filter by category: </p>
      <select
        className="select"
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
