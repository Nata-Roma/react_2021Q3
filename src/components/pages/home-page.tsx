import React, { useContext, useEffect, useState } from 'react';
import {
  IPaginationButtonState,
  IPost,
} from '../../utilities/interfaces';
import Popup from '../../utilities/popup/popup';
import ApiRequest from '../api-request/api-request';
import Article from '../article/article';
import PaginationPage from '../pagination/pagination-page';
import { NewsContext } from '../upperElement';
import './homePage.css';

const HomePage = (): JSX.Element => {
  const { apiDataState, dispatch } = useContext(NewsContext);
  const [btnDisabled, setBtnDisabled] = useState<IPaginationButtonState>({
    Left: true,
    Right: true,
  });
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (+apiDataState.pages.pages <= 1) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }

      if (+apiDataState.pages.page <= 1) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }

      if (+apiDataState.pages.page >= 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      }

      if (
        +apiDataState.pages.pages > 1 &&
        +apiDataState.pages.page < +apiDataState.pages.pages
      ) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      if (
        +apiDataState.pages.pages > 1 &&
        +apiDataState.pages.page >= +apiDataState.pages.pages
      ) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
      }
    }
  }, [isLoading]);

  const onLoadingApi = (loading: boolean) => {
    setLoading(loading);
  };

  const onErrorApi = (errorApi: boolean) => {
    setError(errorApi);
  };

  const articles = !apiDataState.state ? (
    <div>
      <Popup message={['No Content']} isDisabled={false} isShowButton={false} />
    </div>
  ) : (
    apiDataState.state.articles.map((article: IPost) => {
      const contentIndex = article.content.indexOf('[');
      let articleNew = { ...article };
      if (contentIndex) {
        const content = article.content.slice(0, contentIndex);
        articleNew = { ...articleNew, content };
      }
      return <Article {...articleNew} key={Math.random()} />;
    })
  );

  const onButtonClick = (direction: string) => {
    if (direction === 'Left') {
      if (+apiDataState.pages.pages >= +apiDataState.pages.page) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      if (+apiDataState.pages.page > 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      } else {
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }
      dispatch({
        type: 'SET_NEW_PAGE',
        btnPage: (+apiDataState.pages.page - 1).toString(),
      });
    } else if (direction === 'Right') {
      setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      if (+apiDataState.pages.pages < +apiDataState.pages.page + 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
      } else {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      dispatch({
        type: 'SET_NEW_PAGE',
        btnPage: (+apiDataState.pages.page + 1).toString(),
      });
    }
  };

  const onErrorClick = () => {
    setError(false);
    setLoading(false);
  };

  return (
    <div className="page">
      <ApiRequest onLoadingApi={onLoadingApi} onErrorApi={onErrorApi} />
      <PaginationPage
        articles={articles}
        onButtonClick={onButtonClick}
        pages={apiDataState.pages}
        btnDisabled={btnDisabled}
        isLoading={isLoading}
        isError={isError}
        onErrorClick={onErrorClick}
      />
    </div>
  );
};

export default HomePage;
