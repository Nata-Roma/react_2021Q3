import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../utilities/interfaces';
import Article from '../article/article';
import { IApiDataState } from '../reducers/apiData-reducer';
import { NewsContext } from '../upperElement';
import './detailPage.css';

const DetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { apiDataState } = useContext(NewsContext);
  let pageData: IPost;
  if((apiDataState as IApiDataState).state !== null) {
    pageData = (apiDataState as IApiDataState).state.articles.find(
      (article) => article.source.id === id,
    );
  }
  
  const article = !pageData ? (
    <div className="detail_wrapper">
      <div className="detail_message">No Data</div>
    </div>
  ) : (
    <Article post={pageData} showMore />
  );

  return <div>{article}</div>;
};

export default DetailPage;
