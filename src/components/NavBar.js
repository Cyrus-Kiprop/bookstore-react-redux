import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Bookstore CMS</a>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link px-4" href="#">BOOKS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link px-4" href="#">CATEGORIES</a>
      </li>
    </ul>
    <FontAwesomeIcon icon={faUser} className="col" />
  </div>
);

export default NavBar;
