import React from 'react';
import { Link } from 'react-router-dom';
import './page404.css';

const Page404 = (): JSX.Element => (
  <div className="page404_wrapper">
    <div className="page404_message">Ups... Something&apos;s going wrong!</div>
    <Link to="/" className="page404_btn">
      Back to Home Page
    </Link>
  </div>
);

export default Page404;
