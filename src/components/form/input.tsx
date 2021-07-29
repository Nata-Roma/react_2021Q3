import React from 'react';
import { IInput } from '../../utilities/interfaces';

const Input = (props: IInput): JSX.Element => {
  const {
    type,
    name,
    styleName,
    onInput,
    id,
    error,
    max,
    min,
    checked,
    inputValue,
  } = props;

  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (type === 'checkbox') {
      onInput(e.currentTarget.checked);
    } else if (name === 'gender') {
      onInput(id);
    } else onInput(e.currentTarget.value);
  };

  return (
    <>
      <input
        type={type}
        name={name}
        className={styleName}
        value={inputValue}
        id={id}
        checked={checked}
        onInput={(e) => onInputHandler(e)}
        onChange={(e) => onInputHandler(e)}
        onBlur={(e) => onInputHandler(e)}
        max={max}
        min={min}
      />
      <div className="form_validation">{error}</div>
    </>
  );
};

export default Input;
