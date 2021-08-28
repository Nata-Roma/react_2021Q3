import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiDataResponse, initReducerState } from '../store-utils';

/* eslint no-param-reassign: "off" */
const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: initReducerState,
  reducers: {
    getApiData(state, action: PayloadAction<IApiDataResponse>) {
      state.apiState = action.payload.apiState;
      state.pages = action.payload.pages;
    },
    setNewPage(state, action: PayloadAction<string>) {
      state.pages.page = (+state.pages.page + +action.payload).toString();
    },
    setArticlesPerPage(state, action: PayloadAction<{value: string, name: string}>) {
      state.pages[action.payload.name] = action.payload.value;
    },
  },
});

export const apiDataActions = apiDataSlice.actions;
export const ApiDataReducer = apiDataSlice.reducer;
