import React from 'react';
import { IErrors, IFormData, IInputData } from '../../utilities/interfaces';
import Input from './input';

const FormNameBlock = (props: {
  formName: Array<IInputData>;
  onInputData: (inputData: string, inputName: string) => void;
  formValues: IFormData;
  errors: IErrors;
}): JSX.Element => {
  const { formName, onInputData, errors, formValues } = props;
  return (
    <>
      {formName.map((input: IInputData) => (
        <div className="form_inputText padding10" key={input.name}>
          <label htmlFor={input.name} className="form_label">
            {input.label}:
          </label>
          <Input
            type={input.type}
            name={input.name}
            styleName={input.styleName}
            inputValue={formValues[input.name]}
            onInput={(inputData: string) => onInputData(inputData, input.name)}
            error={errors[input.name]}
          />
        </div>
      ))}
    </>
  );
};

export default FormNameBlock;
