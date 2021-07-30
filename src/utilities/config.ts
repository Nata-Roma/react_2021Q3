const configSorting = {
  label: 'Sort By',
  name: 'sortBy',
  choice: [
    {
      name: 'sortBy',
      label: 'newest',
      param: 'publishedAt',
    },
    {
      name: 'sortBy',
      label: 'popular',
      param: 'popularity',
    },
    {
      name: 'sortBy',
      label: 'relevant',
      param: 'relevancy',
    },
  ],
};

export default configSorting;

export const initRequestParam = {
  q: '',
  sortBy: 'publishedAt',
  pages: '1',
  pageSize: '1',
  page: '1',
};

export const configPageInput = [
  {
    label: 'Pages Total',
    name: 'pages',
  },
  {
    label: 'Articles per Page',
    name: 'pageSize',
  },
  {
    label: 'Current Page',
    name: 'page',
  },
];
