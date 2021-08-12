import {
  actionTypes,
  IApiLoadingAction,
  IInitLoadingReducerState,
  initLoadingReducerState,
} from '../store-utils';

export const apiLoadingAction = (isLoading: boolean): IApiLoadingAction => ({
  type: actionTypes.SET_LOADING,
  payload: isLoading,
});

const LoadingReducer = (
  state: IInitLoadingReducerState = initLoadingReducerState,
  action: IApiLoadingAction,
): IInitLoadingReducerState => {
  switch (action.type) {
    case actionTypes.SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};

export default LoadingReducer;
