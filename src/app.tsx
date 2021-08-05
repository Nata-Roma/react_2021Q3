import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UpperElement from './components/upperElement';
import './app.css';
import './styles.css';

const App = (): JSX.Element => (
  <Router>
    <UpperElement />
  </Router>
);

export default App;
