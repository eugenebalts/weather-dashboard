import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherState } from './types';
import { getCurrentWeather, getFiveDayForecast } from './actions';
import { GetCurrentWeatherThunkResponse } from './actions/types';
import { ForecastResponse } from '../../../services/endpoints/weather/types';

const initialState: WeatherState = {
  fromGeolocation: false,
  currentWeather: null,
  forecast: null,
  error: null,
  isLoading: false,
};

const currentWeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    resetState(state) {
      const { fromGeolocation, currentWeather, forecast, error, isLoading } = initialState;

      state.fromGeolocation = fromGeolocation;
      state.currentWeather = currentWeather;
      state.forecast = forecast;
      state.error = error;
      state.isLoading = isLoading;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getCurrentWeather.fulfilled,
      (state, { payload }: PayloadAction<GetCurrentWeatherThunkResponse>) => {
        const { weatherData, fromGeolocation } = payload;

        state.currentWeather = weatherData;
        state.fromGeolocation = fromGeolocation;
      },
    );
    builder.addCase(
      getFiveDayForecast.fulfilled,
      (state, { payload }: PayloadAction<ForecastResponse>) => {
        state.forecast = payload;
      },
    );
  },
});

export const weatherReducer = currentWeatherSlice.reducer;
export const weatherActions = currentWeatherSlice.actions;
