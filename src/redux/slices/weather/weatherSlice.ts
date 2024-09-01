import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherState } from './types';
import getCurrentWeather from './actions';
import { GetCurrentWeatherThunkResponse } from './actions/types';

const initialState: WeatherState = {
  fromGeolocation: false,
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
      (state, { payload }: PayloadAction<GetCurrentWeatherThunkResponse>) => {
        const { weatherData, fromGeolocation } = payload;

        state.currentWeather = weatherData;
        state.fromGeolocation = fromGeolocation;
      },
    );
  },
});

export const weatherReducer = currentWeatherSlice.reducer;
export const weatherActions = currentWeatherSlice.actions;
