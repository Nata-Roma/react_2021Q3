import React from 'react';
import { IButton } from '../../utilities/interfaces';

const Button = (props: IButton): JSX.Element => {
  const { styleName, styleNameDisabled, content, onClick, disabled } = props;
  return (
    <>
      <button
        type="button"
        className={disabled ? `${styleName} ${styleNameDisabled}` : styleName}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
