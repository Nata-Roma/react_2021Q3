import React from 'react';
import { IPageBlock } from '../../utilities/interfaces';
import PagesInput from './pages-input';
import './pages_block.css';

const PagesBlock = (props: IPageBlock) => {
  const { config, onInputChoice, pages } = props;
  return (
    <div className="pages_wrapper">
      {config.map((configInput) => (
        <PagesInput
          config={configInput}
          onInputChoice={onInputChoice}
          key={configInput.name}
          value={pages[configInput.name]}
        />
      ))}
    </div>
  );
};

export default PagesBlock;
