import React from 'react';
import { IPageInput } from '../../utilities/interfaces';

const PagesInput = (props: IPageInput): JSX.Element => {
  const { config, onInputChoice, value } = props;
  return (
    <div className="pages_input_wrapper" data-testid="pagesInputContainer">
      <label htmlFor="config.name" className="pages_input_label">
        {config.label}
      </label>
      <input
        type="number"
        name={config.name}
        className="pages_input"
        min="1"
        step="1"
        value={value}
        disabled={config.name === 'pages'}
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          onInputChoice(e.currentTarget.value, config.name)
        }
        data-testid="pagesInput"
      />
    </div>
  );
};

export default PagesInput;
