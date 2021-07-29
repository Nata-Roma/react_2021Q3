import React from 'react';
import { IRadioBlock } from '../../utilities/interfaces';

const RadioBlock = (props: IRadioBlock): JSX.Element => {
  const { name, label, param, checked, changeSort } = props;

  return (
    <div className="sorting_radio_block">
      <input
        type="radio"
        className="sorting_radio"
        name={name}
        checked={checked === param}
        onChange={() => changeSort(param)}
      />
      <label htmlFor={name} className="sorting_label">
        {label}
      </label>
    </div>
  );
};

export default RadioBlock;
