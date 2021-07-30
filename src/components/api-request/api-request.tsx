import React, { useEffect, useRef, useState } from 'react';
import configSorting, {
  configPageInput,
  initRequestParam,
} from '../../utilities/config';
import {
  IApiResponse,
  IPages,
  IRequestParam,
} from '../../utilities/interfaces';
import Button from '../button/button';
import PagesBlock from '../pagesBlock/pages-block';
import Search from '../search/search';
import SortingBlock from '../sorting/sorting';
import './api-request.css';

const apiKey = 'apiKey=9d864b6a2d944129b18b6a405c831cb0';

const ApiRequest = (props: {
  requestApi: (responseData: IApiResponse, pages: IPages) => void;
  requestPage: string;
}): JSX.Element => {
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
    console.log(`value: ${value}, name: ${name}`);
    setRequestParam((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (isSubmit) {
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
      console.log(`${basicUrl}?${url}&${apiKey}`);

      const getData = async () => {
        const res = await fetch(`${basicUrl}?${url}&${apiKey}`);
        if (res.status === 200) {
          const responseData: IApiResponse = await res.json();
          const pages = {
            pages: Math.ceil(
              responseData.totalResults / +requestParam.pageSize,
            ).toString(),
            pageSize: requestParam.pageSize,
            page: requestParam.page,
          };
          props.requestApi(responseData, pages);
          setRequestParam((prevState) => ({
            ...prevState,
            pages: Math.ceil(
              responseData.totalResults / +requestParam.pageSize,
            ).toString(),
          }));
        }
      };
      getData();
      setSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    setRequestParam((prevState) => ({ ...prevState, page: props.requestPage }));
    if (!isDisable) setSubmit(true);
  }, [props.requestPage]);

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
