import { fireEvent } from '@testing-library/react';
import React from 'react';
import Article from '../components/article/article';
import { IPost } from '../utilities/interfaces';

describe('Article', () => {
  const post: IPost = {
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

  const checkUrl =
    '/details/123/Mock Article/Author/This is a Mock Article/http%3A%2F%2Fgoogle.com/http%3A%2F%2Fgoogle.com/This is a Mock Article/18.08.2021/fake news';

  it('navigate to single article', () => {
    const { getByRole, history, getByTestId } = renderWithRouter(() => (
      <Article showMore post={post} />
    ));
    fireEvent.click(getByRole('link'));
    expect(history.location.pathname).toEqual(checkUrl);
    const btn = getByTestId('articleMore');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
  it('renders image', () => {
    post.urlToImage = null;
    const { queryByTestId } = renderWithRouter(() => (
      <Article showMore post={post} />
    ));
    const noImage = queryByTestId('articleNoImage');
    expect(noImage).toBeInTheDocument();
    
  })
});
