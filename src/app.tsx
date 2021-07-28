import React from 'react';
import './app.css';
import './styles.css';
import Card from './components/card/card';
import cardInfo from './utilities/configCard';

const App = () => {
  return (
    <div className="cards_wrapper">
      {!cardInfo.length ? ( <div className="cards_noInfo">No card info</div>) : cardInfo.map((card => (
        <Card {...card} key={card.id} />
      )))}
    </div>
  );
};

export default App;
