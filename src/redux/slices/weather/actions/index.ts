import { createAsyncThunk } from '@reduxjs/toolkit';
import weatherApi from '../../../../services/endpoints/weather/weatherApi';
import { CoordinatesWithMetadata } from './types';
import { Coordinates } from '../../../../services/endpoints/geocoding/types';

export const getCurrentWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async (coordinatesWithMetadata: CoordinatesWithMetadata) => {
    const { fromGeolocation, ...coordinates } = coordinatesWithMetadata;

    const res = await weatherApi.getCurrentWeather(coordinates);

    return {
      weatherData: res,
      fromGeolocation: Boolean(fromGeolocation),
    };
  },
);

export const getFiveDayForecast = createAsyncThunk(
  'weather/getFiveDayForecast',
  async (coordinates: Coordinates) => {
    const res = await weatherApi.getFiveDayForecast(coordinates);

    return res;
  },
);
