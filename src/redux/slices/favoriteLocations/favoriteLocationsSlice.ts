import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteLocationsState } from './types';
import { Coordinates, CoordinatesWithMetadata } from '../../../types';

const initialState: FavoriteLocationsState = {
  favoriteLocations: JSON.parse(localStorage.getItem('favoriteLocations') || '[]'),
};

const favoriteLocationsSlice = createSlice({
  name: 'favoriteLocations',
  initialState,
  reducers: {
    addLocation(state, { payload }: PayloadAction<CoordinatesWithMetadata>) {
      const isLocationExists = state.favoriteLocations.some(
        (location) =>
          (payload.fromGeolocation && location.fromGeolocation) ||
          (location.lat === payload.lat && location.lon === payload.lon),
      );

      if (!isLocationExists) {
        state.favoriteLocations = [...state.favoriteLocations, payload];
      }
    },
    removeLocation(state, { payload }: PayloadAction<Coordinates>) {
      state.favoriteLocations = state.favoriteLocations.filter(
        (location) => location.lat !== payload.lat && location.lon !== payload.lon,
      );
    },
  },
});

export const favoriteLocationsReducer = favoriteLocationsSlice.reducer;
export const favoriteLocationsActions = favoriteLocationsSlice.actions;
