import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header/header';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/home-page';

const UpperElement = () => {
const page404 = (<div>
  <div>404</div>
  <Link to="/">Back to Home Page</Link>
  </div>)

  return (
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
          {page404}
        </Route>
      </Switch>
    </>
  );
};

export default UpperElement;
