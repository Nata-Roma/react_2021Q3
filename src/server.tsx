import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  HashRouter,
  StaticRouter,
} from 'react-router-dom';
import App from './app';
import store from './components/store/configureStore';
import UpperElement from './components/upperElement';
import templateHtml from './templateHtml';

const app = express();

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.send('Hello from Server');
// });

app.get('*', async (req, res) => {
  /* Example with Empty content */
  let context = {};
  const content = renderToString(
    //   <Provider store={store()}>
    //   <Router>
    //     <UpperElement />
    //   </Router>
    // </Provider>,
    <Provider store={store()}>
      <StaticRouter location={req.url} context={context}>
        <UpperElement />
      </StaticRouter>
    </Provider>,
    // <App />
  );

  res.send(
    templateHtml({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
      // data: JSON.stringify(data),
    }),
  );
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
