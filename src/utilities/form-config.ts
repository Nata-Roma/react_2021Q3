export const dateNumberToString = (date: Date): string => {
  const year = date.getFullYear().toString();
  const monthNum = date.getMonth() + 1;
  const month = (monthNum < 10 ? `0${monthNum}` : monthNum).toString();
  const day = date.getDate().toString();
  return `${year}-${month}-${day}`;
};

export const formInitData = {
  name: '',
  surname: '',
  gender: 'male',
  bDay: '',
  date: '',
  zip: '',
  country: 'ru',
  address: '',
  agree: false,
};

export const initErrors = {
  name: '',
  surname: '',
  gender: '',
  bDay: '',
  date: '',
  agree: '',
  address: '',
};

const inputViewData = {
  formNameInputs: [
    {
      name: 'name',
      type: 'text',
      styleName: 'form_input',
      label: 'Name',
    },
    {
      name: 'surname',
      type: 'text',
      styleName: 'form_input',
      label: 'Surname',
    },
  ],
  formGenderInputs: [
    {
      name: 'gender',
      id: 'male',
      type: 'radio',
      styleName: 'form_radio',
      label: 'M',
    },
    {
      name: 'gender',
      id: 'female',
      type: 'radio',
      styleName: 'form_radio',
      label: 'F',
    },
  ],
  birthdayInput: {
    name: 'bDay',
    type: 'date',
    styleName: 'form_input',
    label: 'Birthday',
    max: dateNumberToString(new Date()),
    min: dateNumberToString(
      new Date(Date.now() - 365 * 24 * 60 * 60 * 1000 * 120),
    ),
  },
  zipInput: [
    {
      name: 'zip',
      type: 'text',
      styleName: 'form_input',
      label: 'ZIP',
    },
  ],
  dateInput: {
    name: 'date',
    type: 'date',
    styleName: 'form_input',
    label: 'Date',
    max: dateNumberToString(
      new Date(Date.now() + 24 * 60 * 60 * 1000 * (365 / 6)),
    ),
    min: dateNumberToString(new Date()),
  },
  checkboxAgree: {
    name: 'agree',
    type: 'checkbox',
    styleName: 'form_radio',
    label: 'I agree for the data processing',
  },
  country: {
    label: 'Country',
    name: 'country',
    id: 'country',
    styleName: 'form_select',
    options: [
      {
        value: 'ru',
        name: 'Russia',
      },
      {
        value: 'ua',
        name: 'Ukraine',
      },
      {
        value: 'by',
        name: 'Belorussia',
      },
      {
        value: 'cy',
        name: 'Cyprus',
      },
    ],
  },
  formAddress: [
    {
      name: 'address',
      type: 'text',
      styleName: 'form_input',
      label: 'Address',
    },
  ],
};

export default inputViewData;
