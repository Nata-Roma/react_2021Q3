import { IApiResponse, IPages } from '../../utilities/interfaces';

export const actionTypes = {
  GET_API_DATA: 'GET_API_DATA',
  SET_NEW_PAGE: 'SET_NEW_PAGE',
};

export interface IApiDataState {
  state: IApiResponse;
  pages: IPages;
}

export interface IActionReducer {
  type: string;
  payload?: IApiDataState;
  btnPage?: string;
}

export const initReducerState = {
  state: null,
  pages: {
    pages: '1',
    pageSize: '1',
    page: '1',
  },
};

const ApiDataReducer = (
  state: IApiDataState = initReducerState,
  action: IActionReducer,
): IApiDataState => {
  switch (action.type) {
    case actionTypes.GET_API_DATA:
      return action.payload;
    case actionTypes.SET_NEW_PAGE: {
      const newState = state;
      newState.pages.page = action.btnPage;
      return newState;
    }
    default:
      return state;
  }
};

export default ApiDataReducer;
