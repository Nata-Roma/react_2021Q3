import React from 'react';
import Button from '../../components/button/button';
import { IPopup } from '../interfaces';
import './modal-popup.css';

const Popup = (props: IPopup): JSX.Element => {
  const { message, onButtonClick, isDisabled, isShowButton } = props;
  return (
    <div className="modal_popup">
      {message.map((text) => (
        <div className="modal_message" key={text}>
          {text}
        </div>
      ))}
      {isShowButton && (
        <Button
          styleName="popup_button"
          styleNameDisabled="popup_button_disabled"
          onButtonClick={onButtonClick}
          disabled={isDisabled}
          content="OK"
        />
      )}
    </div>
  );
};

export default Popup;
