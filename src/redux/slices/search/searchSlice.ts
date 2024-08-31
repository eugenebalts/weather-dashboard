import { createSlice } from '@reduxjs/toolkit';
import { SearchState } from './types';
import getCoordinates from './actions';

const initialState: SearchState = {
  search: '',
  suggestions: [],
  isLoading: false,
  isError: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch(state, { payload }) {
      state.search = payload;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getCoordinates.fulfilled, (state, { payload }) => {
      state.suggestions = payload;
    });
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
