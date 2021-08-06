import React, { createContext, useReducer } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './header/header';
import AboutPage from './pages/aboutPage';
import DetailPage from './pages/detailPage';
import HomePage from './pages/home-page';
import Page404 from './pages/page404';
import ApiDataReducer from './reducers/apiData-reducer';

export const NewsContext = createContext(null);

const initReducerState = {
  state: null,
  pages: {
    pages: '1',
    pageSize: '1',
    page: '1',
  },
};

const UpperElement = (): JSX.Element => {
  const location = useLocation();
  const [apiDataState, dispatch] = useReducer(ApiDataReducer, initReducerState);

  return (
    <NewsContext.Provider value={{ apiDataState, dispatch }}>
      <Header />
      {/* <Route render={({location}) => ( */}
      {/* <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
              // unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={Page404} />
              </Switch>
            </CSSTransition>
          </TransitionGroup> */}
      {/* )} /> */}

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/details/:id">
          <DetailPage />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </NewsContext.Provider>
  );
};

export default UpperElement;
