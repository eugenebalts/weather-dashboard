import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrentWeatherError, ForecastError, WeatherState } from './types';
import { getCurrentWeather, getFiveDayForecast } from './actions';
import { GetCurrentWeatherThunkResponse } from './actions/types';
import { ForecastResponse } from '../../../services/endpoints/weather/types';

const initialState: WeatherState = {
  currentWeather: {
    fromGeolocation: false,
    isLoading: false,
    error: null,
    data: null,
  },
  forecast: {
    data: null,
    isLoading: false,
    error: null,
  },
};

const currentWeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    resetState(state) {
      const { currentWeather, forecast } = initialState;

      state.currentWeather = currentWeather;
      state.forecast = forecast;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getCurrentWeather.fulfilled,
      (state, { payload }: PayloadAction<GetCurrentWeatherThunkResponse>) => {
        const { weatherData, fromGeolocation } = payload;

        state.currentWeather.isLoading = false;
        state.currentWeather.data = weatherData;
        state.currentWeather.fromGeolocation = fromGeolocation;
      },
    );
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.currentWeather.data = null;
      state.forecast.data = null;
      state.currentWeather.isLoading = true;
      state.currentWeather.error = null;
    });
    builder.addCase(getCurrentWeather.rejected, (state, { payload }) => {
      const error = payload as CurrentWeatherError;

      state.currentWeather.error = error;
      state.currentWeather.isLoading = false;
    });
    builder.addCase(
      getFiveDayForecast.fulfilled,
      (state, { payload }: PayloadAction<ForecastResponse>) => {
        state.forecast.data = payload;
        state.forecast.error = null;
        state.forecast.isLoading = false;
      },
    );
    builder.addCase(getFiveDayForecast.pending, (state) => {
      state.forecast.data = null;
      state.forecast.isLoading = true;
      state.forecast.error = null;
    });
    builder.addCase(getFiveDayForecast.rejected, (state, { payload }) => {
      const error = payload as ForecastError;

      state.forecast.isLoading = false;
      state.forecast.error = error;
    });
  },
});

export const weatherReducer = currentWeatherSlice.reducer;
export const weatherActions = currentWeatherSlice.actions;
