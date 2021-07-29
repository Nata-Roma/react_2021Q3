import React from 'react';
import { IFormDate } from '../../utilities/interfaces';

import Input from './input';

const FormDate = (props: IFormDate): JSX.Element => {
  const { formDate, onInputData, errors, formValues } = props;

  return (
    <>
      <label htmlFor={formDate.name} className="form_label">
        {formDate.label}:
      </label>
      <Input
        type={formDate.type}
        name={formDate.name}
        styleName={formDate.styleName}
        onInput={(inputData: string) => onInputData(inputData, formDate.name)}
        inputValue={formValues[formDate.name]}
        max={formDate.max}
        min={formDate.min}
        error={errors[formDate.name]}
      />
    </>
  );
};

export default FormDate;
