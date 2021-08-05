import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/header';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/home-page';
import Page404 from './pages/page404';

const UpperElement = (): JSX.Element => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </>
);

export default UpperElement;
