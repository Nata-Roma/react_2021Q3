import { IApiResponse, IPages } from '../../utilities/interfaces';

export interface IApiDataState {
  apiState: IApiResponse;
  pages: IPages;
  isLoading: boolean;
}

export interface IAction {
  type: string;
  payload: IApiDataState;
  btnPage?: string;
}

export interface IApiDataResponse {
  apiState: IApiResponse;
  pages: IPages;
}

export interface IApiRequestAction {
  type: string;
  payload: IApiDataResponse;
}

export interface IPageChangeAction {
  type: string;
  payload: string;
}

export interface IApiLoadingAction {
  type: string;
  payload: boolean;
}

export const actionTypes = {
  GET_API_DATA: 'GET_API_DATA',
  SET_NEW_PAGE: 'SET_NEW_PAGE',
  SET_LOADING: 'SET_LOADING',
};

export const initReducerState = {
  apiState: null,
  pages: {
    pages: '1',
    pageSize: '1',
    page: '1',
  },
  isLoading: false,
};

export type ActionReducer =
  | IApiRequestAction
  | IPageChangeAction
  | IApiLoadingAction;
