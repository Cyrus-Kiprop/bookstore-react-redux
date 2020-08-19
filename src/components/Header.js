import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const header = () => (
  <div className="header row">
    <h1 className="col-3">bookstore cms</h1>
    <ol className="col list-group">
      <li className="list-group-item">books</li>
      <li className="list-group-item">categories</li>
    </ol>
    <FontAwesomeIcon icon={faUser} className="col" />
  </div>
);

export default header;
