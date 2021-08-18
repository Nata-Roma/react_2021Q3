import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

global.renderWithRouter = (renderComponent, route) => {
  const history = createMemoryHistory();
  if (route) {
    history.push(route);
  }
  return {
    ...render(<Router history={history}>{renderComponent()}</Router>),
    history,
  };
};
