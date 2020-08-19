import React from 'react';

import Header from '../components/Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';


const App = () => (
  <div className="app">
    <Header />
    <BooksList />
    <hr />
    <BooksForm />
  </div>
);

export default App;
