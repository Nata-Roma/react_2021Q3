import React from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../utilities/interfaces';
import Article from '../article/article';
import './detailPage.css';

export interface IDetailPageParams {
  id: string;
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
  name: string;
}

const DetailPage = (): JSX.Element => {
  const {
    id,
    title,
    author,
    description,
    url,
    urlToImage,
    content,
    publishedAt,
    name,
  } = useParams<IDetailPageParams>();

  const pageData: IPost = {
    source: {
      id,
      name,
    },
    title,
    author,
    description,
    url: decodeURIComponent(url),
    urlToImage: decodeURIComponent(urlToImage),
    content,
    publishedAt,
  };

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
