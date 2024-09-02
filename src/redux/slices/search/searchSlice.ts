import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './types';
import getCoordinates from './actions';
import { GeocodingResponse } from '../../../services/endpoints/geocoding/types';

const initialState: SearchState = {
  search: '',
  suggestions: [],
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
    builder.addCase(getCoordinates.fulfilled, (state, { payload }: PayloadAction<GeocodingResponse[]>) => {
      const uniquePayload = payload.filter(
        (item, index, array) =>
          index === array.findIndex((t) => t.name === item.name && t.lat === item.lat && t.lon === item.lon),
      );

      state.suggestions = uniquePayload;
    });
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
