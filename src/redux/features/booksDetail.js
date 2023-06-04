// redux store for profile detail
import { createSlice } from '@reduxjs/toolkit';

const name = 'booksDetail';

const initialState = {
  isLoading: true,
  booksDetail: null,
  error: null,
};

const booksDetailSlice = createSlice({
  name,
  initialState,
  reducers: {
    // get data
    fetchBooksDetailsPending: (state) => {
      state.isLoading = true;
    },
    fetchBooksDetailsFulfilled: (state, action) => {
      state.isLoading = false;
      state.booksDetail = action.payload;
    },
    fetchBooksDetailsRejected: (state, action) => {
      state.isLoading = false;
      state.booksDetail = null;
      state.error = action.payload;
    }
  }
});

export const booksDetailActions = booksDetailSlice.actions;
export const booksDetailReducers = booksDetailSlice.reducer;