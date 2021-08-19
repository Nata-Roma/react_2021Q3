import { apiDataActions } from '../components/store/slices/apiData-slice';
import { ApiDataReducer } from '../components/store/slices/apiData-slice';

const apiState = {
  status: 'ok',
  totalResults: 256,
  articles: [
    {
      source: {
        id: '123',
        name: 'fake news',
      },
      author: 'Author',
      title: 'Mock Article',
      description: 'This is a Mock Article',
      url: 'http://google.com',
      urlToImage: 'http://google.com',
      publishedAt: '18.08.2021',
      content: 'This is a Mock Article',
    },
  ],
};

const pages = {
  pages: '5',
  pageSize: '5',
  page: '2',
};

test('should return the initial state', () => {
  const previousState = {
    apiState: null,
    pages: {
      pages: '1',
      pageSize: '1',
      page: '1',
    },
  };
  expect(
    ApiDataReducer(
      previousState,
      apiDataActions.getApiData({ apiState, pages }),
    ),
  ).toEqual({
    apiState: apiState,
    pages: pages,
  });

  expect(
    ApiDataReducer(previousState, apiDataActions.setNewPage('1')),
  ).toEqual({
    apiState: null,
    pages: {
      pages: '1',
      pageSize: '1',
      page: '2',
    },
  });
});
