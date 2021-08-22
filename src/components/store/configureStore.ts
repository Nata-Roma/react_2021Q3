import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { rootReducer } from './appState';

const store = (): Store =>
  configureStore({
    reducer: rootReducer,
  });

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;
