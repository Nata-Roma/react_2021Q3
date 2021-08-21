import React from "react"
import UpperElement from "../components/upperElement"

jest.mock('../components/pages/home-page', () => () => <div>Home</div>);
jest.mock('../components/pages/aboutPage', () => () => <div>About</div>);
jest.mock('../components/pages/page404', () => () => <div>404</div>);

describe('routing', () => {
  it('renders Home page at "/"', () => {
    const {container} = renderWithRouter(() => <UpperElement />, "/")
    expect(container.innerHTML).toMatch('Home');
  })
  it('renders About page at "/about"', () => {
    const {container} = renderWithRouter(() => <UpperElement />, "/about")
    expect(container.innerHTML).toMatch('About');
  })

  it('renders 404 page at "/aboutryt"', () => {
    const {container} = renderWithRouter(() => <UpperElement />, "/aboutryt")
    expect(container.innerHTML).toMatch('404');
  })
})