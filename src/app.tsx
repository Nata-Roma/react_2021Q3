import React, { ReactElement } from 'react';
import './app.css';
import './styles.css';
import Card from './components/card/card';
import cardInfo from './utilities/configCard';
import Search from './components/search/search';

const App = () => {
  let cardInfoView:ReactElement | Array<ReactElement> = <div className="cards_noInfo">No card info</div>;

  if(cardInfo.length) {
    cardInfoView = cardInfo.map((card => (<Card {...card} key={card.id} />)))
  }
  return (
    <>
    <Search />
    <div className="cards_wrapper">
      {cardInfoView}
    </div>
    </>
    
  );
};

export default App;
