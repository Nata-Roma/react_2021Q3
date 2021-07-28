import React, { ReactElement, useState } from 'react';
import '../app.css';
import Card from './card/card';
import cardInfo from '../utilities/configCard';
import Search from './search/search';

const UpperElement = (): JSX.Element => {
  const [search, setSearch] = useState('');

  const onSearchResult = (searchKey: string): void => {
    setSearch(searchKey);
  };

  let cardInfoView: ReactElement | Array<ReactElement> = (
    <div className="cards_noInfo">No card info</div>
  );

  if (search.length) {
    const searchArr = cardInfo.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
    cardInfoView = searchArr.map((card) => <Card {...card} key={card.id} />);
  } else {
    cardInfoView = cardInfo.map((card) => <Card {...card} key={card.id} />);
  }

  return (
    <>
      <Search onSearch={onSearchResult} />
      <div className="cards_wrapper">{cardInfoView}</div>
    </>
  );
};

export default UpperElement;
