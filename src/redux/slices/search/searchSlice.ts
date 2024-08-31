import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './types';
import getCoordinates from './actions';
import { GeocodingResponse } from '../../../services/endpoints/geocoding/types';

const initialState: SearchState = {
  search: '',
  suggestions: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getCoordinates.fulfilled,
      (state, { payload }: PayloadAction<GeocodingResponse[]>) => {
        state.suggestions = payload;
      },
    );
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
