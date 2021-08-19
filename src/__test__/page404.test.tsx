import React from 'react';
import AboutPage from '../components/pages/aboutPage';
import Page404 from '../components/pages/page404';

describe('Page 404', () => {
  
  it('renders page', () => {
    const { getByTestId } = renderWithRouter(() => <Page404 />);
    const pageContainer = getByTestId('404Page');
    expect(pageContainer).toBeInTheDocument();
  });
});
