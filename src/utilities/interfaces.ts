export interface IButton {
  styleName: string;
  styleNameDisabled?: string;
  onButtonClick: (param?: string) => void;
  disabled: boolean;
  content: string;
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

export interface IPaginationButtonState {
  Left: boolean;
  Right: boolean;
}

export interface IApiResponse {
  status: string;
  totalResults: number;
  articles: Array<IPost>;
}

export interface IRadioBlock {
  name: string;
  label: string;
  param: string;
  checked: string;
  changeSort: (param: string) => void;
}

export interface IRequestParam {
  q: string;
  sortBy: string;
  pages: string;
  pageSize: string;
  page: string;
}

export interface ISortingConfig {
  label: string;
  name: string;
  choice: {
    name: string;
    label: string;
    param: string;
  }[];
}

export interface ISortingProps {
  config: ISortingConfig;
  changeSort: (sort: string) => void;
  checked: string;
}

interface IInputPageConfig {
  label: string;
  name: string;
}

export interface IPageInput {
  config: IInputPageConfig;
  onInputChoice: (value: string, name: string) => void;
  value: number;
}

export interface IPages {
  pages: string;
  pageSize: string;
  page: string;
}
export interface IPageBlock {
  config: Array<IInputPageConfig>;
  onInputChoice: (value: string, name: string) => void;
  pages: IRequestParam;
}

export interface IPaginationPage {
  articles: JSX.Element | Array<JSX.Element>;
  onButtonClick: (page: string) => void;
  btnDisabled: IPaginationButtonState;
  isLoading: boolean;
  isError: boolean;
  onErrorClick: (param: string) => void;
}

export interface IApiRequest {
  onErrorApi: (errorApi: boolean) => void;
}

export interface IPopup {
  message: Array<string>;
  onButtonClick?: (param: string) => void;
  isDisabled: boolean;
  isShowButton: boolean;
}

export interface IPaginationControl {
  onButtonClick: (param: string) => void;
  btnDisabled: { Left: boolean; Right: boolean };
}

export interface ISearch {
  onSearch: (searchKey: string) => void;
  value: string;
}

export interface IArticle {
  showMore: boolean;
  post: IPost;
}
