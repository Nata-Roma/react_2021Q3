import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initLoadingReducerState } from '../store-utils';

/* eslint no-param-reassign: "off" */
const loadingSlice = createSlice({
  name: 'loading',
  initialState: initLoadingReducerState,
  reducers: {
    isLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export const LoadingReducer = loadingSlice.reducer;
