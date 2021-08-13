import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initErrorReducerState } from '../store-utils';

/* eslint no-param-reassign: "off" */
const errorSlice = createSlice({
  name: 'error',
  initialState: initErrorReducerState,
  reducers: {
    isError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export const ErrorReducer = errorSlice.reducer;
