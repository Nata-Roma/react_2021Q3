import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPaginationButtonState, IPost } from '../../utilities/interfaces';
import Popup from '../../utilities/popup/popup';
import ApiRequest from '../api-request/api-request';
import Article from '../article/article';
import PaginationPage from '../pagination/pagination-page';
import { AppState } from '../store/appState';
import './homePage.css';
import { errorActions } from '../store/slices/error-slice';
import { apiDataActions } from '../store/slices/apiData-slice';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const apiDataState = useSelector((state: AppState) => state.apiData.apiState);
  const pagesState = useSelector((state: AppState) => state.apiData.pages);
  const loadingState = useSelector((state: AppState) => state.isLoading);
  const errorState = useSelector((state: AppState) => state.isError);
  const [btnDisabled, setBtnDisabled] = useState<IPaginationButtonState>({
    Left: true,
    Right: true,
  });
  const homeRef = useRef(null);

  useEffect(() => {
    if (!loadingState.isLoading) {
      if (+pagesState.pages <= 1) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }

      if (+pagesState.page <= 1) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }

      if (+pagesState.page >= 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      }

      if (+pagesState.pages > 1 && +pagesState.page < +pagesState.pages) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      if (+pagesState.pages > 1 && +pagesState.page >= +pagesState.pages) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
      }
    }
  }, [pagesState, loadingState.isLoading]);

  const articles = !apiDataState ? (
    <div>
      <Popup message={['No Content']} isDisabled={false} isShowButton={false} />
    </div>
  ) : (
    apiDataState.articles.map((article: IPost) => {
      const contentIndex = article.content.indexOf('[');
      let articleNew = { ...article };
      if (contentIndex) {
        const content = article.content.slice(0, contentIndex);
        articleNew = { ...articleNew, content };
      }
      return (
        <Article post={articleNew} showMore={false} key={article.source.id} />
      );
    })
  );

  const onButtonClick = (direction: string) => {
    if (direction === 'Left') {
      if (+pagesState.pages >= +pagesState.page) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      if (+pagesState.page > 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      } else {
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }
      dispatch(apiDataActions.setNewPage('-1'));
    } else if (direction === 'Right') {
      setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      if (+pagesState.pages < +pagesState.page + 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
      } else {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      dispatch(apiDataActions.setNewPage('1'));
    }
  };

  const onErrorClick = () => {
    dispatch(errorActions.isError(false));
  };

  useEffect(() => {
    setTimeout(() => {
      homeRef.current.classList.add('home_enter');
    }, 300);
  }, []);

  return (
    <div className="home_wrapper" ref={homeRef}>
      <ApiRequest />
      <PaginationPage
        articles={articles}
        onButtonClick={onButtonClick}
        btnDisabled={btnDisabled}
        isLoading={loadingState.isLoading}
        isError={errorState.isError}
        onErrorClick={onErrorClick}
      />
    </div>
  );
};

export default HomePage;
