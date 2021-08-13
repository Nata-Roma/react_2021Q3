import { combineReducers } from 'redux';
import { ApiDataReducer } from './slices/apiData-slice';
import { ErrorReducer } from './slices/error-slice';
import { LoadingReducer } from './slices/loading-slice';

export const rootReducer = combineReducers({
  apiData: ApiDataReducer,
  isLoading: LoadingReducer,
  isError: ErrorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
