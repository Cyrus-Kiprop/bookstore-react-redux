import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

var faker = require('faker');

const booksArray = [
  {
    id: (Math.floor(Math.random() * 99) + 1),
    title: faker.lorem.words(),
    category: 'action',
  },
  {
    id: (Math.floor(Math.random() * 99) + 1),
    title: faker.lorem.words(),
    category: 'biography',
  },
  {
    id: (Math.floor(Math.random() * 99) + 1),
    title: faker.lorem.words(),
    category: 'history',
  },
];

const initState = {
  books: booksArray,
};

const store = createStore(rootReducer, initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);