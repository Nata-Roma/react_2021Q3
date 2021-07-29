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
};
