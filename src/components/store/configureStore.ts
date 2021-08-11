import { createStore, Store } from 'redux';
import { rootReducer } from './appState';

const configureStore = (): Store => createStore(rootReducer, {});

export default configureStore;
