import { createAsyncThunk } from '@reduxjs/toolkit';
import { Coordinates } from '../../../../services/endpoints/geocoding/types';
import weatherApi from '../../../../services/endpoints/weather/weatherApi';

const getCurrentWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async (coordinates: Coordinates) => {
    const res = await weatherApi.getCurrentWeather(coordinates);
    return res;
  },
);

export default getCurrentWeather;
