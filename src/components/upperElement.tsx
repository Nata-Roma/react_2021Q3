import React, { useState } from 'react';
import '../app.css';
import { IApiResponse, IPost } from '../utilities/interfaces';
import ApiRequest from './api-request/api-request';
import Article from './card/article';
import PaginationPage from './pagination/pagination-page';

const UpperElement = (): JSX.Element => {
  const [apiData, setApiData] = useState<IApiResponse>(null);

  const onApiResponse = (responseData: IApiResponse): void => {
    setApiData(responseData);
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

  return (
    <>
      <ApiRequest requestApi={onApiResponse} />
      <PaginationPage articles={articles} />
      
    </>
  );
};

export default UpperElement;
