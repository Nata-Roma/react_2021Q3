import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import store from './components/store/configureStore';
import UpperElement from './components/upperElement';
import './app.css';
import './styles.css';

jest.mock("./Home", () => ({ Home: () => <div>Home</div> }))

const App = (): JSX.Element => (
  <Provider store={store()}>
   {/* <Router>
     <Route path="/">
       <UpperElement />
     </Route>
   </Router> */}
  
    <HashRouter>
      <UpperElement />
    </HashRouter>
  </Provider>
);

export default App;
