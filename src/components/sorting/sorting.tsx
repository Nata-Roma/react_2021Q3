import React from 'react';
import { ISortingProps } from '../../utilities/interfaces';
import RadioBlock from './radio-block';

const SortingBlock = (props: ISortingProps): JSX.Element => {
  const { config, changeSort, checked } = props;
  return (
    <div className="sorting_wrapper">
      <div className="sorting_title">{`${config.label}: `}</div>
      <div className="sorting_radio_wrapper">
        {config.choice.map((item) => (
          <RadioBlock
            {...item}
            changeSort={changeSort}
            key={item.label}
            checked={checked}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingBlock;
