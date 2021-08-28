import {
  actionTypes,
  IApiErrorAction,
  IInitErrorReducerState,
  initErrorReducerState,
} from '../store-utils';

export const apiErrorAction = (isError: boolean): IApiErrorAction => ({
  type: actionTypes.SET_ERROR,
  payload: isError,
});

const ErrorReducer = (
  state: IInitErrorReducerState = initErrorReducerState,
  action: IApiErrorAction,
): IInitErrorReducerState => {
  switch (action.type) {
    case actionTypes.SET_ERROR: {
      return { ...state, isError: action.payload };
    }
    default:
      return state;
  }
};

export default ErrorReducer;
