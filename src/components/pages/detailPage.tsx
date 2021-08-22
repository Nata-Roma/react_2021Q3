import React, { useEffect, useRef } from 'react';
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

  const detailsRef = useRef(null);

  const article = !pageData ? (
    <div className="detail_wrapper">
      <div className="detail_message">No Data</div>
    </div>
  ) : (
    <Article post={pageData} showMore />
  );

  useEffect(() => {
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.classList.add('detail_enter');
      }
    }, 300);
  }, []);

  return (
    <div className="detail_outer" ref={detailsRef}>
      {article}
    </div>
  );
};

export default DetailPage;
