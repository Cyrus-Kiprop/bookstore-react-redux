import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './configureStore';
import initialState from './rawData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
