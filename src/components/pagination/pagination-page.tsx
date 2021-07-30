import React, { useEffect, useState } from 'react';
import { IPages, IPaginationPage } from '../../utilities/interfaces';
import PaginationControl from './pagination-control';
import './pagination.css';

const PaginationPage = (props: IPaginationPage): JSX.Element => {
  const { articles, pages, onPaginationClick } = props;
  const [pageInfo, setPageInfo] = useState<IPages>(pages);
  const [btnDisabled, setBtnDisabled] = useState({ Left: true, Right: false });

  const onButtonClick = (direction: string) => {
    setPageInfo((prevState: IPages) => {
      if (direction === 'Left') {
        if (+prevState.pages > +prevState.page) {
          setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
        }
        if (+prevState.page === 2) {
          setBtnDisabled((btnState) => ({ ...btnState, Left: true }));
        }
        if (+prevState.page >= 2) {
          onPaginationClick((+prevState.page - 1).toString());
          return { ...prevState, page: (+prevState.page - 1).toString() };
        }
      } else if (direction === 'Right') {
        setBtnDisabled((btnState) => ({ ...btnState, Left: false }));

        if (+prevState.pages <= +prevState.page) {
          console.log(
            `pages total: ${+prevState.pages}, page: ${+prevState.page}`,
          );
          setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
        }
        onPaginationClick((+prevState.page + 1).toString());
        return { ...prevState, page: (+prevState.page + 1).toString() };
      } else return prevState;
    });
  };

  useEffect(() => {
    setPageInfo(pages);
    if (+pages.page >= 2) {
      setBtnDisabled((btnState) => ({ ...btnState, Left: false }));
    }
    if (+pages.pages <= +pages.page) {
      console.log(`pages total: ${pages.pages}, page: ${pages.page}`);
      setBtnDisabled((btnState) => ({ ...btnState, Right: true }));
    } else {
      setBtnDisabled((btnState) => ({ ...btnState, Right: false }));
    }
  }, [pages]);

  return (
    <div>
      <PaginationControl
        pages={pageInfo}
        onButtonClick={onButtonClick}
        btnDisabled={btnDisabled}
      />
      {articles}
    </div>
  );
};

export default PaginationPage;
