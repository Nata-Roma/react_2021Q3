import { combineReducers } from 'redux';
import ApiDataReducer from './reducers/apiData-reducer';
import ErrorReducer from './reducers/error-reducer';
import LoadingReducer from './reducers/loading-reducer';

export const rootReducer = combineReducers({
  apiData: ApiDataReducer,
  isLoading: LoadingReducer,
  isError: ErrorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
