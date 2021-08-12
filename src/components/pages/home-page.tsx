import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPaginationButtonState, IPost } from '../../utilities/interfaces';
import Popup from '../../utilities/popup/popup';
import ApiRequest from '../api-request/api-request';
import Article from '../article/article';
import PaginationPage from '../pagination/pagination-page';
import { pageChangeAction } from '../store/apiData-reducer';
import { AppState } from '../store/appState';
// import { NewsContext } from '../upperElement';
import './homePage.css';

const HomePage = (): JSX.Element => {
  // const { apiDataState, dispatch } = useContext(NewsContext);
  const dispatch = useDispatch();
  const apiDataState = useSelector((state: AppState) => state.apiData);
  const [btnDisabled, setBtnDisabled] = useState<IPaginationButtonState>({
    Left: true,
    Right: true,
  });
  const [isError, setError] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    if (!apiDataState.isLoading) {
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
  }, [apiDataState.pages]);

  const onErrorApi = (errorApi: boolean) => {
    setError(errorApi);
  };

  const articles = !apiDataState.apiState ? (
    <div>
      <Popup message={['No Content']} isDisabled={false} isShowButton={false} />
    </div>
  ) : (
    apiDataState.apiState.articles.map((article: IPost) => {
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
      if (+apiDataState.pages.pages >= +apiDataState.pages.page) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      if (+apiDataState.pages.page > 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      } else {
        setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
      }
      dispatch(pageChangeAction('-1'));
    } else if (direction === 'Right') {
      setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
      if (+apiDataState.pages.pages < +apiDataState.pages.page + 2) {
        setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
      } else {
        setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
      }
      dispatch(pageChangeAction('1'));
    }
  };

  const onErrorClick = () => {
    setError(false);
  };

  useEffect(() => {
    setTimeout(() => {
      homeRef.current.classList.add('home_enter');
    }, 300);
  }, []);

  return (
    <div className="home_wrapper" ref={homeRef}>
      <ApiRequest onErrorApi={onErrorApi} />
      <PaginationPage
        articles={articles}
        onButtonClick={onButtonClick}
        btnDisabled={btnDisabled}
        isLoading={apiDataState.isLoading}
        isError={isError}
        onErrorClick={onErrorClick}
      />
    </div>
  );
};

export default HomePage;
