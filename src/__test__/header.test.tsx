import { fireEvent } from "@testing-library/react";
import React from "react";
import Header from "../components/header/header";

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = renderWithRouter(() => <Header />)
    expect(container.innerHTML).toMatch("Home")
    expect(container.innerHTML).toMatch("About")
  })

  it("navigates to / on header title click", () => {
    const { getByText, history } = renderWithRouter(() => <Header />)
    fireEvent.click(getByText("Home"))
    expect(history.location.pathname).toEqual("/")
  })

  it("navigates to /about on header title click", () => {
    const { getByText, history } = renderWithRouter(() => <Header />)
    fireEvent.click(getByText("About"))
    expect(history.location.pathname).toEqual("/about")
  })
})