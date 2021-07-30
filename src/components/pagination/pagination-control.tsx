import React from 'react';
import { IPages } from '../../utilities/interfaces';
import Button from '../button/button';

export interface IPaginationControl {
  pages: IPages;
  onButtonClick: (param: string) => void;
  btnDisabled: { Left: boolean; Right: boolean };
}
const PaginationControl = (props: IPaginationControl) => {
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
      <div className="pagination_page">{`Page: ${pages.page} (${pages.pages})`}</div>
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
