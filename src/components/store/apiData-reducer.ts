import { IApiResponse, IPages } from '../../utilities/interfaces';
import {
  ActionReducer,
  actionTypes,
  IApiDataResponse,
  IApiDataState,
  IApiLoadingAction,
  IApiRequestAction,
  initReducerState,
  IPageChangeAction,
} from './store-utils';

export const apiRequestAction = (
  newApiResponse: IApiResponse,
  pages: IPages,
): IApiRequestAction => ({
  type: actionTypes.GET_API_DATA,
  payload: { apiState: newApiResponse, pages },
});

export const pageChangeAction = (btnPage: string): IPageChangeAction => ({
  type: actionTypes.SET_NEW_PAGE,
  payload: btnPage,
});

export const apiLoadingAction = (isLoading: boolean): IApiLoadingAction => ({
  type: actionTypes.SET_LOADING,
  payload: isLoading,
});

const ApiDataReducer = (
  state: IApiDataState = initReducerState,
  action: ActionReducer,
): IApiDataState => {
  switch (action.type) {
    case actionTypes.GET_API_DATA: {
      const newState = {
        ...(action.payload as IApiDataResponse),
        isLoading: state.isLoading,
      };
      return newState;
    }
    case actionTypes.SET_NEW_PAGE: {
      const newState = { ...state, pages: { ...state.pages } };
      newState.pages.page = (
        +newState.pages.page + +(action.payload as string)
      ).toString();
      return newState;
    }
    case actionTypes.SET_LOADING: {
      const newState = { ...state, pages: { ...state.pages } };
      newState.isLoading = action.payload as boolean;
      return newState;
    }
    default:
      return state;
  }
};

export default ApiDataReducer;
