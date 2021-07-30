import React, { useEffect, useRef, useState } from 'react';
import configSorting, {
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
import './api-request.css';

const apiKey = 'apiKey=9d864b6a2d944129b18b6a405c831cb0';

const ApiRequest = (props: IApiRequest): JSX.Element => {
  const { requestApi, requestPage, onLoadingApi, onErrorApi } = props;

  const [isSubmit, setSubmit] = useState(false);
  const [isDisable, setDisable] = useState(true);
  const [requestParam, setRequestParam] =
    useState<IRequestParam>(initRequestParam);

  const imgRef = useRef(null);

  const basicUrl = 'https://newsapi.org/v2/everything';

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
      onLoadingApi(true);
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
          requestApi(responseData, pages);
          setRequestParam((prevState) => ({
            ...prevState,
            pages: Math.ceil(
              responseData.totalResults / +requestParam.pageSize,
            ).toString(),
          }));
        } else if (responseData.status === 'error') {
          onErrorApi(true);
        }
        onLoadingApi(false);
      };
      getData();
      setSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    setRequestParam((prevState) => ({ ...prevState, page: requestPage }));
    if (!isDisable) setSubmit(true);
  }, [requestPage]);

  return (
    <>
      <img className="article_image" ref={imgRef} alt="" />
      <p>API REQUEST</p>
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
