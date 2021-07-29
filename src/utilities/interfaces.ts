interface ICardInfo {
  id: number;
  name: string;
  surname: string;
  gender: string;
  bDay: string;
  date: string;
  zip: string;
  country: string;
  address: string;
  gifts?: Array<string>;
}

export default ICardInfo;

export interface IInputData {
  name: string;
  type: string;
  styleName: string;
  label: string;
  id?: string;
  max?: string;
  min?: string;
}

export interface IFormData {
  name: string;
  surname: string;
  gender: string;
  bDay: string;
  date: string;
  zip: string;
  country: string;
  address: string;
  agree: boolean;
}

export interface IErrors {
  name: string;
  surname: string;
  gender: string;
  bDay: string;
  date: string;
  agree: string;
}

export interface IInput {
  type: string;
  name: string;
  styleName: string;
  onInput: (inputData: string | boolean) => void;
  id?: string;
  error?: string;
  min?: string;
  max?: string;
  checked?: boolean;
  inputValue?: string;
}

export interface IButton {
  styleName: string;
  styleNameDisabled: string;
  content: string;
  onClick: () => void;
  disabled: boolean;
}

export interface IFormGender {
  formGender: Array<IInputData>;
  onInputData: (inputData: string, inputName: string) => void;
  errors?: IErrors;
  checked: string;
}

export interface IDataSelect {
  label: string;
  name: string;
  id: string;
  styleName: string;
  options: {
    value: string;
    name: string;
  }[];
}

export interface IFormSelect {
  formSelect: IDataSelect;
  onChangeData: (inputData: string, inputName: string) => void;
  formValues: IFormData;
  errors?: IErrors;
}

export interface IFormDate {
  formDate: IInputData;
  onInputData: (inputData: string, inputName: string) => void;
  formValues: IFormData;
  errors?: IErrors;
}

export interface IPost {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IApiResponse {
  status: string;
  totalResults: number;
  articles: Array<IPost>;
}
