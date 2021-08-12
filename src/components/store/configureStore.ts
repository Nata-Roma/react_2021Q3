import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './appState';

const store = (): Store =>
  createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));

export default store;
