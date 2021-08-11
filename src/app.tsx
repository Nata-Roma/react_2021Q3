import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './components/store/configureStore';
import UpperElement from './components/upperElement';
import './app.css';
import './styles.css';

const App = (): JSX.Element => (
  // <Router>
  //   <Route path="/">
  //     <UpperElement />
  //   </Route>
  // </Router>
  <Provider store={configureStore()}>
    <HashRouter>
      <UpperElement />
    </HashRouter>
  </Provider>
);

export default App;
