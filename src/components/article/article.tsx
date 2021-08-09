import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../../utilities/interfaces';
import './article.css';
import noImage from '../../assets/no_image.png';

const onMoreClick = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const Article = (props: IArticle): JSX.Element => {
  const { post, showMore } = props;
  const {
    author,
    title,
    description,
    url,
    urlToImage,
    content,
    source,
    publishedAt,
  } = post;
  const [isFailed, setFailed] = useState(false);

  useEffect(() => {
    if (!urlToImage) {
      setFailed(true);
    }
  }, []);

  const image = (
    <img
      className="article_image"
      src={urlToImage}
      onError={() => setFailed(true)}
      alt=""
    />
  );
  const imageDefault = <img className="article_image" src={noImage} alt="" />;
  const pageAddress = `/details/${
    source.id
  }/${title}/${author}/${description}/${encodeURIComponent(
    url,
  )}/${encodeURIComponent(urlToImage)}/${content}/${publishedAt}/${
    source.name
  }`;

  return (
    <Link className="article_wrapper" to={pageAddress}>
      <div className="article_title">{title}</div>
      <div className="article_author">{`By: ${author}`}</div>
      <div className="article_img_desc">
        {!isFailed && image}
        {isFailed && imageDefault}
        <div className="article_text">
          <div className="article_description">{description}</div>
          <div className="article_content">{content}</div>
          {showMore && (
            <button
              className="article_link"
              onClick={() => onMoreClick(url)}
              type="button"
            >
              Read more...
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};
export default Article;
