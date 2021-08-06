import { IApiResponse, IPages } from '../../utilities/interfaces';

export interface IApiDataState {
  state: Array<IApiResponse>;
  pages: IPages;
}

export interface IActionReducer {
  type: string;
  payload?: IApiDataState;
  btnPage?: string;
}

const ApiDataReducer = (
  state: IApiDataState,
  action: IActionReducer,
): IApiDataState => {
  switch (action.type) {
    case 'GET_API_DATA':
      return action.payload;
    case 'SET_NEW_PAGE': {
      const newState = state;
      newState.pages.page = action.btnPage;
      return newState;
    }
    default:
      return state;
  }
};

export default ApiDataReducer;
