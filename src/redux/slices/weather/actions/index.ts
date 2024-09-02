import { createAsyncThunk } from '@reduxjs/toolkit';
import weatherApi from '../../../../services/endpoints/weather/weatherApi';
import { CoordinatesWithMetadata, Coordinates } from '../../../../types';

export const getCurrentWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async (coordinatesWithMetadata: CoordinatesWithMetadata, { rejectWithValue }) => {
    try {
      const { fromGeolocation, ...coordinates } = coordinatesWithMetadata;

      const res = await weatherApi.getCurrentWeather(coordinates);

      return {
        weatherData: res,
        fromGeolocation,
      };
    } catch {
      return rejectWithValue({
        message: 'Failed to get Current Weather',
        coordinatesWithMetadata,
      });
    }
  },
);

export const getFiveDayForecast = createAsyncThunk(
  'weather/getFiveDayForecast',
  async (coordinates: Coordinates, { rejectWithValue }) => {
    try {
      const res = await weatherApi.getFiveDayForecast(coordinates);

      return res;
    } catch {
      return rejectWithValue({
        message: 'Failed to get Five Day Forecast',
        coordinates,
      });
    }
  },
);
