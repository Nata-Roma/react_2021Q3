import React from 'react';
import ICardInfo from '../../utilities/interfaces';
import './card.css';

const Card = (props: ICardInfo) => {
  return (
    <div className="card_container">
      <div className="card_block card_column">
        <div className="card_full_width">
          <span className="card_category">Name:&nbsp;</span>
          {props.name}
        </div>
        <div className="card_full_width">
          <span className="card_category">Surname:&nbsp;</span>
          {props.surname}
        </div>
        <div className="card_block card_border">
          <div className="card_half_width">
            <span className="card_category">Gender:&nbsp;</span>
            {props.gender}
          </div>
          <div className="card_half_width">
            <span className="card_category">B-day:&nbsp;</span>
            {props.bDay}
          </div>
        </div>
      </div>

      <div className="card_block card_column">
        <div className="card_delivery_title">Delivery:&nbsp;</div>
        <div className="card_block card_column card_border">
          <div className="card_block">
            <div className="card_half_width">
              <span className="card_category">Date:&nbsp;</span>
              {props.date}
            </div>
            <div className="card_half_width">
              <span className="card_category">ZIP:&nbsp;</span>
              {props.zip}
            </div>
          </div>

          <div className="card_full_width">
            <span className="card_category">Country:&nbsp;</span>
            {props.country}
          </div>
          <div className="card_full_width">
            <span className="card_category">Address:&nbsp;</span>
            {props.address}
          </div>
        </div>

        <div className="card_block card_column">
          <div className="card_delivery_title">Gifts:&nbsp;</div>
          {props.gifts.map((gift) => (
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
