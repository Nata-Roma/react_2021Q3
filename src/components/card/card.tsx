import React from 'react';
import ICardInfo from '../../utilities/interfaces';
import './card.css';

const Card = (props: ICardInfo): JSX.Element => {
  const { name, surname, gender, bDay, date, zip, country, address, gifts } =
    props;

  return (
    <div className="card_container">
      <div className="card_block card_column">
        <div className="card_full_width">
          <span className="card_category">Name:&nbsp;</span>
          {name}
        </div>
        <div className="card_full_width">
          <span className="card_category">Surname:&nbsp;</span>
          {surname}
        </div>
        <div className="card_block card_border">
          <div className="card_half_width">
            <span className="card_category">Gender:&nbsp;</span>
            {gender}
          </div>
          <div className="card_half_width">
            <span className="card_category">B-day:&nbsp;</span>
            {bDay}
          </div>
        </div>
      </div>

      <div className="card_block card_column">
        <div className="card_delivery_title">Delivery:&nbsp;</div>
        <div className="card_block card_column card_border">
          <div className="card_block">
            <div className="card_half_width">
              <span className="card_category">Date:&nbsp;</span>
              {date}
            </div>
            <div className="card_half_width">
              <span className="card_category">ZIP:&nbsp;</span>
              {zip}
            </div>
          </div>

          <div className="card_full_width">
            <span className="card_category">Country:&nbsp;</span>
            {country}
          </div>
          <div className="card_full_width">
            <span className="card_category">Address:&nbsp;</span>
            {address}
          </div>
        </div>

        <div className="card_block card_column">
          <div className="card_delivery_title">Gifts:&nbsp;</div>
          {gifts &&
            gifts.map((gift) => (
              <div className="card_full_width" key={gift}>
                {gift}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
