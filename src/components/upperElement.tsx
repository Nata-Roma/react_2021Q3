import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/header';
import AboutPage from './pages/aboutPage';
import DetailPage from './pages/detailPage';
import HomePage from './pages/home-page';
import Page404 from './pages/page404';

const UpperElement = (): JSX.Element => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      {/* eslint max-len: ["error", { "ignoreStrings": true }] */}
      <Route path="/details/:id/:title/:author/:description/:url/:urlToImage/:content/:publishedAt/:name">
        <DetailPage />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </>
);
export default UpperElement;
