const validators = {
  name: {
    required: {
      value: true,
      message: 'Field cannot be empty...',
    },
    custom: {
      isValid: (value: string): boolean => value.length >= 3,
      message: 'At least 3 characters...',
    },
  },
  surname: {
    required: {
      value: true,
      message: 'Field cannot be empty...',
    },
    custom: {
      isValid: (value: string): boolean => value.length >= 3,
      message: 'At least 3 characters...',
    },
  },
  bDay: {
    required: {
      value: true,
      message: 'Field cannot be empty...',
    },
  },
  zip: {
    required: {
      value: true,
      message: 'Field cannot be empty...',
    },
    custom: {
      isValid: (value: string): boolean => value.length >= 4,
      message: 'At least 4 characters...',
    },
  },
  date: {
    required: {
      value: true,
      message: 'Field cannot be empty...',
    },
  },
  agree: {
    checked: {
      value: true,
      message: 'Checkbox should be checked ...',
    },
  },
  address: {
    required: {
      value: true,
      message: 'Field cannot be empty...',
    },
    custom: {
      isValid: (value: string): boolean => value.length >= 5,
      message: 'At least 5 characters...',
    },
  },
};

export default validators;
