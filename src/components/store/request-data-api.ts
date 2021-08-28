import { Dispatch } from 'redux';
import { apiKey, basicUrl } from '../../utilities/config';
import { IApiResponse, IRequestParam } from '../../utilities/interfaces';
import { apiDataActions } from './slices/apiData-slice';
import { errorActions } from './slices/error-slice';
import { loadingActions } from './slices/loading-slice';
import {
  IApiErrorAction,
  IApiLoadingAction,
  IApiRequestAction,
} from './store-utils';

const requestApi =
  (params: IRequestParam) =>
  async (
    dispatch: Dispatch<IApiRequestAction | IApiErrorAction | IApiLoadingAction>,
  ): Promise<void> => {
    let url = '';
    for (const key in params) {
      if (params[key]) {
        if (key === 'q') {
          url = `q=${encodeURIComponent(params.q)}`;
        } else if (key !== 'pages') {
          url = `${url}&${key}=${params[key]}`;
        }
      }
    }
    const res = await fetch(`${basicUrl}?${url}&${apiKey}`);
    const responseData: IApiResponse = await res.json();
    if (responseData.status === 'ok') {
      const pages = {
        pages: Math.ceil(
          responseData.totalResults / +params.pageSize,
        ).toString(),
        pageSize: params.pageSize,
        page: params.page,
      };
      const arr = responseData.articles.map((article) => {
        const arrItem = article;
        arrItem.source.id = (Math.random() * 10).toString();
        return arrItem;
      });
      const newApiResponse = responseData;
      newApiResponse.articles = arr;
      dispatch(apiDataActions.getApiData({ apiState: newApiResponse, pages }));
    } else if (responseData.status === 'error') {
      dispatch(errorActions.isError(true));
    }
    dispatch(loadingActions.isLoading(false));
  };

export default requestApi;
