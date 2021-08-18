import { render } from '@testing-library/react';
import React from 'react';
import DetailPage from '../components/pages/detailPage';

describe('Detail Page', () => {
  const post = {
    source: {
      id: '123',
      name: 'fake news',
    },
    author: 'Author',
    title: 'Mock Article',
    description: 'This is a Mock Article',
    url: 'http://google.com',
    urlToImage: 'http://google.com',
    publishedAt: '18.08.2021',
    content: 'This is a Mock Article',
  };
  jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockReturnValue(post),
  }));

  it('renders correctly', () => {
    const { getByTestId } = renderWithRouter(() => (
      <DetailPage />
    ));
    const detail = getByTestId('detailsPage');
  })
})