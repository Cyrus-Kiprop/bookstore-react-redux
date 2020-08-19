import { createStore, applyMiddleware, compose } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/index';

function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
  );
}

export default configureStore;
