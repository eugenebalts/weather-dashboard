import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherState } from './types';
import getCurrentWeather from './actions';
import { WeatherResponse } from '../../../services/endpoints/weather/types';

const initialState: WeatherState = {
  currentWeather: null,
  lat: 0,
  lon: 0,
  error: null,
  isLoading: false,
};

const currentWeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getCurrentWeather.fulfilled,
      (state, { payload }: PayloadAction<WeatherResponse>) => {
        state.currentWeather = payload;
      },
    );
  },
});

export const weatherReducer = currentWeatherSlice.reducer;
export const weatherActions = currentWeatherSlice.actions;
