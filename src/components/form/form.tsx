import React, { useState } from 'react';
import inputViewData, {
  formInitData,
  initErrors,
} from '../../utilities/form-config';
import ICardInfo from '../../utilities/interfaces';
import validators from '../../utilities/validators';
import Button from '../button/button';
import FormDate from './form-date';
import FormSelect from './form-select';
import './form.css';
import FormGenderBlock from './gender-block';
import Input from './input';
import FormNameBlock from './name-block';

const Form = (props: {
  formOnSubmit: (formData: ICardInfo) => void;
}): JSX.Element => {
  const [formData, setFormData] = useState(formInitData);
  const [errors, setErrors] = useState(initErrors);
  const [checked, setChecked] = useState(inputViewData.formGenderInputs[0].id);
  const [submit, setSubmit] = useState(false);
  const { formOnSubmit } = props;

  const checkSubmit = (): boolean => {
    const formCheck =
      Object.values(formData).filter((value) => value).length ===
      Object.keys(formData).length;
    const formError =
      Object.values(errors).reduce((acc, item) => acc + item.length, 0) === 0;

    return formCheck && formError;
  };

  const inputValidation = (
    value: string | boolean,
    inputName: string,
  ): void => {
    if (inputName === 'gender') {
      setChecked(value as string);
    }
    for (const key in validators) {
      if (key === inputName) {
        const validator = validators[key];
        if (validator?.required?.value && !value) {
          setErrors((prevState) => ({
            ...prevState,
            [key]: validator.required.message,
          }));
        } else if (validator?.required?.value && value) {
          setErrors((prevState) => ({ ...prevState, [key]: '' }));
        }

        const custom = validator?.custom;
        if (custom?.isValid && !custom.isValid((value as string).trim())) {
          setErrors((prevState) => ({ ...prevState, [key]: custom.message }));
        }

        const checkedValue = validator?.checked;
        if (checkedValue?.value && !value) {
          setErrors((prevState) => ({
            ...prevState,
            [key]: checkedValue.message,
          }));
        } else if (checkedValue?.value && value) {
          setErrors((prevState) => ({ ...prevState, [key]: '' }));
        }
      }
    }
    setSubmit(checkSubmit());
  };

  const onSubmitHandler = (): void => {
    formOnSubmit({ ...formData, id: Math.random() });
    setFormData({ ...formInitData });
    setChecked(inputViewData.formGenderInputs[0].id);
    setSubmit(false);
  };

  const formElementEventHandler = (inputData: string, inputName: string) => {
    inputValidation(inputData, inputName);
    setFormData((prevState) => ({ ...prevState, [inputName]: inputData }));
  };

  return (
    <div className="form_container">
      <div className="form_title">Order for delivery</div>
      <FormNameBlock
        formName={inputViewData.formNameInputs}
        onInputData={formElementEventHandler}
        formValues={formData}
        errors={errors}
      />
      <div className="form_inputText form_row padding10 form_spacebetween">
        <FormGenderBlock
          formGender={inputViewData.formGenderInputs}
          onInputData={formElementEventHandler}
          checked={checked}
        />
        <div className="form_inputText half_width">
          <FormDate
            formDate={inputViewData.birthdayInput}
            onInputData={formElementEventHandler}
            formValues={formData}
            errors={errors}
          />
        </div>
      </div>

      <div className="form_inputText">
        <div className="delivery_title padding10">Deliver:</div>
        <div className="form_inputText form_row padding10 form_spacebetween">
          <div className="form_inputText half_width ">
            <FormNameBlock
              formName={inputViewData.zipInput}
              onInputData={formElementEventHandler}
              formValues={formData}
              errors={errors}
            />
          </div>
          <div className="form_inputText half_width">
            <FormDate
              formDate={inputViewData.dateInput}
              onInputData={formElementEventHandler}
              formValues={formData}
              errors={errors}
            />
          </div>
        </div>
      </div>
      <div className="form_inputText padding10">
        <FormSelect
          formSelect={inputViewData.country}
          onChangeData={(inputData: string, inputName: string) => {
            setFormData((prevState) => ({
              ...prevState,
              [inputName]: inputData,
            }));
          }}
          formValues={formData}
        />
      </div>

      <FormNameBlock
        formName={inputViewData.formAddress}
        onInputData={formElementEventHandler}
        formValues={formData}
        errors={errors}
      />
      <div className="form_inputRadio form_row padding10 full_width">
        <Input
          type={inputViewData.checkboxAgree.type}
          name={inputViewData.checkboxAgree.name}
          styleName={inputViewData.checkboxAgree.styleName}
          onInput={(inputData) => {
            inputValidation(inputData, inputViewData.checkboxAgree.name);
            setFormData((prevState) => ({
              ...prevState,
              [inputViewData.checkboxAgree.name]: inputData,
            }));
          }}
          checked={formData.agree}
        />
        <label
          htmlFor={inputViewData.checkboxAgree.name}
          className="form_label"
        >
          {inputViewData.checkboxAgree.label}
        </label>
      </div>
      <div className="form_validation padding10_left">
        {errors[inputViewData.checkboxAgree.name]}
      </div>
      <Button
        styleName="form_button"
        styleNameDisabled="form_button_disabled"
        content="submit"
        onClick={() => onSubmitHandler()}
        disabled={!submit}
      />
    </div>
  );
};

export default Form;
