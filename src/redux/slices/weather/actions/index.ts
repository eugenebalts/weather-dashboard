import { createAsyncThunk } from '@reduxjs/toolkit';
import weatherApi from '../../../../services/endpoints/weather/weatherApi';
import { CoordinatesWithMetadata } from './types';

const getCurrentWeather = createAsyncThunk(
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

export default getCurrentWeather;
