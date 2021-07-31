import React from 'react';
import { IPaginationControl } from '../../utilities/interfaces';
import Button from '../button/button';

const PaginationControl = (props: IPaginationControl): JSX.Element => {
  const { pages, onButtonClick, btnDisabled } = props;

  return (
    <div className="pagination_control">
      <Button
        styleName="pagination_button"
        styleNameDisabled="pagination_button_disabled"
        content="Left"
        onButtonClick={onButtonClick}
        disabled={btnDisabled.Left}
      />
      <div className="pagination_page">
        {`Page: ${pages.page} (${pages.pages})`}
      </div>
      <Button
        styleName="pagination_button"
        styleNameDisabled="pagination_button_disabled"
        content="Right"
        onButtonClick={onButtonClick}
        disabled={btnDisabled.Right}
      />
    </div>
  );
};

export default PaginationControl;
