import React from 'react';
import { IFormGender } from '../../utilities/interfaces';
import Input from './input';

const FormGenderBlock = (props: IFormGender): JSX.Element => {
  const { formGender, onInputData, checked } = props;
  return (
    <>
      <div className="form_inputText half_width">
        <label htmlFor={formGender[0].name} className="form_label">
          {formGender[0].name[0].toUpperCase() + formGender[0].name.slice(1)}:
        </label>
        <div className="form_inputText form_row padding5_10">
          {formGender.map((input) => (
            <div className="form_inputRadio" key={input.id}>
              <Input
                type={input.type}
                name={input.name}
                styleName={input.styleName}
                id={input.id}
                onInput={(inputData: string) =>
                  onInputData(inputData, input.name)
                }
                checked={checked === input.id}
              />
              <label htmlFor={input.id} className="form_label">
                {input.label}:
              </label>
            </div>
          ))}
        </div>
        <div className="form_validation padding10_left" />
      </div>
    </>
  );
};

export default FormGenderBlock;
