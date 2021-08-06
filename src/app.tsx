import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpperElement from './components/upperElement';
import './app.css';
import './styles.css';

const App = (): JSX.Element => (
  <Router>
    <Route path="/">
      <UpperElement />
    </Route>
  </Router>
);

export default App;
