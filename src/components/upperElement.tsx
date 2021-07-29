import React, { ReactElement, useEffect, useState } from 'react';
import '../app.css';
import Card from './card/card';
import Search from './search/search';
import Form from './form/form';
import ICardInfo from '../utilities/interfaces';
import Popup from './popup/popup';

const UpperElement = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [cardData, setCardData] = useState<Array<ICardInfo>>([]);
  const [isPopup, setPopup] = useState(false);

  const onFormSubmit = (formData: ICardInfo): void => {
    setCardData((prevState) => [formData, ...prevState]);
  };

  const onSearchResult = (searchKey: string): void => {
    setSearch(searchKey);
  };

  let cardInfoView: ReactElement | Array<ReactElement> = (
    <div className="cards_noInfo">No card info</div>
  );

  if (search.length && cardData) {
    const searchArr = cardData.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase()),
    );
    cardInfoView = searchArr.map((card) => <Card {...card} key={card.id} />);
  } else {
    cardInfoView =
      cardData && cardData.map((card) => <Card {...card} key={card.id} />);
  }

  useEffect(() => {
    if (cardData.length) {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 1500);
    }
  }, [cardData]);

  return (
    <>
      {isPopup && <Popup />}
      <Form formOnSubmit={onFormSubmit} />
      <Search onSearch={onSearchResult} />
      <div className="cards_wrapper">{cardInfoView}</div>
    </>
  );
};

export default UpperElement;
