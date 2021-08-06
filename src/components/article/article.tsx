import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../utilities/interfaces';
import './article.css';
import noImage from '../../assets/no_image.png';

const Article = (props: IPost): JSX.Element => {
  const { author, title, description, url, urlToImage, content, source } =
    props;
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
  const pageAddress = `/details/${source.id}`;

  return (
    <Link className="article_wrapper" to={pageAddress} target="_blank">
      <div className="article_title">{title}</div>
      <div className="article_author">{`By: ${author}`}</div>
      <div className="article_img_desc">
        {!isFailed && image}
        {isFailed && imageDefault}
        <div className="article_text">
          <div className="article_description">{description}</div>
          <div className="article_content">{content}</div>
          {/* <a
            className="article_link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Read more...
          </a> */}
        </div>
      </div>
    </Link>
  );
};
export default Article;
