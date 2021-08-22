import React from 'react';
import { HashRouter } from 'react-router-dom';
import UpperElement from './components/upperElement';
import './app.css';
import './styles.css';

const App = (): JSX.Element => (
  // <Router>
  //   <Route path="/">
  //     <UpperElement />
  //   </Route>
  // </Router>
  <HashRouter>
    <UpperElement />
  </HashRouter>
);

export default App;
