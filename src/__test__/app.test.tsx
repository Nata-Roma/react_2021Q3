import React from 'react';
import { HashRouter, Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import UpperElement from '../components/upperElement';
import { Provider } from 'react-redux';
import store from '../components/store/configureStore';
import { createMemoryHistory } from 'history';

jest.mock('../components/pages/home-page', () => () => <div>Home</div>);

describe('testing App component', () => {
  function tree() {
    return render(
      <Provider store={store()}>
        <HashRouter>
          <UpperElement />
        </HashRouter>
      </Provider>,
    );
  }

  it('should be in the DOM', () => {
    const { container } = tree();
    expect(container).toBeInTheDocument();
  });
  it('renders Home component on root route', () => {
    const history = createMemoryHistory();
    history.push('/');
    const { container } = render(
      <Router history={history}>
        <UpperElement />
      </Router>,
    );
    expect(container.innerHTML).toMatch('Home');
  });
});
