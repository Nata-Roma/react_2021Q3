import { combineReducers } from 'redux';
import ApiDataReducer from './apiData-reducer';

export const rootReducer = combineReducers({ apiData: ApiDataReducer });

export type AppState = ReturnType<typeof rootReducer>;
