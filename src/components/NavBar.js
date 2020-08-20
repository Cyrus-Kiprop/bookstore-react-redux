import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';

const NavBar = ({ filterCategory }) => {
  const handleFilterChange = event => {
    event.preventDefault();
    const { target } = event;
    const { value } = target;
    filterCategory(value);
  };
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light w-100 ">
      <a className="navbar-brand" href="https://">
        Bookstore CMS
      </a>
      <a className="nav-link px-4" style={{ color: '#121212' }} href="https://">
        BOOKS
      </a>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <FontAwesomeIcon
        icon={faUser}
        style={{ color: '#0290ff' }}
        size="lg"
        className="float-right"
      />
    </div>
  );
};

NavBar.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filterCategory: option => dispatch(changeFilter(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
