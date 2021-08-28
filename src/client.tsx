import React from 'react';
import ReactDom, { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import App from './app';
import store from './components/store/configureStore';
import UpperElement from './components/upperElement';
import './index.css';

const parentNode = document.getElementById('root');
parentNode.classList.add('root');

ReactDom.render(App(), parentNode);

function run() {
  hydrate(
    <Provider store={store()}>
      <HashRouter>
        <UpperElement />
      </HashRouter>
    </Provider>,
    // (
    //   <BrowserRouter>
    //     { renderApp() }
    //   </BrowserRouter>
    // ),

    // (
    //   <Provider store={store}>
    //     <BrowserRouter>
    //       { renderApp() }
    //     </BrowserRouter>
    //   </Provider>
    // ),

    document.getElementById('root'),
  );
}

run();
