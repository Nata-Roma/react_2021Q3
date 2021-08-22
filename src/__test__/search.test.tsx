import { fireEvent, render } from "@testing-library/react"
import React from "react"
import Search from "../components/search/search"

describe('Search component', () => {
  const onSearchInput = jest.fn();
  it('renders container', () => {
    let value = 'value';
    const onSearch = onSearchInput;
    // const onSearch = (inputValue: string) => value = inputValue;
    const {container} = render(<Search value={value} onSearch={onSearch} />)
    expect(container).toBeInTheDocument();
  })
  it('changes input text', () => {
    let value = 'value';
    const newValue = 'newValue';
    const onSearch = onSearchInput;
    const input = render(<Search value={value} onSearch={onSearch} />).getByTestId('searchInput');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, {target: {value: newValue}});
    expect(input).toHaveValue(value);
    expect(onSearchInput).toBeCalledTimes(1);
  })
  it('should be in document', () => {
    let value = 'value';
    const onSearch = onSearchInput;
    // const onSearch = (newValue: string) => expect(value).toBe(newValue);
    const {getByTestId} = render(<Search value={value} onSearch={onSearch} />);
    const icon = getByTestId('searchIcon');
    expect(icon).toBeInTheDocument();
  })
})