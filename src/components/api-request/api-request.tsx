import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import configSorting, {
  apiKey,
  basicUrl,
  configPageInput,
  initRequestParam,
} from '../../utilities/config';
import {
  IApiRequest,
  IApiResponse,
  IRequestParam,
} from '../../utilities/interfaces';
import Button from '../button/button';
import PagesBlock from '../pagesBlock/pages-block';
import Search from '../search/search';
import SortingBlock from '../sorting/sorting';
import { apiLoadingAction, apiRequestAction } from '../store/apiData-reducer';
// import { NewsContext } from '../upperElement';
import { AppState } from '../store/appState';
import './api-request.css';

const ApiRequest = (props: IApiRequest): JSX.Element => {
  const { onErrorApi } = props;
  // const { apiDataState, dispatch } = useContext(NewsContext);
  const apiDataState = useSelector((state: AppState) => state.apiData);
  const dispatch = useDispatch();

  const [isSubmit, setSubmit] = useState(false);
  const [isDisable, setDisable] = useState(true);
  const [requestParam, setRequestParam] =
    useState<IRequestParam>(initRequestParam);

  const onSearchHandler = (search: string): void => {
    setRequestParam((prevState: IRequestParam) => ({
      ...prevState,
      q: search,
    }));
    if (search) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const onSortingHandler = (sort: string) => {
    setRequestParam((prevState: IRequestParam) => ({
      ...prevState,
      sortBy: sort,
    }));
  };

  const onClickHandler = () => {
    setSubmit(true);
  };

  const onInputChoice = (value: string, name: string) => {
    setRequestParam((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (isSubmit) {
      dispatch(apiLoadingAction(true));
      // onLoadingApi(true);
      let url = '';
      for (const key in requestParam) {
        if (requestParam[key]) {
          if (key === 'q') {
            url = `q=${encodeURIComponent(requestParam.q)}`;
          } else if (key !== 'pages') {
            url = `${url}&${key}=${requestParam[key]}`;
          }
        }
      }
      const getData = async () => {
        const res = await fetch(`${basicUrl}?${url}&${apiKey}`);
        const responseData: IApiResponse = await res.json();
        if (responseData.status === 'ok') {
          const pages = {
            pages: Math.ceil(
              responseData.totalResults / +requestParam.pageSize,
            ).toString(),
            pageSize: requestParam.pageSize,
            page: requestParam.page,
          };
          const arr = responseData.articles.map((article) => {
            const arrItem = article;
            arrItem.source.id = (Math.random() * 10).toString();
            return arrItem;
          });
          const newApiResponse = responseData;
          newApiResponse.articles = arr;
          dispatch(apiRequestAction(newApiResponse, pages));
          setRequestParam((prevState) => ({
            ...prevState,
            pages: Math.ceil(
              responseData.totalResults / +requestParam.pageSize,
            ).toString(),
          }));
        } else if (responseData.status === 'error') {
          onErrorApi(true);
        }
        dispatch(apiLoadingAction(false));
      };
      getData();
      setSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    setRequestParam((prevState) => ({
      ...prevState,
      page: apiDataState.pages.page,
    }));
    if (!isDisable) setSubmit(true);
  }, [apiDataState.pages.page]);

  return (
    <>
      <div className="api_title">newsapi.org - Search worldwide news</div>
      <div className="search_block">
        <Search
          onSearch={onSearchHandler}
          value={requestParam ? requestParam.q : ''}
        />
        <Button
          styleName="form_button"
          styleNameDisabled="form_button_disabled"
          onButtonClick={onClickHandler}
          disabled={isDisable}
          content="Send"
        />
      </div>
      <div className="api_controls">
        <SortingBlock
          config={configSorting}
          changeSort={onSortingHandler}
          checked={requestParam.sortBy}
        />
        <PagesBlock
          config={configPageInput}
          onInputChoice={onInputChoice}
          pages={requestParam}
        />
      </div>
    </>
  );
};

export default ApiRequest;
