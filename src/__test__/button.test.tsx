import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from '../components/button/button';

describe('Button', () => {
  const styleName = 'pagination_button';
  const styleNameDisabled = 'pagination_button_disabled';
  const content = 'Left';
  const buttonClick = jest.fn();
  let disabled = false;
  it('should render', () => {
    const { getByTestId } = render(
      <Button
        styleName={styleName}
        styleNameDisabled={styleNameDisabled}
        content={content}
        disabled={disabled}
        onButtonClick={buttonClick}
      />,
    );
    const button = getByTestId('buttonLeft');
    expect(button).toBeInTheDocument();
  });
  it('should click', () => {
    const { getByTestId } = render(
      <Button
        styleName={styleName}
        styleNameDisabled={styleNameDisabled}
        content={content}
        disabled={disabled}
        onButtonClick={buttonClick}
      />,
    );
    const button = getByTestId('buttonLeft');
    fireEvent.click(button)
    expect(buttonClick).toBeCalledTimes(1);
  });
  it('should not be disabled', () => {
    const { getByTestId } = render(
      <Button
        styleName={styleName}
        styleNameDisabled={styleNameDisabled}
        content={content}
        disabled={disabled}
        onButtonClick={buttonClick}
      />,
    );
    const button = getByTestId('buttonLeft');
    expect(button.className).toBe('pagination_button')
  })
  it('should be disabled', () => {
    disabled = true;
    const { getByTestId } = render(
      <Button
        styleName={styleName}
        styleNameDisabled={styleNameDisabled}
        content={content}
        disabled={disabled}
        onButtonClick={buttonClick}
      />,
    );
    const button = getByTestId('buttonLeft');
    expect(button.className).toBe('pagination_button pagination_button_disabled');
  })
});
