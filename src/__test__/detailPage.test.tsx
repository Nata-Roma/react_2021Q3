import React from 'react';
import DetailPage from '../components/pages/detailPage';

describe('Detail Page', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

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

  const incorrectPost = null;

  it('renders correctly', () => {
    const { getByTestId, getByRole, queryByText, queryByTestId } = renderWithRouter(() => (
      <DetailPage />
    ));
    // if (post) {
    //   const detailsArticle = getByRole('link');
    //   const noArticle = queryByTestId('No Data');
    //   expect(detailsArticle).toBeInTheDocument();
    //   expect(noArticle).not.toBeInTheDocument();
    // } else {
    //   const detailsArticle = getByRole('link');
    //   const noArticle = queryByText('No Data');
    //   expect(detailsArticle).not.toBeInTheDocument();
    //   expect(noArticle).toBeInTheDocument();
    // }
    const detailsArticle = getByRole('link');
    expect(detailsArticle).toBeInTheDocument()

    const pageContainer = getByTestId('detailsPage');
    expect(pageContainer.className).not.toBe('detail_outer detail_enter');
    jest.advanceTimersByTime(500);
    expect(pageContainer.className).toBe('detail_outer detail_enter');
  });

  it('renders incorrectly', () => {
    const { getByTestId, getByRole, queryByText, queryByTestId } = renderWithRouter(() => (
      <DetailPage />
    ));

    const pageContainer = getByTestId('detailsPage');
    expect(pageContainer.className).not.toBe('detail_outer detail_enter');
    jest.advanceTimersByTime(500);
    expect(pageContainer.className).toBe('detail_outer detail_enter');
  });

});
