import React, { useEffect, useState } from 'react';
// import '../app.css';
import {
  IApiResponse,
  IPages,
  IPaginationButtonState,
  IPost,
} from '../../utilities/interfaces';
import Popup from '../../utilities/popup/popup';
import ApiRequest from '../api-request/api-request';
import Article from '../article/article';
import PaginationPage from '../pagination/pagination-page';

const HomePage = (): JSX.Element => {
  const [apiData, setApiData] = useState<IApiResponse>(null);
  const [pages, setPages] = useState<IPages>({
    pages: '1',
    pageSize: '1',
    page: '1',
  });
  const [btnDisabled, setBtnDisabled] = useState<IPaginationButtonState>({
    Left: true,
    Right: false,
  });
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (+pages.page >= 2) {
      setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
    }
    if (+pages.pages <= +pages.page) {
      setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
    } else {
      setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
    }
  }, [pages]);

  const onLoadingApi = (loading: boolean) => {
    setLoading(loading);
  };

  const onErrorApi = (errorApi: boolean) => {
    setError(errorApi);
  };

  const onApiResponse = (
    responseData: IApiResponse,
    pagesApi: IPages,
  ): void => {
    if (responseData.totalResults > 0) {
      setApiData(responseData);
      setError(false);
    } else {
      setApiData(null);
    }
    setPages(pagesApi);
  };

  const articles = !apiData ? (
    <div>
      <Popup message={['No Content']} isDisabled={false} isShowButton={false} />
    </div>
  ) : (
    apiData &&
    apiData.articles.map((article: IPost) => {
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
    setPages((prevState: IPages): IPages => {
      if (direction === 'Left') {
        if (+prevState.pages > +prevState.page) {
          setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
        }
        if (+prevState.page === 2) {
          setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
        }
        if (+prevState.page >= 2) {
          return { ...prevState, page: (+prevState.page - 1).toString() };
        }
      } else if (direction === 'Right') {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
        if (+prevState.pages <= +prevState.page) {
          setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
        }
        return { ...prevState, page: (+prevState.page + 1).toString() };
      } else return prevState;
      return prevState;
    });
  };

  const onErrorClick = () => {
    setError(false);
    setLoading(false);
  };

  return (
    <>
      <ApiRequest
        requestApi={onApiResponse}
        requestPage={pages.page}
        onLoadingApi={onLoadingApi}
        onErrorApi={onErrorApi}
      />
      <PaginationPage
        articles={articles}
        onButtonClick={onButtonClick}
        pages={pages}
        btnDisabled={btnDisabled}
        isLoading={isLoading}
        isError={isError}
        onErrorClick={onErrorClick}
      />
    </>
  );
};

export default HomePage;
