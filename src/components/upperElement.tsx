import React, { useState } from 'react';
import '../app.css';
import { IApiResponse, IPages, IPost } from '../utilities/interfaces';
import ApiRequest from './api-request/api-request';
import Article from './article/article';
import PaginationPage from './pagination/pagination-page';

const UpperElement = (): JSX.Element => {
  const [apiData, setApiData] = useState<IApiResponse>(null);
  const [pages, setPages] = useState<IPages>({
    pages: '1',
    pageSize: '1',
    page: '1',
  });
  const [requestPage, setRequestPage] = useState('1');

  const onApiResponse = (responseData: IApiResponse, pages: IPages): void => {
    setApiData(responseData);
    setPages(pages);
  };

  const articles = !apiData ? (
    <div>NO Content</div>
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

  const onPaginationClick = (page: string) => {
    setRequestPage(page);
    console.log(page);
  };

  return (
    <>
      <ApiRequest requestApi={onApiResponse} requestPage={requestPage} />
      <PaginationPage
        articles={articles}
        onPaginationClick={onPaginationClick}
        pages={pages}
      />
    </>
  );
};

export default UpperElement;
