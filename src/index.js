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
    id: (Math.random() * (10 ** 9)),
    title: faker.lorem.words(),
    category: 'Action',
  },
  {
    id: (Math.random() * (10 ** 9)),
    title: faker.lorem.words(),
    category: 'Learning',
  },
  {
    id: (Math.random() * (10 ** 9)),
    title: faker.lorem.words(),
    category: 'Horror',
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