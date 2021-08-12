import { createStore, Store } from 'redux';
import { rootReducer } from './appState';

const store = (): Store => createStore(rootReducer, {});

export default store;
