import { render } from '@testing-library/react';
import React from 'react';
import SortingBlock from '../components/sorting/sorting';

describe('Sorting', () => {
  const config = {
    label: 'name',
    name: 'name',
    choice: [
      {
        name: 'radio',
        label: 'radio',
        param: 'choice',
      },
    ],
  };

  const checked = 'choice';

  const changingSort = jest.fn();
  it('should render', () => {
    const { container } = render(
      <SortingBlock changeSort={changingSort} checked={checked} config={config} />,
    );
    expect(container).toBeInTheDocument();
  });
});
