import React, { useContext } from 'react';
import { IPaginationControl } from '../../utilities/interfaces';
import Button from '../button/button';
import { NewsContext } from '../upperElement';

const PaginationControl = (props: IPaginationControl): JSX.Element => {
  const { onButtonClick, btnDisabled } = props;
  const { apiDataState } = useContext(NewsContext);

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
        {`Page: ${apiDataState.pages.page} (${apiDataState.pages.pages})`}
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
