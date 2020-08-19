import React from 'react';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="app">
    <BooksList />
    <hr />
    <BooksForm />
  </div>
);

export default App;
