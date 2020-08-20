import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
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
    <div className="filter-container mr-auto">
      {/* <p>filter by category: </p> */}
      <select
        style={{
          marginRight: 'auto',
        }}
        className="select form-control cat-section"
        name="category"
        onChange={handleFilterChange}
      >
        <option value="All" className="option">
          CATEGORIES
        </option>
        {categories.map((category) => (
          <option
            key={category}
            value={category}
            style={{ textTransform: 'uppercase' }}
            className="option"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
