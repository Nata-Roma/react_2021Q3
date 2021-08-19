import React from 'react';
import AboutPage from '../components/pages/aboutPage';

describe('About Page', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it('renders page', () => {
    const { getByTestId } = renderWithRouter(() => <AboutPage />);
    const pageContainer = getByTestId('aboutPage');
    expect(pageContainer.className).not.toBe('about_wrapper about_enter');
    jest.advanceTimersByTime(500);
    expect(pageContainer.className).toBe('about_wrapper about_enter');
  });
});
