import React from 'react';
import { IFormSelect } from '../../utilities/interfaces';

const FormSelect = (props: IFormSelect): JSX.Element => {
  const { formSelect, onChangeData, formValues } = props;

  const onChangeHandler = (e) => {
    onChangeData(e.currentTarget.value, formSelect.name);
  };

  return (
    <>
      <label htmlFor={formSelect.name} className="form_label">
        {formSelect.label}:
      </label>
      <select
        className={formSelect.styleName}
        name={formSelect.name}
        id={formSelect.id}
        value={formValues.country}
        onChange={(e) => onChangeHandler(e)}
      >
        {formSelect.options.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormSelect;
