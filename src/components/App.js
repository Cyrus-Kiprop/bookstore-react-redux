import React from 'react';

import NavBar from './NavBar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';


const App = () => (
  <div className="app">
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
