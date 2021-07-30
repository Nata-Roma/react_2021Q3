import React from 'react';
import { IPaginationPage } from '../../utilities/interfaces';
import Loader from '../../utilities/loader/loader';
import Popup from '../../utilities/popup/popup';
import PaginationControl from './pagination-control';
import './pagination.css';

const PaginationPage = (props: IPaginationPage): JSX.Element => {
  const {
    articles,
    pages,
    onButtonClick,
    btnDisabled,
    isLoading,
    isError,
    onErrorClick,
  } = props;

  return (
    <div className="pagination_wrapper">
      <PaginationControl
        pages={pages}
        onButtonClick={onButtonClick}
        btnDisabled={btnDisabled}
      />
      {isLoading && <Loader />}
      {isError && (
        <Popup
          message={['Unfortunatelly, we have an error!', 'Please try again']}
          isDisabled={false}
          onButtonClick={onErrorClick}
          isShowButton
        />
      )}
      {!isLoading && articles}
    </div>
  );
};

export default PaginationPage;
