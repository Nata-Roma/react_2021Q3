import { fireEvent, render } from "@testing-library/react"
import React from "react"
import RadioBlock from "../components/sorting/radio-block"

describe('RadioBlock', () => {
  const name='radio';
  const label='radio'; 
  const param = 'notChoice';
  let checked='choice'
  let changingSort = jest.fn();

  it('should render', () => {
    const {container} = render(<RadioBlock name={name} label={label} param={param} checked={checked} changeSort={changingSort} />)
    expect(container).toBeInTheDocument();
  })
  it('should render label', () => {
    const {getByTestId} = render(<RadioBlock name={name} label={label} param={param} checked={checked} changeSort={changingSort} />)
    const radioLabel = getByTestId('radioLabel');
    expect(radioLabel.innerHTML).toBe(label);
  })
  it('should render input', () => {
    // const changeSort = (params:string) => expect(param).toMatch(params);
    // const changeSort = changingSort;
    const {getByTestId} = render(<RadioBlock name={name} label={label} param={param} checked={checked} changeSort={changingSort} />)
    const radioInput = getByTestId('radioInput');
    expect(radioInput).toBeInTheDocument();
    
    fireEvent.click(radioInput);
    // expect(radioInput).not.toBeChecked();
    expect(changingSort).toBeCalledTimes(1);
  })
})