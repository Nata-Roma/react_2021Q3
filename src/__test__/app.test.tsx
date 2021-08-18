import React from 'react';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import UpperElement from '../components/upperElement';
import { Provider } from 'react-redux';
import store from '../components/store/configureStore';

describe('testing App component', () => {
  function tree(){
    return render(
      <Provider store={store()}>
        <HashRouter>
          <UpperElement />
        </HashRouter>
      </Provider>,
    );
  } 

  it('should be in the DOM', () => {
    const {container} = tree();
    expect(container).toBeInTheDocument();
  });
});
