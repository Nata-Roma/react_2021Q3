import React from 'react';
import { IButton } from '../../utilities/interfaces';

const Button = (props: IButton): JSX.Element => {
  const { styleName, styleNameDisabled, content, onButtonClick, disabled } =
    props;
  return (
    <>
      <button
        type="button"
        className={disabled ? `${styleName} ${styleNameDisabled}` : styleName}
        onClick={() => onButtonClick(content)}
        disabled={disabled}
        data-testid="buttonLeft"
      >
        {content}
      </button>
    </>
  );
};

export default Button;
