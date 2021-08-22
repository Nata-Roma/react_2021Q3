import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import PagesInput from '../components/pagesBlock/pages-input';

describe('Page inputs', () => {
  const value = 1;
  const inputChoice = jest.fn();
  const config = {
    label: 'label',
    name: 'name',
  };
  it('should render', () => {
    const { getByTestId } = render(
      <PagesInput onInputChoice={inputChoice} config={config} value={value} />,
    );
    const pagesInputContainer = getByTestId('pagesInputContainer');
    expect(pagesInputContainer).toBeInTheDocument();
  });
  it('should render input', () => {
    const { getByTestId } = render(
      <PagesInput onInputChoice={inputChoice} config={config} value={value} />,
    );
    const pagesInput = getByTestId('pagesInput');
    expect(pagesInput).toBeInTheDocument();
  });
  it('should change input value', () => {
    let inputValue = 2;
    const { getByTestId } = render(
      <PagesInput onInputChoice={inputChoice} config={config} value={value} />,
    );
    const pagesInput = getByTestId('pagesInput');
    fireEvent.input(pagesInput, {target: {value: inputValue}});
    expect(inputChoice).toBeCalledTimes(1);
  });
});
