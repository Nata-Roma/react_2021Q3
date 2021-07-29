import React from "react";




const PaginationPage = (props: {articles: JSX.Element | JSX.Element[]}): JSX.Element => {
  return (
    <div>
      {props.articles}
    </div>
  )
}

export default PaginationPage;