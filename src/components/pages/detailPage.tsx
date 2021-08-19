import React, { useEffect, useRef, useState } from 'react';
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
  const [ pageClass, setPageClass ] = useState('detail_outer');
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
      name: decodeURIComponent(name),
    },
    title: decodeURIComponent(title),
    author: decodeURIComponent(author),
    description: decodeURIComponent(description),
    url: decodeURIComponent(url),
    urlToImage: decodeURIComponent(urlToImage),
    content: decodeURIComponent(content),
    publishedAt: decodeURIComponent(publishedAt),
  };

  useEffect(() => {
    setTimeout(() => {
      setPageClass('detail_outer detail_enter');
    }, 300);
  }, []);

  return (
    <div className={pageClass} data-testid="detailsPage">
      <Article post={pageData} showMore />
    </div>
  );
};

export default DetailPage;
