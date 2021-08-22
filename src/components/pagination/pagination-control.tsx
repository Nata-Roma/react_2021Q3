import React from 'react';
import { useSelector } from 'react-redux';
import { IPaginationControl } from '../../utilities/interfaces';
import Button from '../button/button';
import { AppState } from '../store/appState';

const PaginationControl = (props: IPaginationControl): JSX.Element => {
  const { onButtonClick, btnDisabled } = props;
  const apiDataState = useSelector((state: AppState) => state.apiData);

  return (
    <div className="pagination_control" data-testid="paginationControl">
      <Button
        styleName="pagination_button"
        styleNameDisabled="pagination_button_disabled"
        content="Left"
        onButtonClick={onButtonClick}
        disabled={btnDisabled.Left}
        data-testid="paginationLeft"
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
        data-testid="paginationRight"
      />
    </div>
  );
};

export default PaginationControl;
