import React, { useEffect, useState } from 'react';

import { IApiResponse, IPost } from '../../utilities/interfaces';
import Article from '../card/article';

const apiKey = 'apiKey=9d864b6a2d944129b18b6a405c831cb0';

const initArr = [
  {
    source: { id: 'usa-today', name: 'USA Today' },
    author: 'USA TODAY, Alyssa Hertel, USA TODAY',
    title:
      'Team USA medal count: Full list of every United States medal in the Tokyo Olympics',
    description:
      'The United States continues to add medals to its overall count at the Tokyo Olympics. Here is every piece of hardware from the Games.',
    url: 'https://www.usatoday.com/story/sports/olympics/2021/07/28/team-usa-medal-count-each-u-s-athletes-medals-tokyo-olympics/5409197001/',
    urlToImage:
      'https://www.gannett-cdn.com/presto/2021/07/27/USAT/2ce9b6c1-db26-4e75-bf49-17cff0a15be9-USP_Olympics__Swimming-July_27.jpg?auto=webp&crop=4208,2367,x1,y153&format=pjpg&width=1200',
    publishedAt: '2021-07-29T01:20:57Z',
    content:
      'The Tokyo 2020 Olympics are underway and the United States is looking to add more hardware to an already extensive collection. The U.S. is the all-time leader in Olympic medals with nearly 3,000 – mo… [+5405 chars]',
  },
  {
    source: { id: null, name: 'The Atlantic' },
    author: 'The Atlantic',
    title: 'The Experiment Podcast: The Myth of the ‘Student Athlete’',
    description:
      'The NCAA was created to protect students, so why have some student athletes gone hungry while their schools have earned millions? The Atlantic staff writer and former college athlete Adam Harris explains.',
    url: 'https://www.theatlantic.com/podcasts/archive/2021/07/ncaa-supreme-court-ruling-student-athlete-exploitation/619571/?utm_source=feed',
    urlToImage: null,
    publishedAt: '2021-07-29T08:00:00Z',
    content:
      'Listen and subscribe: Apple Podcasts | Spotify | Stitcher | Google Podcasts\r\nIn June, the Supreme Court issued a narrow ruling on college sports: Student athletes will now be able to receive educatio… ',
  },
];

const ApiRequest = (): JSX.Element => {
  const [apiData, setApiData] = useState<IApiResponse>(null);
  const [isSubmit, setSubmit] = useState(false);

  const basicUrl = 'https://newsapi.org/v2/everything';

  const onClickHandler = () => {
    setSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      const getData = async () => {
        const res = await fetch(
          `${basicUrl}?page=2&q=apple&from=2021-07-29&to=2021-07-29&sortBy=popularity&${apiKey}`,
        );
        const responseData = await res.json();
        setApiData(responseData);
      };
      getData();
      setSubmit(false);
    }
  }, [isSubmit]);

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
      <p>API REQUEST</p>
      <button type="button" onClick={onClickHandler}>
        GER API REQUEST
      </button>
      {articles}
    </>
  );
};

export default ApiRequest;
