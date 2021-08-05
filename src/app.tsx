import React from 'react';
import './app.css';
import './styles.css';
import UpperElement from './components/upperElement';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (): JSX.Element => (
  <Router>
    <UpperElement />
  </Router>
);

export default App;
