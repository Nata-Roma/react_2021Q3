import React from 'react';
import { IRadioBlock } from '../../utilities/interfaces';

const RadioBlock = (props: IRadioBlock): JSX.Element => {
  const { name, label, param, checked, changeSort } = props;
  
  return (
    <div className="sorting_radio_block" data-testid="radioBlock">
      <input
        type="radio"
        className="sorting_radio"
        name={name}
        checked={checked === param}
        onChange={() => changeSort(param)}
        data-testid="radioInput"
      />
      <label htmlFor={name} className="sorting_label" data-testid="radioLabel">
        {label}
      </label>
    </div>
  );
};

export default RadioBlock;
