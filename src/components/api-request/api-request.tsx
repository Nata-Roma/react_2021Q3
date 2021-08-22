import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import configSorting, {
  configPageInput,
  initRequestParam,
} from '../../utilities/config';
import { IRequestParam } from '../../utilities/interfaces';
import Button from '../button/button';
import PagesBlock from '../pagesBlock/pages-block';
import Search from '../search/search';
import SortingBlock from '../sorting/sorting';
import { AppState } from '../store/appState';
import './api-request.css';
import requestApi from '../store/request-data-api';
import { loadingActions } from '../store/slices/loading-slice';

const ApiRequest = (): JSX.Element => {
  const apiDataState = useSelector((state: AppState) => state.apiData.pages);
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
      dispatch(loadingActions.isLoading(true));
      dispatch(requestApi(requestParam));
      setSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    setRequestParam((prevState) => ({
      ...prevState,
      page: apiDataState.page,
    }));
    if (!isDisable) setSubmit(true);
  }, [apiDataState.page]);

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
